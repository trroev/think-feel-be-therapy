import link from '@/_fields/link'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badgeGroup',
      type: 'array',
      maxRows: 5,
      fields: [
        {
          name: 'badge',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        link({
          appearances: false,
          disableLabel: true,
        }),
      ],
    },
    {
      name: 'termsOfService',
      type: 'group',
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
          name: 'termsOfServiceContent',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
        lexicalHTML('termsOfServiceContent', { name: 'termsOfServiceContent_html' }),
      ],
    },
    {
      name: 'privacyPolicy',
      type: 'group',
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
          name: 'privacyPolicyContent',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
        lexicalHTML('privacyPolicyContent', { name: 'privacyPolicyContent_html' }),
      ],
    },
    {
      name: 'disclaimer',
      type: 'group',
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
          name: 'disclaimerContent',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
        lexicalHTML('disclaimerContent', { name: 'disclaimerContent_html' }),
      ],
    },
  ],
}
