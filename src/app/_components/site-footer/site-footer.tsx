import { Footer, Media, Page } from '@/payload/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Divider } from '../ui'

interface SiteFooterProps {
  footer: Footer
}

const SiteFooter: FC<SiteFooterProps> = ({ footer }) => {
  return (
    <footer className="bg-brandSecondary py-12">
      <div className="container flex flex-col max-w-screen-2xl gap-6">
        <div className="flex flex-wrap flex-1 items-center justify-center py-4 gap-16 lg:gap-20">
          {footer.badgeGroup?.map(badge => {
            const badgeLink =
              (badge.link.url as string) ?? (badge.link.reference?.value as Page).slug

            return (
              <Link key={badge.id} href={badgeLink} target={badge.link.newTab ? '_blank' : '_self'}>
                <Image
                  src={(badge.badge as Media).url as string}
                  alt={(badge.badge as Media).alt}
                  height={150}
                  width={150}
                />
              </Link>
            )
          })}
        </div>
        <Divider />
        <div className="flex text-background font-medium flex-col-reverse justify-between items-center sm:flex-row gap-8">
          <p>&copy; {new Date().getFullYear()} Think.Feel.Be. Therapy</p>
          <div className="flex items-center space-x-4">
            <button className="hover:underline">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
