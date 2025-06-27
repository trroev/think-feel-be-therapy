import type { Block } from 'payload'

export const TestimonialsSlider: Block = {
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'testimonials',
      hasMany: true,
      maxRows: 10,
      relationTo: 'testimonials',
      type: 'relationship',
    },
  ],
  interfaceName: 'TestimonialsSliderBlock',
  labels: {
    singular: 'Testimonials Slider',
    plural: 'Testimonials Slider Blocks',
  },
  slug: 'testimonials-slider',
}
