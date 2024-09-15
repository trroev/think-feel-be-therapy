import { type MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      allow: '/',
      userAgent: '*',
    },
    sitemap: 'https://www.thinkfeelbetherapy.com/sitemap.xml',
  }
}

export default robots
