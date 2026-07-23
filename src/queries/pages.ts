import config from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'

export const getPage = cache(async (slug: string) => {
  const payload = await getPayload({ config })
  const { isEnabled: draft } = await draftMode()

  const response = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return response.docs[0]
})

export const getPublishedPages = cache(async () => {
  const payload = await getPayload({ config })

  const response = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 0,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
      updatedAt: true,
    },
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return response.docs
})
