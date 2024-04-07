'use client'

import * as React from 'react'
import Link, { type LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button, Cookie, HamburgerMenu, Sheet, SheetContent, SheetTrigger } from '@/components'
import { cn } from '@/lib'
import { type NavigationData } from '@/types'

interface MobileNavProps extends NavigationData {}

export const MobileNav = ({ navigationData }: MobileNavProps) => {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenu className="size-5" />
          <span className="sr-only">Open mobile navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <div className="flex flex-col gap-10">
          <div className="w-full border-b border-border/40 p-6">
            <MobileLink href="/" className="group flex items-center gap-2" onOpenChange={setOpen}>
              <Cookie className="size-6" />
              <span className="font-bold group-hover:underline">Think.Feel.Be. Therapy</span>
            </MobileLink>
          </div>
          <div className="flex flex-col space-y-4 px-6">
            {navigationData.map((item) => (
              <MobileLink
                key={item.id}
                href={item.data?.slug}
                className={cn(
                  pathname === item.data?.slug && 'font-medium underline',
                  'text-xl hover:underline'
                )}
                onOpenChange={setOpen}
              >
                {item.data?.title}
              </MobileLink>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
}

const MobileLink = ({ children, className, href, onOpenChange, ...props }: MobileLinkProps) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
