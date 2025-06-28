'use client'

import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { type FC, type ReactNode, useState } from 'react'
import { cn } from '@/lib'
import type { Navigation } from '@/types'

import {
  Button,
  Divider,
  HamburgerMenu,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui'

interface MobileNavProps {
  navigation: Navigation
}

const MobileNav: FC<MobileNavProps> = ({ navigation }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const logoUrl = navigation.logo?.url
  const navItems = navigation.navItems

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button
          className="px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          variant="ghost"
        >
          <HamburgerMenu className="size-5" />
          <span className="sr-only">Open mobile navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="border-none bg-brand-primary p-0 text-background">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10">
          <div className="w-full border-border/40 border-b p-6">
            <MobileLink
              className="group flex items-center gap-4"
              href="/"
              onOpenChange={setOpen}
            >
              <Image
                alt="Think.Feel.Be. Therapy logo"
                height={75}
                src={logoUrl || '/'}
                width={75}
              />
              <span className="font-bold group-hover:underline">
                Think.Feel.Be. Therapy
              </span>
            </MobileLink>
          </div>
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => {
              const slug = item.link

              return (
                <MobileLink
                  className={cn(
                    pathname === slug && 'font-medium underline',
                    'text-xl hover:underline'
                  )}
                  href={slug}
                  key={`${slug}-${item.label}`}
                  onOpenChange={setOpen}
                >
                  {item.label}
                </MobileLink>
              )
            })}
            <Divider />
            <Button asChild variant="secondary">
              <Link href="https://thinkfeelbetherapy.sessionshealth.com/">
                Schedule a Session
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
}

const MobileLink = ({
  children,
  className,
  href,
  onOpenChange,
  ...props
}: MobileLinkProps) => {
  const router = useRouter()

  return (
    <Link
      className={cn(className)}
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export { MobileNav }
