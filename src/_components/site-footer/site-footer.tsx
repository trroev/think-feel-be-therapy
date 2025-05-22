import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { Navigation } from '@/_types'

import { Disclaimer } from '../disclaimer'
import { PrivacyPolicy } from '../privacy-policy'
import { TermsOfService } from '../terms-of-service'
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
        link?: Link
      }[]
    | null
  navigation: Navigation
}

const SiteFooter: FC<SiteFooterProps> = ({ badgeGroup }) => {
  return (
    <footer className="bg-brandSecondary py-12">
      <div className="container flex max-w-screen-2xl flex-col gap-6">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-16 py-4 lg:gap-20">
          {badgeGroup?.map((badge) => {
            const BadgeImage = () => (
              <Image
                src={badge.badge.src}
                alt={badge.badge.alt}
                height={150}
                width={150}
              />
            )
            const badgeLink = badge.link?.url

            return badge.link ? (
              <Link
                key={`${badge.badge.alt}`}
                href={badgeLink ?? ''}
                target="_blank"
              >
                <BadgeImage />
              </Link>
            ) : (
              <BadgeImage key={`${badge.badge.alt}`} />
            )
          })}
        </div>
        <Divider />
        <div className="flex flex-col-reverse items-center justify-between gap-8 font-medium text-background sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Think.Feel.Be. Therapy</p>
          <div className="flex items-center space-x-4">
            <TermsOfService
              heading="Terms of Service"
              subheading="Last updated: Sep 18, 2023 9:21 PM"
            />
            <PrivacyPolicy
              heading="Privacy Policy"
              subheading="Last updated: Nov 1, 2023 9:12 PM"
            />
            <Disclaimer
              heading="Disclaimer"
              subheading="Last updated: Sep 18, 2023 9:24 PM"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
