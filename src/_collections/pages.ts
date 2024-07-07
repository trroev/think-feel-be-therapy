import { CallToAction } from '@/_blocks/cta-block'
import { Hero } from '@/_blocks/hero-block'
import { pageHeader } from '@/_fields/page-header'
import { slugField } from '@/_fields/slug'
import { type CollectionConfig } from 'payload'

import { populatePublishedAt, revalidatePage } from '@/_lib'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    // read: adminsOrPublished,
    // update: admins,
    // create: admins,
    // delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Header',
          fields: [pageHeader],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Hero],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
