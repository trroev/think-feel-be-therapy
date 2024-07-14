import type { Page } from '@/payload-types'

import { Blocks } from '@/_components/blocks'
import { PageHeader } from '@/_components/page-header'
import { getPage } from '@/app/actions/get-page'
import { getPages } from '@/app/actions/get-pages'

export default async function Page({ params: { slug = '' } }) {
  const actualSlug = slug === '' ? 'home' : slug
  const page: Page = await getPage({ slug: actualSlug })

  if (!page) {
    return <div>Page not found</div>
  }

  const { content, pageHeader } = page
  console.log('PAGE CONTENT: ', content)

  return (
    <>
      {pageHeader?.heading ?? pageHeader?.subheading ? <PageHeader {...pageHeader} /> : null}
      <Blocks blocks={content} />
    </>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await getPages()

    return pages.docs.map((page) => ({ params: { slug: page.slug } }))
  } catch (error) {
    console.error(error)
    return []
  }
}

// export async function generateMetadata({ params: { slug = '' } }): Promise<Metadata> {
//   let page: Page | null = null

//   try {
//     page = await getPage({ slug })
//   } catch (error) {
//     // swallow error so we can render fallback metadata
//   }

//   if (!page) {
//     return {
//       title: 'Page not found',
//     }
//   }

//   return generateMetadata({ doc: page as Page })
// }
