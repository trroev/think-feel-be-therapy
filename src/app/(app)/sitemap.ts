import config from '@payload-config'
import type { MetadataRoute } from 'next'
import { getPayload, type PaginatedDocs } from 'payload'
import type { Page } from '@/types/payload-types'
import { getServerSideURL } from '@/utils'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const payload = await getPayload({ config })

  try {
    const pages: PaginatedDocs<Page> = await payload.find({
      collection: 'pages',
      limit: 0,
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    const url = getServerSideURL()

    // Function to determine priority based on page slug
    const getPriority = (slug: string): number => {
      switch (slug) {
        case 'home':
          return 1.0
        case 'about':
        case 'contact':
          return 0.9
        case 'faqs':
        case 'client-guide':
          return 0.8
        default:
          return 0.7
      }
    }

    // Function to determine change frequency based on page type
    const getChangeFrequency = (
      slug: string
    ):
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never' => {
      switch (slug) {
        case 'home':
          return 'weekly'
        case 'about':
        case 'contact':
          return 'monthly'
        case 'faqs':
        case 'client-guide':
          return 'monthly'
        default:
          return 'monthly'
      }
    }

    const sitemapEntries: MetadataRoute.Sitemap = []

    // Add root URL (highest priority)
    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    })

    // Add dynamic pages from CMS
    for (const { slug, updatedAt } of pages.docs) {
      // Skip if slug is null/undefined or if it's the home page (handled separately)
      if (!slug || slug === 'home') {
        continue
      }

      sitemapEntries.push({
        url: `${url}/${slug}`,
        lastModified: new Date(updatedAt),
        changeFrequency: getChangeFrequency(slug),
        priority: getPriority(slug),
      })
    }

    return sitemapEntries
  } catch {
    return [
      {
        url: getServerSideURL(),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
    ]
  }
}

export default sitemap
