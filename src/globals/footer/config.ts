import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { richTextField } from '@/fields/richText'

export const Footer: GlobalConfig = {
  fields: [
    {
      tabs: [
        {
          fields: [
            {
              fields: [
                {
                  name: 'badgeImage',
                  relationTo: 'media',
                  required: true,
                  type: 'upload',
                },
                {
                  name: 'addLink',
                  type: 'checkbox',
                },
                link({
                  appearances: false,
                  disableLabel: true,
                  overrides: {
                    admin: {
                      condition: (_data, siblingData) =>
                        siblingData?.addLink === true,
                    },
                  },
                }),
              ],
              label: 'Badges',
              maxRows: 5,
              name: 'badges',
              type: 'array',
            },
          ],
          label: 'Badges',
        },
        {
          fields: [
            {
              admin: {
                description:
                  'This text will appear after the copyright symbol & date.',
              },
              name: 'copyright',
              type: 'text',
            },
          ],
          label: 'Copyright',
        },
        {
          fields: [
            ...richTextField({
              richTextOverrides: {
                name: 'termsOfService',
              },
            }),
            lexicalHTMLField({
              htmlFieldName: 'termsOfServiceHTML',
              lexicalFieldName: 'termsOfService',
            }),
            ...richTextField({
              richTextOverrides: {
                name: 'privacyPolicy',
              },
            }),
            lexicalHTMLField({
              htmlFieldName: 'privacyPolicyHTML',
              lexicalFieldName: 'privacyPolicy',
            }),
            ...richTextField({
              richTextOverrides: {
                name: 'disclaimer',
              },
            }),
            lexicalHTMLField({
              htmlFieldName: 'disclaimerHTML',
              lexicalFieldName: 'disclaimer',
            }),
          ],
          label: 'Legal',
        },
      ],
      type: 'tabs',
    },
  ],
  slug: 'footer',
}
