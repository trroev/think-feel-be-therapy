import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig, type Config } from 'payload'

import { Media } from './_collections/media'
import { Pages } from './_collections/pages'
import { Users } from './_collections/users'
import { Footer } from './_globals/footer'
import { Navigation } from './_globals/navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const baseConfig: Config = {
  admin: {
    meta: {
      titleSuffix: ' | Think.Feel.Be. Therapy CMS',
    },
    user: Users.slug,
  },
  collections: [Pages, Media, Users],
  db:
    process.env.PAYLOAD_PRIVATE_DATABASE_ENGINE === 'mongo'
      ? mongooseAdapter({
          url: process.env.PAYLOAD_PRIVATE_DATABASE_URI!,
        })
      : postgresAdapter({
          pool: {
            connectionString: process.env.PAYLOAD_PRIVATE_DATABASE_URI!,
          },
        }),
  editor: lexicalEditor(),
  globals: [Footer, Navigation],
  plugins: [
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} | Think.Feel.Be. Therapy`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  secret: process.env.PAYLOAD_PRIVATE_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
}

export default buildConfig(baseConfig)
