import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { type Navigation } from '@/_types'

import { Divider } from '../ui'

interface Link {
  label: string
  url: string
}

interface SiteFooterProps {
  badgeGroup?:
    | {
        badge: {
          alt: string
          src: string
        }
        link: Link
      }[]
    | null
  navigation: Navigation
}

const SiteFooter: FC<SiteFooterProps> = ({ badgeGroup, navigation }) => {
  return (
    <footer className="bg-brandSecondary py-12">
      <div className="container flex max-w-screen-2xl flex-col gap-6">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-16 py-4 lg:gap-20">
          {badgeGroup?.map((badge) => {
            const badgeLink = badge.link.url

            return (
              <Link key={`${badge.badge.alt}`} href={badgeLink} target="_blank">
                <Image src={badge.badge.src} alt={badge.badge.alt} height={150} width={150} />
              </Link>
            )
          })}
        </div>
        <Divider />
        <div className="flex flex-col-reverse items-center justify-between gap-8 font-medium text-background sm:flex-row">
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
