import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { cn } from '@/_lib'

import '@/_styles/globals.css'

import { badgeGroup, navData } from '@/_config'
import { SiteFooter } from '@/_components/site-footer'
import { SiteHeader } from '@/_components/site-header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Think.Feel.Be. Therapy',
  description:
    'Think.Feel.Be. Therapy is a mental health practice in Grand Rapids, MI. We offer therapy services for individuals, couples, and families, both in-person and remote in California, Massachusetts, and Michigan.',
}

interface RootLayoutProps {
  readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
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
        <SiteHeader navigation={navData} />
        <main className="grow">{children}</main>
        <SiteFooter badgeGroup={badgeGroup} navigation={navData} />
      </body>
    </html>
  )
}
