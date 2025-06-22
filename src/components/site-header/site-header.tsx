import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { Navigation } from '@/types'

import { MainNav, MobileNav } from '../navigation'

interface SiteHeaderProps {
  navigation: Navigation
}

const SiteHeader: FC<SiteHeaderProps> = ({ navigation }) => {
  const logoUrl = navigation.logo?.url

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-primary text-background">
      <div className="container flex h-24 max-w-(--breakpoint-2xl) items-center justify-between self-stretch py-2">
        <Link href="/">
          <Image
            alt={navigation.logo?.alt || 'logo image'}
            className="p-2"
            height={100}
            src={logoUrl || '/'}
            width={100}
          />
        </Link>
        <MainNav navigation={navigation} />
        <MobileNav navigation={navigation} />
      </div>
    </header>
  )
}

export { SiteHeader }
