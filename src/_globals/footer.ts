import link from '@/_fields/link'
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badgeGroup',
      type: 'array',
      maxRows: 5,
      fields: [
        {
          name: 'badge',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
