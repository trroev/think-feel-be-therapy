import { backgroundColor } from '@/_fields/background-color'
import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { type Block } from 'payload'

export const TextSection: Block = {
  slug: 'textSectionBlock',
  imageURL: '/images/blocks/text-section-block.jpg',
  interfaceName: 'TextSectionBlockType',
  labels: {
    singular: 'Text Section',
    plural: 'Text Sections',
  },
  fields: [
    backgroundColor,
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'headingAlignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageFirst',
      type: 'checkbox',
    },
  ],
}
