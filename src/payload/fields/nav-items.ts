import { Field } from 'payload/types'

export const navItems: Field = {
  name: 'navItems',
  label: 'Navigation Items',
  type: 'array',
  required: true,
  maxRows: 8,
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
  ],
}
