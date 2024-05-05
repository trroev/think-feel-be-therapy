import * as React from 'react'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { builder } from '@builder.io/sdk'

import '@/styles/globals.css'

import { SiteHeader } from '@/components'
import { BUILDER_API_KEY } from '@/config'
import { cn } from '@/lib'
import { type NavigationItems } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Think.Feel.Be Therapy',
  description:
    'Think.Feel.Be Therapy is a private practice in Grand Rapids, Michigan that offers counselling services to individuals, couples, and families.',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: RootLayoutProps) {
  builder.init(BUILDER_API_KEY)

  const navigationDataModel = await builder.get('navigation')
  const navigationData: NavigationItems = {
    data: navigationDataModel.data,
    id: navigationDataModel.id,
  }

  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background antialiased', inter.className)}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader navigationData={navigationData} />
          <main className="flex-1">{children}</main>
          {/* SITEFOOTER */}
        </div>
      </body>
    </html>
  )
}
