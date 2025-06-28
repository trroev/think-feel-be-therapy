import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'

export const Users: CollectionConfig = {
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  slug: 'users',
  timestamps: true,
}
