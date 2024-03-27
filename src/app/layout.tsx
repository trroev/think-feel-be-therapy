import * as React from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import { cn } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Think.Feel.Be Therapy',
  description:
    'Think.Feel.Be Therapy is a private practice in Grand Rapids, Michigan that offers counselling services to individuals, couples, and families.',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background antialiased', inter.className)}>
        <div className="flex min-h-screen flex-col">
          {/* SITEHEADER */}
          <main className="flex-1">{children}</main>
          {/* SITEFOOTER */}
        </div>
      </body>
    </html>
  )
}
