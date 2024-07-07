import { backgroundColor } from '@/_fields/background-color'
import { type Block } from 'payload'

export const Hero: Block = {
  slug: 'heroBlock',
  imageURL: '/images/blocks/hero-block.jpg',
  interfaceName: 'HeroBlockType',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    backgroundColor,
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'headingFontWeight',
      type: 'select',
      options: [
        {
          label: 'Thin',
          value: 'thin',
        },
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Semi-Bold',
          value: 'semibold',
        },
        {
          label: 'Bold',
          value: 'bold',
        },
        {
          label: 'Extra-Bold',
          value: 'extrabold',
        },
      ],
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'tagline',
      type: 'group',
      fields: [
        {
          name: 'staticHeading',
          type: 'text',
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
    },
    // {
    //   name: 'heroTagline',
    //   type: 'blocks',
    //   maxRows: 1,
    //   blocks: [Tagline],
    // },
  ],
}
