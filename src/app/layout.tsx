import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { Footer, Navigation } from '@/payload/payload-types'
import { fetchFooter, fetchNavigation } from './_api/fetchGlobals'
import { SiteHeader } from './_components/site-header'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import '@/styles/globals.css'
import { SiteFooter } from './_components/site-footer'
import { cn } from '@/lib'

const montserrat = Montserrat({ subsets: ['latin'] })

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

export default async function RootLayout({ children }: RootLayoutProps) {
  const navData: Navigation | null = await fetchNavigation()
  const footerData: Footer | null = await fetchFooter()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={cn('min-h-screen bg-white antialiased text-foreground', montserrat.className)}
      >
        <Providers>
          <SiteHeader navigation={navData as Navigation} />
          <main className="grow">{children}</main>
          <SiteFooter footer={footerData} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
