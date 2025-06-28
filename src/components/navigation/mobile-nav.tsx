'use client'

import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { type FC, type ReactNode, useState } from 'react'
import { cn } from '@/lib'
import type { Navigation } from '@/types/payload-types'
import { getLink } from '@/utils/getLink'
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

type Props = Navigation

const MobileNav: FC<Props> = ({ cta, links }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const processedCta = getLink(cta)

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
                src="/images/logos/think-feel-be-therapy-png(2).png"
                width={75}
              />
              <span className="font-bold group-hover:underline">
                Think.Feel.Be. Therapy
              </span>
            </MobileLink>
          </div>
          <div className="flex flex-col space-y-4 px-6">
            {links &&
              links.length > 0 &&
              links.map(({ id, link }) => {
                const processedLink = getLink(link)

                if (!processedLink) {
                  return null
                }
                const { href, label, newTab } = processedLink

                return (
                  <MobileLink
                    className={cn(
                      pathname === href && 'font-medium underline',
                      'text-xl hover:underline'
                    )}
                    href={href}
                    key={id}
                    onOpenChange={setOpen}
                    target={newTab ? '_blank' : '_self'}
                  >
                    {label}
                  </MobileLink>
                )
              })}
            {processedCta && (
              <>
                <Divider />
                <Button asChild variant="secondary">
                  <Link
                    href={processedCta.href}
                    target={processedCta.newTab ? '_blank' : '_self'}
                  >
                    {processedCta.label}
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

type MobileLinkProps = LinkProps & {
  children: ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
  target?: string
}

const MobileLink = ({
  children,
  className,
  href,
  onOpenChange,
  target,
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
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

export { MobileNav }
