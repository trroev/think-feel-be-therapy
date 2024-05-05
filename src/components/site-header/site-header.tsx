import Image from 'next/image'
import Link from 'next/link'
import { MainNav, MobileNav } from '@/components'
import { type NavigationData } from '@/types'

interface SiteHeaderProps extends NavigationData {}

export const SiteHeader = ({ navigationData }: SiteHeaderProps) => {
  const logoUrl = navigationData.data.logo

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between self-stretch">
        <Link href="/">
          <Image src={logoUrl} alt="Think.Feel.Be. Therapy logo" height={100} width={100} />
        </Link>
        <MainNav navigationData={navigationData} />
        <MobileNav navigationData={navigationData} />
      </div>
    </header>
  )
}
