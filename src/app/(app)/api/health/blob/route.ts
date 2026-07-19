import config from '@payload-config'
import { head, list } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import type { Media } from '@/types/payload-types'

/**
 * Blob storage health check.
 *
 * Media for this site lives in Vercel Blob (see payload.config.ts). If the Blob
 * store is deleted or BLOB_READ_WRITE_TOKEN is stale/missing, every media request
 * silently returns a 500 — which is exactly how "all images broke" once slipped
 * through unnoticed. This endpoint fails loudly instead: hit it from uptime
 * monitoring so a broken store pages you before users see broken images.
 *
 *   200 -> { ok: true, ... }   store reachable, token valid, sample file present
 *   503 -> { ok: false, ... }  something is wrong (stage tells you what)
 */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const TOKEN_FORMAT = /^vercel_blob_rw_([a-z\d]+)_[a-z\d]+$/i
const TIMEOUT_MS = 5000

// Keep the endpoint bounded even if a Blob request hangs (0.22.3 has no
// abortSignal option, so race the promise against a timeout).
const withTimeout = <T>(promise: Promise<T>, label: string): Promise<T> =>
  Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(
        () => reject(new Error(`${label} timed out after ${TIMEOUT_MS}ms`)),
        TIMEOUT_MS
      )
    ),
  ])

const fail = (
  stage: string,
  message: string,
  extra?: Record<string, unknown>
) =>
  NextResponse.json(
    { ok: false, stage, error: message, ...extra },
    { status: 503 }
  )

export async function GET() {
  // 1. Token present + well-formed (storeId is parsed from it by the plugin).
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) {
    return fail('token', 'BLOB_READ_WRITE_TOKEN is not set')
  }
  const storeId = token.match(TOKEN_FORMAT)?.[1]?.toLowerCase()
  if (!storeId) {
    return fail(
      'token',
      'BLOB_READ_WRITE_TOKEN is malformed (expected vercel_blob_rw_<storeId>_<secret>)'
    )
  }

  // 2. Store reachable + token valid — this throws if the store was deleted.
  let blobCount: number
  try {
    const { blobs } = await withTimeout(list({ token, limit: 1 }), 'store list')
    blobCount = blobs.length
  } catch (err) {
    return fail('store', `Blob store unreachable: ${(err as Error).message}`, {
      storeId,
    })
  }

  // 3. A real media doc's file actually exists in the store. This mirrors exactly
  //    what @payloadcms/storage-vercel-blob's static handler does on every media
  //    request (head() on baseUrl + encodeURIComponent(filename)), so it catches
  //    the "file missing from store" case that a bare store probe would miss.
  let sampleCheck: { filename: string; present: boolean } | null = null
  try {
    const payload = await getPayload({ config })
    const media = await payload.find({
      collection: 'media',
      limit: 1,
      depth: 0,
    })
    const doc = media.docs[0] as Media | undefined
    if (doc?.filename) {
      const blobUrl = `https://${storeId}.public.blob.vercel-storage.com/${encodeURIComponent(doc.filename)}`
      try {
        await withTimeout(head(blobUrl, { token }), 'sample head')
        sampleCheck = { filename: doc.filename, present: true }
      } catch {
        return fail(
          'serve',
          `Sample media file missing from store: ${doc.filename}`,
          {
            storeId,
            sampleCheck: { filename: doc.filename, present: false },
          }
        )
      }
    }
  } catch (err) {
    // The store probe above already passed; a DB/lookup failure here is a
    // separate concern, so report it as a warning rather than a hard failure.
    return NextResponse.json({
      ok: true,
      storeId,
      blobCount,
      sampleCheck: null,
      warning: `sample presence check skipped: ${(err as Error).message}`,
    })
  }

  return NextResponse.json({ ok: true, storeId, blobCount, sampleCheck })
}
