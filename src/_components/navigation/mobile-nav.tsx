'use client'

import { useState, type FC } from 'react'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/_lib'

import { Button, Divider, HamburgerMenu, Sheet, SheetContent, SheetTrigger } from '../ui'

interface MobileNavProps {
  navigation: {
    logo: {
      alt: string
      url: string
    }
    navItems: {
      label: string
      link: string
    }[]
  }
}

const MobileNav: FC<MobileNavProps> = ({ navigation }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const logoUrl = navigation.logo.url
  const navItems = navigation.navItems

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
      <SheetContent className="border-none bg-brandPrimary p-0 text-background">
        <div className="flex flex-col gap-10">
          <div className="w-full border-b border-border/40 p-6">
            <MobileLink href="/" className="group flex items-center gap-2" onOpenChange={setOpen}>
              <Image
                src={logoUrl || '/'}
                alt="Think.Feel.Be. Therapy logo"
                height={50}
                width={50}
              />
              <span className="font-bold group-hover:underline">Think.Feel.Be. Therapy</span>
            </MobileLink>
          </div>
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => {
              const slug = item.link

              return (
                <MobileLink
                  key={`${slug}-${item.label}`}
                  href={slug}
                  className={cn(
                    pathname === slug && 'font-medium underline',
                    'text-xl hover:underline'
                  )}
                  onOpenChange={setOpen}
                >
                  {item.label}
                </MobileLink>
              )
            })}
            <Divider />
            <Button asChild variant="secondary">
              <Link href="https://thinkfeelbetherapy.sessionshealth.com/">Schedule a Session</Link>
            </Button>
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

export { MobileNav }
