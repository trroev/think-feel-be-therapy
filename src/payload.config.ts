import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Media } from './_collections/media'
import { Pages } from './_collections/pages'
import { Users } from './_collections/users'
import { Footer } from './_globals/footer'
import { Navigation } from './_globals/navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Media, Pages, Users],
  globals: [Footer, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // seoPlugin({
    //   collections: ['pages'],
    //   uploadsCollection: 'media',
    //   generateTitle: ({ doc }) => `${doc.title} | Think.Feel.Be. Therapy`,
    //   generateDescription: ({ doc }) => doc.excerpt,
    // }),
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
