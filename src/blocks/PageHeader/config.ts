import type { Block } from 'payload'
import { backgroundColorField } from '@/fields/backgroundColor'

export const PageHeader: Block = {
  fields: [
    ...backgroundColorField(),
    {
      name: 'heading',
      required: true,
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
  ],
  labels: {
    singular: 'Page Header',
    plural: 'Page Headers',
  },
  interfaceName: 'PageHeaderBlock',
  slug: 'page-header',
}
