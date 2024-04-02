import { BuilderComponents } from '@/components'
import { BUILDER_API_KEY } from '@/config'
import { Content, fetchOneEntry, isEditing, isPreviewing } from '@builder.io/sdk-react/edge'

interface PageProps {
  params: {
    slug: string[]
  }
  searchParams: Record<string, string>
}

export default async function Page(props: PageProps) {
  const urlPath = '/' + (props.params?.slug?.join('/') || '')

  const content = await fetchOneEntry({
    options: props.searchParams,
    apiKey: BUILDER_API_KEY,
    model: 'page',
    userAttributes: { urlPath },
  })

  const canShowContent =
    content || isPreviewing(props.searchParams) || isEditing(props.searchParams)

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
