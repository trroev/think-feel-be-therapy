import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'
import { backgroundColorField } from '@/fields/backgroundColor'
import { linkGroup } from '@/fields/linkGroup'
import { richTextField } from '@/fields/richText'

export const CallToAction: Block = {
  fields: [
    {
      name: 'backgroundImage',
      relationTo: 'media',
      type: 'relationship',
    },
    ...backgroundColorField(),
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    ...richTextField({
      richTextOverrides: {
        name: 'body',
      },
    }),
    lexicalHTMLField({
      htmlFieldName: 'bodyHTML',
      lexicalFieldName: 'body',
    }),
    linkGroup({
      overrides: { maxRows: 2 },
    }),
  ],
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  interfaceName: 'CallToActionBlock',
  slug: 'cta',
}
