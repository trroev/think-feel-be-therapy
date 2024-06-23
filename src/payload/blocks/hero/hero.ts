import { backgroundColor } from '../../fields/background-color'
import { Block } from 'payload/types'
import { Tagline } from '../tagline'

export const Hero: Block = {
  slug: 'heroBlock',
  imageURL: '/blocks/hero-block.jpg',
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
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'heroTagline',
      type: 'blocks',
      maxRows: 1,
      blocks: [Tagline],
    },
  ],
}
