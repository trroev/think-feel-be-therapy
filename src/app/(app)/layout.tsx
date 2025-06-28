import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import type { ReactNode } from 'react'

import { cn } from '@/lib'

import '@/styles/globals.css'

import config from '@payload-config'
import { getPayload } from 'payload'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  description:
    'Think.Feel.Be. Therapy is a mental health practice in Grand Rapids, MI. We offer therapy services for individuals, couples, and families, both in-person and remote in California, Massachusetts, and Michigan.',
  title: {
    default: '',
    template: '%s | Think.Feel.Be. Therapy',
  },
}

type RootLayoutProps = {
  readonly children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const payload = await getPayload({ config })

  const [navigationResult, footerResult] = await Promise.allSettled([
    payload.findGlobal({ slug: 'navigation' }),
    payload.findGlobal({ slug: 'footer' }),
  ])

  const navigation =
    navigationResult.status === 'fulfilled' ? navigationResult.value : null

  const footer = footerResult.status === 'fulfilled' ? footerResult.value : null

  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased',
          montserrat.className
        )}
      >
        {navigation && <SiteHeader {...navigation} />}
        <main className="grow">{children}</main>
        {footer && <SiteFooter {...footer} />}
      </body>
    </html>
  )
}
