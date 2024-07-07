import { lexicalEditor, LinkFeature, UploadFeature } from '@payloadcms/richtext-lexical'
import { type Field } from 'payload'

export const richText: Field = {
  name: 'richText',
  label: 'Rich Text',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      LinkFeature({
        fields: ({ defaultFields }) => [
          ...defaultFields,
          {
            name: 'rel',
            label: 'Rel Attribute',
            type: 'select',
            hasMany: true,
            options: ['noopener', 'noreferrer', 'nofollow'],
            admin: {
              description:
                'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
            },
          },
        ],
      }),
      UploadFeature({
        collections: {
          uploads: {
            fields: [
              {
                name: 'caption',
                type: 'richText',
                editor: lexicalEditor(),
              },
            ],
          },
        },
      }),
      // BlocksFeature({
      //   blocks: [Banner, CallToAction],
      // }),
    ],
  }),
}
