import type { Block } from 'payload'

export const Accordion: Block = {
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'AccordionBlock',
  labels: {
    singular: 'Accordion',
    plural: 'Accordion Blocks',
  },
  slug: 'accordion',
}
