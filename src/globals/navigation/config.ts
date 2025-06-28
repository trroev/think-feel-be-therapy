import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'

export const Navigation: GlobalConfig = {
  fields: [
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 5,
      },
    }),
    link({
      appearances: false,
      overrides: {
        label: 'Call to Action',
        name: 'cta',
      },
    }),
  ],
  slug: 'navigation',
}
