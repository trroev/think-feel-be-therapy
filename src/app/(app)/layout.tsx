import { type ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { cn } from '@/_lib'

import '@/_styles/globals.css'

import { type Navigation } from '@/payload-types'

import { SiteFooter } from '@/_components/site-footer'
import { SiteHeader } from '@/_components/site-header'
import { getGlobal } from '@/app/actions/get-global'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Think.Feel.Be. Therapy',
  description:
    'Think.Feel.Be. Therapy is a mental health practice in Grand Rapids, MI. We offer therapy services for individuals, couples, and families, both in-person and remote in California, Massachusetts, and Michigan.',
}

interface RootLayoutProps {
  readonly children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const navData = await getGlobal({ slug: 'navigation' })
  const footerData = await getGlobal({ slug: 'footer' })

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased',
          montserrat.className
        )}
      >
        <SiteHeader navigation={navData as unknown as Navigation} />
        <main className="grow">{children}</main>
        <SiteFooter footer={footerData} />
      </body>
    </html>
  )
}
