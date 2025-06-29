import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import type { Footer } from '@/types/payload-types'
import { getImage } from '@/utils'
import { getLink } from '@/utils/getLink'
import { Disclaimer } from '../disclaimer'
import { PrivacyPolicy } from '../privacy-policy'
import { TermsOfService } from '../terms-of-service'
import { Divider } from '../ui'

type Props = Footer

const SiteFooter: FC<Props> = ({
  badges = [],
  copyright,
  termsOfServiceHeading,
  termsOfServiceSubheading,
  termsOfServiceHTML,
  privacyPolicyHeading,
  privacyPolicySubheading,
  privacyPolicyHTML,
  disclaimerHeading,
  disclaimerSubheading,
  disclaimerHTML,
}) => {
  return (
    <footer className="bg-brand-secondary py-12">
      <div className="container flex max-w-(--breakpoint-2xl) flex-col gap-6">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-16 py-4 lg:gap-20">
          {badges &&
            badges.length > 0 &&
            badges.map(({ badgeImage, id, link }) => {
              const processedLink = link ? getLink(link) : null
              const processedImage = getImage(badgeImage)

              if (!processedImage) {
                return null
              }

              return processedLink ? (
                <Link
                  href={processedLink.href}
                  key={id}
                  target={processedLink.newTab ? '_blank' : '_self'}
                >
                  <Image
                    alt={processedImage.alt}
                    height={150}
                    src={processedImage.url}
                    width={150}
                  />
                </Link>
              ) : (
                <Image
                  alt={processedImage.alt}
                  height={150}
                  key={id}
                  src={processedImage.url}
                  width={150}
                />
              )
            })}
        </div>
        <Divider />
        <div className="flex flex-col-reverse items-center justify-between gap-8 font-medium text-background sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {copyright}
          </p>
          <div className="flex items-center space-x-4">
            {termsOfServiceHTML && (
              <TermsOfService
                heading={termsOfServiceHeading ?? 'Terms of Service'}
                subheading={
                  termsOfServiceSubheading ??
                  'Last updated: Sep 18, 2023 9:21 PM'
                }
                termsOfService={termsOfServiceHTML}
              />
            )}
            {privacyPolicyHTML && (
              <PrivacyPolicy
                heading={privacyPolicyHeading ?? 'Privacy Policy'}
                privacyPolicy={privacyPolicyHTML}
                subheading={
                  privacyPolicySubheading ?? 'Last updated: Nov 1, 2023 9:12 PM'
                }
              />
            )}
            {disclaimerHTML && (
              <Disclaimer
                disclaimer={disclaimerHTML}
                heading={disclaimerHeading ?? 'Disclaimer'}
                subheading={
                  disclaimerSubheading ?? 'Last updated: Sep 18, 2023 9:24 PM'
                }
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
