import type { Block } from 'payload'
import { richTextWithHtmlField } from '@/fields/richText'

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
        ...richTextWithHtmlField('content', {
          richTextOverrides: {
            required: true,
          },
        }),
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
