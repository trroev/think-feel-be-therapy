import { backgroundColor } from '../../fields/background-color'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import { Block } from 'payload/types'

export const CallToAction: Block = {
  slug: 'ctaBlock',
  // imageURL: '/blocks/cta-block.jpg',
  interfaceName: 'CallToActionBlockType',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    backgroundColor,
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    richText({
      name: 'body',
      required: false,
    }),
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
