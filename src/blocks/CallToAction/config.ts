import type { Block } from 'payload'
import { backgroundColorField } from '@/fields/backgroundColor'
import { linkGroup } from '@/fields/linkGroup'
import { richTextWithHtmlField } from '@/fields/richText'

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
    ...richTextWithHtmlField('body'),
    linkGroup({
      appearances: false,
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
