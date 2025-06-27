import type { Block } from 'payload'

export const ContactForm: Block = {
  fields: [
    {
      name: 'contactFormDescription',
      type: 'ui',
      admin: {
        components: {
          Field: '@/blocks/ContactForm/contact-form-description',
        },
      },
    },
  ],
  interfaceName: 'ContactFormBlock',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  slug: 'contact-form',
}
