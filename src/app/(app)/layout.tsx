import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import type { ReactNode } from 'react'

import { cn } from '@/lib'

import '@/styles/globals.css'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { badgeGroup, navData } from '@/config'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  description:
    'Think.Feel.Be. Therapy is a mental health practice in Grand Rapids, MI. We offer therapy services for individuals, couples, and families, both in-person and remote in California, Massachusetts, and Michigan.',
  title: {
    default: 'Think.Feel.Be. Therapy',
    template: '%s | Think.Feel.Be. Therapy',
  },
}

interface RootLayoutProps {
  readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
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
        <SiteHeader navigation={navData} />
        <main className="grow">{children}</main>
        <SiteFooter badgeGroup={badgeGroup} navigation={navData} />
      </body>
    </html>
  )
}
