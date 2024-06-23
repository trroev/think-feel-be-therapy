import { Block } from 'payload/types'

export const Tagline: Block = {
  slug: 'tagline',
  imageURL: '/blocks/tagline.jpg',
  interfaceName: 'TaglineBlockType',
  labels: {
    singular: 'Tagline',
    plural: 'Taglines',
  },
  fields: [
    {
      name: 'staticHeading',
      type: 'text',
      required: true,
      admin: {
        description: 'This is the part of the tagline that does not animate',
      },
    },
    {
      name: 'words',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      admin: {
        description: 'These are the words/short phrases that will animate',
      },
      fields: [
        {
          name: 'word',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
