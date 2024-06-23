import type { GlobalConfig } from 'payload/types'

import { navItems } from '../fields/nav-items'
import link from '../fields/link'

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
    navItems,
  ],
}
