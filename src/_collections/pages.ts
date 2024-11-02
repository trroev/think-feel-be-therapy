import { Accordion } from '@/_blocks/accordion-block'
import { ContactForm } from '@/_blocks/contact-form-block'
import { CallToAction } from '@/_blocks/cta-block'
import { Hero } from '@/_blocks/hero-block'
import { MentayaWidget } from '@/_blocks/mentaya-widget-block'
import { TestimonialSection } from '@/_blocks/testimonial-section-block'
import { TextSection } from '@/_blocks/text-section-block'
import { pageHeader } from '@/_fields/page-header'
import { slugField } from '@/_fields/slug'
import { type CollectionConfig } from 'payload'

import { populatePublishedAt, revalidatePage } from '@/_lib'
import { AdminAccess } from '@/_access/admin'
import { EveryoneAccess } from '@/_access/everyone'

export const Pages: CollectionConfig = {
  access: {
    create: AdminAccess,
    delete: AdminAccess,
    read: EveryoneAccess,
    update: AdminAccess,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
              blocks: [
                Accordion,
                CallToAction,
                ContactForm,
                Hero,
                MentayaWidget,
                TestimonialSection,
                TextSection,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  slug: 'pages',
  versions: {
    drafts: true,
  },
}
