import type { Footer, Navigation } from '../../payload/payload-types'
import { FOOTER_QUERY, NAVIGATION_QUERY } from '../_graphql/globals'
import { GRAPHQL_API_URL } from './shared'

export async function fetchFooter(): Promise<Footer> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const footer = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FOOTER_QUERY,
    }),
  })
    .then(res => {
      if (!res.ok) throw new Error('Error fetching doc')
      return res.json()
    })
    ?.then(res => {
      if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching footer')
      return res.data?.Footer
    })

  return footer
}

export async function fetchNavigation(): Promise<Navigation> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const navigation = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: NAVIGATION_QUERY,
    }),
  })
    .then(res => {
      if (!res.ok) throw new Error('Error fetching doc')
      return res.json()
    })
    ?.then(res => {
      if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching navigation')
      return res.data?.Navigation
    })

  return navigation
}

export const fetchGlobals = async (): Promise<{
  footer: Footer
  navigation: Navigation
}> => {
  // initiate requests in parallel, then wait for them to resolve
  // this will eagerly start to the fetch requests at the same time
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const footerData = fetchFooter()
  const navigationData = fetchNavigation()

  const [footer, navigation]: [Footer, Navigation] = await Promise.all([
    await footerData,
    await navigationData,
  ])

  return {
    footer,
    navigation,
  }
}
