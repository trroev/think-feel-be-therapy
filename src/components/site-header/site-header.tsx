import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { Navigation } from '@/types/payload-types'

import { MainNav, MobileNav } from '../navigation'

type Props = Navigation

const SiteHeader: FC<Props> = (props) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-primary text-background">
      <div className="container flex h-24 max-w-(--breakpoint-2xl) items-center justify-between self-stretch py-2">
        <Link href="/">
          <Image
            alt="Think.Feel.Be. Therapy logo"
            className="p-2"
            height={100}
            src="/images/logos/think-feel-be-therapy-png(2).png"
            width={100}
          />
        </Link>
        <MainNav {...props} />
        <MobileNav {...props} />
      </div>
    </header>
  )
}

export { SiteHeader }
