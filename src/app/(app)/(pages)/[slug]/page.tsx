import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { FC } from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks/render-blocks'
import { getPage, getPublishedPages } from '@/queries/pages'
import { HOME_SLUG, isHomeSlug } from '@/utils/pageToPath'

type Props = {
  params: Promise<{ slug: string }>
}

const Page: FC<Props> = async ({ params }) => {
  const { slug = HOME_SLUG } = await params
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

export async function generateStaticParams() {
  const pages = await getPublishedPages()

  return pages
    .filter((page) => !isHomeSlug(page.slug))
    .map(({ slug }) => {
      return { slug }
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = HOME_SLUG } = await params
  const page = await getPage(slug)

  if (!page?.meta) {
    return {
      title: 'Page Not Found',
    }
  }

  return page.meta
}
