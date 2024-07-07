import { backgroundColor } from '@/_fields/background-color'
import linkGroup from '@/_fields/link-group'
import { richText } from '@/_fields/richtext'
import { type Block } from 'payload'

export const CallToAction: Block = {
  slug: 'ctaBlock',
  imageURL: '/images/blocks/cta-block.jpg',
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
      type: 'textarea',
    },
    richText('Body'),
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
