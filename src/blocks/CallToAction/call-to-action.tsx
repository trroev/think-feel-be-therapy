import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { RichText } from '@/components/rich-text'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { CallToActionBlock } from '@/types/payload-types'
import { getImage } from '@/utils'
import { getLink } from '@/utils/getLink'
import { mapBackgroundColor } from '@/utils/mapBackgroundColor'

type Props = CallToActionBlock

const CallToAction: FC<Props> = ({
  backgroundColor,
  backgroundImage,
  bodyHTML,
  heading,
  links,
  subheading,
}) => {
  const bgColor = mapBackgroundColor(backgroundColor)
  const bgImage = getImage(backgroundImage)

  return (
    <section
      className={cn(
        'relative flex min-h-80 items-center justify-center',
        backgroundColor === 'transparent' && !backgroundImage
          ? 'border-border border-y'
          : bgColor
      )}
    >
      <div className="container z-10 flex flex-col items-center gap-8 py-4 text-background md:py-6 lg:py-8">
        <div className="flex flex-col gap-4 md:px-12">
          <div className="flex flex-col gap-2">
            {heading && <h2 className="text-center">{heading}</h2>}
            {subheading && <h5 className="text-center">{subheading}</h5>}
          </div>
          {bodyHTML && (
            <div className="max-w-prose">
              <RichText content={bodyHTML} />
            </div>
          )}
        </div>
        {links && (
          <div className="flex md:px-12">
            {links.map(({ id, link }) => {
              const processedLink = getLink(link)
              if (!processedLink) {
                return null
              }
              const { href, label, newTab } = processedLink

              return (
                <Link href={href} key={id} target={newTab ? '_blank' : '_self'}>
                  <Button variant="secondary">{label}</Button>
                </Link>
              )
            })}
          </div>
        )}
      </div>
      {bgImage && (
        <Image
          alt={bgImage.alt}
          className={cn(
            'absolute inset-0 object-cover',
            heading && 'brightness-50'
          )}
          fill
          src={bgImage.url}
        />
      )}
    </section>
  )
}

export { CallToAction }
