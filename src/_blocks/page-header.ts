import { backgroundColor } from '@/_fields/background-color'
import { Block } from 'payload'



export const pageHeader: Block = {
  slug: 'pageHeaderBlock',
  labels: {
    singular: 'Page Header',
    plural: 'Page Headers',
  },
  interfaceName: 'PageHeaderBlockType',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    backgroundColor,
  ],
}
