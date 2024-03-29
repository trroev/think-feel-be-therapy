import * as React from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import { cn } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
