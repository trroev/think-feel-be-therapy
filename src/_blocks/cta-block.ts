import { backgroundColor } from '@/_fields/background-color'
import linkGroup from '@/_fields/link-group'
import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
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
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
