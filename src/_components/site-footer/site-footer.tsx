import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Footer, type Media } from '@/payload-types'

import { Disclaimer } from '../disclaimer'
import { PrivacyPolicy } from '../privacy-policy'
import { TermsOfService } from '../terms-of-service'
import { Divider } from '../ui'

interface SiteFooterProps {
  footer: Footer
}

const SiteFooter: FC<SiteFooterProps> = ({ footer }) => {
  return (
    <footer className="bg-brandSecondary py-12">
      <div className="container flex max-w-screen-2xl flex-col gap-6">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-16 py-4 lg:gap-20">
          {footer.badgeGroup?.map((badge) => {
            const BadgeImage = () => (
              <Image
                src={(badge.badge as Media).url || ''}
                alt={(badge.badge as Media).alt}
                height={150}
                width={150}
              />
            )
            const badgeLink = badge.link?.url

            return badgeLink ? (
              <Link
                key={badge.id}
                href={badgeLink ?? ''}
                target={badge.link?.newTab ? '_blank' : '_self'}
              >
                <BadgeImage />
              </Link>
            ) : (
              <BadgeImage key={badge.id} />
            )
          })}
        </div>
        <Divider />
        <div className="flex flex-col-reverse items-center justify-between gap-8 font-medium text-background sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Think.Feel.Be. Therapy</p>
          <div className="flex items-center space-x-4">
            {footer.termsOfService && <TermsOfService termsOfService={footer.termsOfService} />}
            {footer.privacyPolicy && <PrivacyPolicy privacyPolicy={footer.privacyPolicy} />}
            {footer.disclaimer && <Disclaimer disclaimer={footer.disclaimer} />}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
