import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { cn } from '@/lib'

import { RichText } from '../rich-text'
import { Button } from '../ui'

interface CTAProps {
  backgroundColor?:
    | (
        | 'brandPrimary'
        | 'brandSecondary'
        | 'brandTertiary'
        | 'brandQuaternary'
        | 'transparent'
      )
    | null
  body?: string
  heading?: string
  image?: {
    alt: string
    url: string
  }
  links?: {
    href: string
    label: string
  }[]
  subheading?: string
}

const CTA: FC<CTAProps> = ({
  body,
  backgroundColor,
  image,
  heading,
  links,
  subheading,
}) => {
  const bgColor = `bg-${backgroundColor}`

  return (
    <section
      className={cn(
        'relative flex min-h-80 items-center justify-center',
        backgroundColor === 'transparent' && !image
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
          {body && (
            <div className="max-w-prose">
              <RichText content={body} />
            </div>
          )}
        </div>
        {links && (
          <div className="flex md:px-12">
            {links.map((link) => {
              return (
                <Link href={link.href} key={`${link.href}-${link.label}`}>
                  <Button variant="secondary">{link.label}</Button>
                </Link>
              )
            })}
          </div>
        )}
      </div>
      {image && (
        <Image
          alt={image.alt}
          className={cn(
            'absolute inset-0 object-cover',
            heading && 'brightness-50'
          )}
          fill
          src={image.url}
        />
      )}
    </section>
  )
}

export { CTA }
