import { type Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contactFormBlock',
  imageURL: '/images/blocks/contact-form-block.jpg',
  interfaceName: 'ContactFormBlockType',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'fullWidth',
      type: 'checkbox',
      admin: {
        description: 'Checking this will make the contact form full width.',
      },
    },
  ],
}
