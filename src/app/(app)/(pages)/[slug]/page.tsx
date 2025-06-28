import config from '@payload-config'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import type { FC } from 'react'
import { cache } from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks/render-blocks'

type Props = {
  params: Promise<{ slug: string }>
}

const Page: FC<Props> = async ({ params }) => {
  const { slug = 'home' } = await params
  const page = await getPage(slug)

  if (!page) {
    return notFound()
  }

  const { blocks } = page

  return (
    <>
      <RenderBlocks blocks={blocks} />
    </>
  )
}

export default Page

const getPage = cache(async (slug: string) => {
  const payload = await getPayload({ config })
  const { isEnabled: draft } = await draftMode()

  const response = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return response.docs[0]
})

const getPages = cache(async () => {
  const payload = await getPayload({ config })
  const response = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 100,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return response.docs
})

export async function generateStaticParams() {
  const pages = await getPages()

  return pages
    .filter((page) => page.slug !== 'home')
    .map(({ slug }) => {
      return { slug }
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = 'home' } = await params
  const page = await getPage(slug)

  if (!page?.meta) {
    return {
      title: 'Page Not Found',
    }
  }

  return page.meta
}
