import type { CollectionConfig } from 'payload'
import { backgroundColorField } from '@/fields/backgroundColor'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig<'pages'> = {
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    defaultColumns: ['title', 'updatedAt'],
    group: 'Content',
    livePreview: {},
    useAsTitle: 'title',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'subheading',
              type: 'text',
            },
            {
              name: 'backgroundImage',
              type: 'relationship',
              relationTo: 'media',
              hasMany: false,
            },
            backgroundColorField,
          ],
          label: 'Hero',
        },
        // {
        //   fields: [
        //     {
        //       name: 'layout',
        //       type: 'blocks',
        //       blocks: [],
        //       required: true,
        //       admin: {
        //         initCollapsed: true,
        //       },
        //     },
        //   ],
        //   label: 'Content',
        // },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [],
  },
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
