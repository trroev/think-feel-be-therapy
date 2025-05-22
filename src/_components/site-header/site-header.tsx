import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { Navigation } from '@/_types'

import { MainNav, MobileNav } from '../navigation'

interface SiteHeaderProps {
  navigation: Navigation
}

const SiteHeader: FC<SiteHeaderProps> = ({ navigation }) => {
  const logoUrl = navigation.logo?.url

  return (
    <header className="sticky top-0 z-50 w-full bg-brandPrimary text-background">
      <div className="container flex h-24 max-w-screen-2xl items-center justify-between self-stretch py-2">
        <Link href="/">
          <Image
            src={logoUrl || '/'}
            alt={navigation.logo?.alt || 'logo image'}
            height={100}
            width={100}
            className="p-2"
          />
        </Link>
        <MainNav navigation={navigation} />
        <MobileNav navigation={navigation} />
      </div>
    </header>
  )
}

export { SiteHeader }
