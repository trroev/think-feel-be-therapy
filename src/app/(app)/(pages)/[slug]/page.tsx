import config from '@payload-config'
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
  const { slug } = await params
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
