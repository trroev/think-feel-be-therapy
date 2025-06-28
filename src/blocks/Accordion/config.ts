import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'
import { richTextField } from '@/fields/richText'

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
        ...richTextField({
          richTextOverrides: {
            name: 'content',
            required: true,
          },
        }),
        lexicalHTMLField({
          htmlFieldName: 'contentHTML',
          lexicalFieldName: 'content',
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
