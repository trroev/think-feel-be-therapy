import { match, P } from 'ts-pattern'
import type { Page } from '@/types/payload-types'

type Link = {
  type?: ('reference' | 'custom') | null
  newTab?: boolean | null
  label?: string | null
  reference?: {
    relationTo: 'pages'
    value: string | Page
  } | null
  url?: string | null
}

export function getLink(link: Link): {
  href: string
  label: string
  newTab: boolean
} | null {
  return match(link)
    .with(
      {
        type: 'reference',
        reference: {
          value: P.when(
            (v): v is Page =>
              typeof v === 'object' &&
              v !== null &&
              !!v.slug &&
              typeof v.slug === 'string' &&
              !!v.title &&
              typeof v.title === 'string'
          ),
        },
      },
      ({ reference, newTab }) => {
        const value = reference.value
        return {
          href: `/${value.slug}`,
          label: value.title,
          newTab: newTab ?? false,
        }
      }
    )
    .with({ type: 'custom' }, (l) =>
      match(l)
        .with({ url: P.string, label: P.string }, ({ url, label, newTab }) =>
          url && label ? { href: url, label, newTab: newTab ?? false } : null
        )
        .otherwise(() => null)
    )
    .otherwise(() => null)
}
