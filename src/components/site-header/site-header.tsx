import { Cookie, HamburgerMenu, MainNav } from '@/components'
import { type NavigationData } from '@/types'

interface SiteHeaderProps extends NavigationData {}

export const SiteHeader = ({ navigationData }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between self-stretch">
        <Cookie className="size-10">
          <span className="sr-only">Think.Feel.Be. Therapy logo</span>
        </Cookie>
        <MainNav navigationData={navigationData} />
        <button className="md:hidden">
          <HamburgerMenu className="inline-block size-6 md:hidden" />
        </button>
      </div>
    </header>
  )
}
