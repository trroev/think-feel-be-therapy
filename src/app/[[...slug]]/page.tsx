import { cache } from 'react'
import { BuilderComponents } from '@/components'
import { BUILDER_API_KEY } from '@/config'
import { Content, fetchOneEntry, isEditing, isPreviewing } from '@builder.io/sdk-react/edge'

interface PageProps {
  params: {
    slug: string[]
  }
  searchParams: Record<string, string>
}

const getBuilderContent = cache(fetchOneEntry)

export default async function Page({ params, searchParams }: PageProps) {
  const urlPath = `/${params?.slug?.join('/') || ''}`

  const content = await getBuilderContent({
    options: searchParams,
    apiKey: BUILDER_API_KEY,
    model: 'page',
    userAttributes: { urlPath },
  })

  const canShowContent = content || isPreviewing(searchParams) || isEditing(searchParams)

  if (!canShowContent) {
    return (
      <>
        <h1>404</h1>
        <p>Make sure you have your content published at builder.io.</p>
      </>
    )
  }
  return (
    <Content
      content={content}
      apiKey={BUILDER_API_KEY}
      model={'page'}
      customComponents={BuilderComponents}
    />
  )
}
