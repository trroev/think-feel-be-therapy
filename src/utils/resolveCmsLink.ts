import { match, P } from 'ts-pattern'
import type { Link } from '@/types/payload-types'
import { pageToPath } from './pageToPath'

export type ResolvedCmsLink = {
  href: string
  label: string
  newTab: boolean
}

export function resolveCmsLink(
  link: Link | null | undefined
): ResolvedCmsLink | null {
  return match(link)
    .with(
      {
        type: 'reference',
        reference: {
          value: {
            slug: P.string.minLength(1),
            title: P.string.minLength(1),
          },
        },
      },
      ({ reference: { value }, label, newTab }) => ({
        href: pageToPath(value.slug),
        label: label ?? value.title,
        newTab: newTab ?? false,
      })
    )
    .with(
      { type: 'custom', url: P.string.minLength(1) },
      ({ url, label, newTab }) => ({
        href: url,
        label: label ?? '',
        newTab: newTab ?? false,
      })
    )
    .otherwise(() => null)
}

export function isCmsLinkResolvable(link: Link | null | undefined): boolean {
  return resolveCmsLink(link) !== null
}
