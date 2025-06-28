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
            {
              fields: [
                {
                  label: 'Heading',
                  name: 'termsOfServiceHeading',
                  type: 'text',
                },
                {
                  admin: {
                    description:
                      'Last updated date (e.g. "Sep 18, 2023 9:21 PM")',
                  },
                  label: 'Last updated',
                  name: 'termsOfServiceSubheading',
                  type: 'text',
                },
                ...richTextField({
                  richTextOverrides: {
                    name: 'termsOfService',
                  },
                }),
                lexicalHTMLField({
                  htmlFieldName: 'termsOfServiceHTML',
                  lexicalFieldName: 'termsOfService',
                }),
              ],
              label: 'Terms of Service',
              type: 'group',
            },
            {
              fields: [
                {
                  label: 'Heading',
                  name: 'privacyPolicyHeading',
                  type: 'text',
                },
                {
                  admin: {
                    description:
                      'Last updated date (e.g. "Sep 18, 2023 9:21 PM")',
                  },
                  label: 'Last updated',
                  name: 'privacyPolicySubheading',
                  type: 'text',
                },
                ...richTextField({
                  richTextOverrides: {
                    name: 'privacyPolicy',
                  },
                }),
                lexicalHTMLField({
                  htmlFieldName: 'privacyPolicyHTML',
                  lexicalFieldName: 'privacyPolicy',
                }),
              ],
              label: 'Privacy Policy',
              type: 'group',
            },
            {
              fields: [
                {
                  label: 'Heading',
                  name: 'disclaimerHeading',
                  type: 'text',
                },
                {
                  admin: {
                    description:
                      'Last updated date (e.g. "Sep 18, 2023 9:21 PM")',
                  },
                  label: 'Last updated',
                  name: 'disclaimerSubheading',
                  type: 'text',
                },
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
              label: 'Disclaimer',
              type: 'group',
            },
          ],
          label: 'Legal',
        },
      ],
      type: 'tabs',
    },
  ],
  slug: 'footer',
}
