import { backgroundColor } from '@/_fields/background-color'
import { type Block } from 'payload'

export const TestimonialSection: Block = {
  slug: 'testimonialSectionBlock',
  imageURL: '/images/blocks/testimonial-section-block.jpg',
  interfaceName: 'TestimonialSectionBlockType',
  labels: {
    singular: 'Testimonial Section',
    plural: 'Testimonial Sections',
  },
  fields: [
    backgroundColor,
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      admin: {
        description: 'Align the heading and subheading',
      },
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
    {
      name: 'testimonialCards',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      admin: {
        description: 'Add, edit, and reorder up to 10 testimonial cards',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'client',
          type: 'text',
        },
        {
          name: 'year',
          type: 'text',
        },
      ],
    },
  ],
}
