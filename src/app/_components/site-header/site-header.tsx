import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MainNav, MobileNav } from '../navigation'

import { Media, Navigation } from '@/payload/payload-types'

interface SiteHeaderProps {
  navigation: Navigation
}

const SiteHeader: FC<SiteHeaderProps> = ({ navigation }) => {
  const logoUrl = (navigation.logo as Media).url

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-brandPrimary text-background">
      <div className="container flex h-24 max-w-screen-2xl items-center justify-between self-stretch py-2">
        <Link href="/">
          <Image
            src={logoUrl || '/'}
            alt={(navigation.logo as Media).alt || 'Logo'}
            height={100}
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
