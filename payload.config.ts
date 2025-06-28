import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { seoPlugin } from '@payloadcms/plugin-seo'
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Testimonials } from '@/collections/Testimonials'
import { Footer } from '@/globals/footer/config'
import { Navigation } from '@/globals/navigation/config'
import type { Page } from '@/types/payload-types'
import { getServerSideURL } from '@/utils/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Payload Website Template`
    : 'Payload Website Template'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.DATABASE_URI ?? '',
  }),
  collections: [Media, Pages, Testimonials],
  editor: lexicalEditor(),
  globals: [Footer, Navigation],
  plugins: [
    seoPlugin({
      generateTitle,
      generateURL,
    }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN ?? '',
    }),
  ],
  secret: process.env.PAYLOAD_SECRET ?? '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src', 'types', 'payload-types.ts'),
  },
})
