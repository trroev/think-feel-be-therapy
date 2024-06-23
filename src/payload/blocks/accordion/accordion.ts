import richText from '../../fields/richText'
import { Block } from 'payload/types'

export const Accordion: Block = {
  slug: 'accordionBlock',
  // imageURL: '/blocks/accordion-block.jpg',
  interfaceName: 'AccordionBlockType',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'multiple',
      options: [
        {
          label: 'Multiple',
          value: 'multiple',
        },
        {
          label: 'Single',
          value: 'single',
        },
      ],
      admin: {
        description: 'Choose whether multiple or single items can be open at once.',
      },
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        richText({ name: 'content', required: true }),
      ],
    },
  ],
}
