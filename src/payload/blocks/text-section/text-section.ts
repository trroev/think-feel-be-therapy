import { backgroundColor } from '../../fields/background-color'
import richText from '../../fields/richText'
import { Block } from 'payload/types'

export const TextSection: Block = {
  slug: 'textSectionBlock',
  // imageURL: '/blocks/text-section-block.jpg',
  interfaceName: 'TextSectionBlockType',
  labels: {
    singular: 'Text Section',
    plural: 'Text Sections',
  },
  fields: [
    backgroundColor,
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'headingAlignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    {
      name: 'subheading',
      type: 'text',
    },
    richText(),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageFirst',
      type: 'checkbox',
    },
  ],
}
