import { EveryoneAccess } from '@/_access/everyone'
import { LoggedInAccess } from '@/_access/logged-in'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  access: {
    create: LoggedInAccess,
    delete: LoggedInAccess,
    read: EveryoneAccess,
    update: LoggedInAccess,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  slug: 'media',
  upload: true,
}
