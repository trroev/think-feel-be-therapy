import type { Block } from 'payload'

import { backgroundColorField } from '@/fields/backgroundColor'

export const Hero: Block = {
  fields: [
    {
      name: 'backgroundImage',
      relationTo: 'media',
      type: 'relationship',
    },
    ...backgroundColorField(),
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
