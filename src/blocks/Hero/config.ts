import type { Block } from 'payload'

import { backgroundColorField } from '@/fields/backgroundColor'

export const Hero: Block = {
  fields: [
    {
      name: 'heading',
      required: true,
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      relationTo: 'media',
      type: 'relationship',
    },
    ...backgroundColorField({
      admin: {
        condition: (data) => !data?.backgroundImage,
      },
      defaultValue: undefined,
    }),
    {
      fields: [
        {
          name: 'tagline',
          type: 'text',
        },
        {
          fields: [
            {
              label: 'Word(s)',
              name: 'word',
              type: 'text',
            },
          ],
          label: 'Word Carousel',
          maxRows: 10,
          name: 'words',
          type: 'array',
        },
      ],
      name: 'caption',
      type: 'group',
    },
  ],
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  interfaceName: 'HeroBlock',
  slug: 'hero',
}
