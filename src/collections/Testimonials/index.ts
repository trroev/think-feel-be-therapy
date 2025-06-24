import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { richTextField } from '@/fields/richText'

export const Testimonials: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      label: 'Client Name/Alias',
      name: 'name',
      type: 'text',
    },
    {
      name: 'dateRange',
      type: 'text',
    },
    ...richTextField({ richTextOverrides: { name: 'testimonial' } }),
    lexicalHTMLField({
      htmlFieldName: 'testimonialHTML',
      lexicalFieldName: 'testimonial',
    }),
  ],
  slug: 'testimonials',
}
