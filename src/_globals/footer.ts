import link from '@/_fields/link'
import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
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
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    {
      name: 'privacyPolicy',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    {
      name: 'disclaimer',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
  ],
}
