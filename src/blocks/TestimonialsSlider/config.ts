import type { Block } from 'payload'

export const TestimonialsSlider: Block = {
  fields: [
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
