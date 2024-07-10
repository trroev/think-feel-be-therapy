import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { type Block } from 'payload'

export const Accordion: Block = {
  slug: 'accordionBlock',
  imageURL: '/images/blocks/accordion-block.jpg',
  interfaceName: 'AccordionBlockType',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'multiple',
      options: [
        {
          label: 'Multiple',
          value: 'multiple',
        },
        {
          label: 'Single',
          value: 'single',
        },
      ],
      admin: {
        description: 'Choose whether multiple or single items can be open at once.',
      },
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
      ],
    },
  ],
}
