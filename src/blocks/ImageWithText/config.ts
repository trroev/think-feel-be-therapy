import type { Block } from 'payload'
import { backgroundColorField } from '@/fields/backgroundColor'
import { richTextWithHtmlField } from '@/fields/richText'

export const ImageWithText: Block = {
  fields: [
    ...backgroundColorField(),
    {
      name: 'heading',
      type: 'text',
    },
    {
      admin: {
        condition: (_, siblingData) =>
          siblingData.heading !== undefined &&
          siblingData.heading !== null &&
          siblingData.heading !== '',
      },
      defaultValue: 'left',
      name: 'headingAlignment',
      label: 'Heading Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      type: 'select',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      fields: [
        {
          defaultValue: 'text',
          name: 'contentType',
          type: 'radio',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Accordion', value: 'accordion' },
          ],
        },
        ...richTextWithHtmlField('richText', {
          richTextOverrides: {
            admin: {
              condition: (_, siblingData) => siblingData.contentType === 'text',
            },
          },
        }),
        {
          admin: {
            condition: (_, siblingData) =>
              siblingData.contentType === 'accordion',
          },
          name: 'accordion',
          label: 'Accordion Items',
          type: 'array',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            ...richTextWithHtmlField('accordionContent'),
          ],
        },
      ],
      label: 'Content',
      type: 'group',
    },
    {
      name: 'image',
      relationTo: 'media',
      type: 'relationship',
    },
    {
      name: 'imageFirst',
      label: 'Display image before content',
      type: 'checkbox',
      admin: {
        condition: (_, siblingData) => siblingData.image !== undefined,
      },
    },
    {
      name: 'fullHeightImage',
      label: 'Display image at full height alongside content',
      type: 'checkbox',
      admin: {
        condition: (_, siblingData) => siblingData.image !== undefined,
      },
    },
  ],
  interfaceName: 'ImageWithTextBlock',
  labels: {
    singular: 'Image with Text',
    plural: 'Image with Text Blocks',
  },
  slug: 'image-with-text',
}
