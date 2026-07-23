'use client'

import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { type FC, type ReactNode, useState } from 'react'
import { cn } from '@/utils/cn'
import type { Navigation } from '@/types/payload-types'
import { isCmsLinkResolvable } from '@/utils/resolveCmsLink'
import { CmsLink } from '../cms-link'
import { Button, buttonVariants } from '../ui/button'
import { Divider } from '../ui/divider'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { HamburgerMenu } from '../ui/svg/hamburger-menu'

type Props = Navigation

const MobileNav: FC<Props> = ({ cta, links }) => {
  const [open, setOpen] = useState(false)

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
              links.map(({ id, link }) => (
                <CmsLink
                  activeClassName="font-medium underline"
                  className="text-xl hover:underline"
                  key={id}
                  link={link}
                  onClick={() => setOpen(false)}
                />
              ))}
            {isCmsLinkResolvable(cta) && (
              <>
                <Divider />
                <CmsLink
                  className={buttonVariants({ variant: 'secondary' })}
                  link={cta}
                />
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
