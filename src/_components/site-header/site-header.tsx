import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Media, type Navigation } from '@/payload-types'

import { MainNav, MobileNav } from '../navigation'

interface SiteHeaderProps {
  navigation: Navigation
}

const SiteHeader: FC<SiteHeaderProps> = ({ navigation }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brandPrimary text-background">
      <div className="container flex h-24 max-w-screen-2xl items-center justify-between self-stretch py-2">
        <Link href="/">
          <Image
            src={(navigation.logo as Media).url || ''}
            alt={(navigation.logo as Media).alt}
            height={100}
            width={100}
            className="p-2"
          />
        </Link>
        <MainNav navItems={navigation.navItems} />
        <MobileNav navigation={navigation} />
      </div>
    </header>
  )
}

export { SiteHeader }
