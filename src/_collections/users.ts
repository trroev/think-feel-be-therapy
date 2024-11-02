import { AdminAccess } from '@/_access/admin'
import { LoggedInAccess } from '@/_access/logged-in'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  access: {
    create: AdminAccess,
    read: LoggedInAccess,
    update: AdminAccess,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      defaultValue: 'user',
      name: 'role',
      options: ['user', 'admin'],
      required: true,
      type: 'select',
    },
  ],
  slug: 'users',
}
