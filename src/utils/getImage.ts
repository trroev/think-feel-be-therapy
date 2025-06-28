import { match, P } from 'ts-pattern'

import type { Media } from '@/types/payload-types'

export type ImageSource = string | Media | null | undefined

export function getImage(
  source: ImageSource
): { alt: string; url: string } | null {
  return match(source)
    .with({ url: P.string }, (media) => {
      return {
        alt: media.alt,
        url: media.url,
      }
    })
    .otherwise(() => null)
}
