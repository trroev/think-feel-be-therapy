import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type CallToActionBlockType, type Media, type Page } from '@/payload-types'

import { cn } from '@/_lib'

import { RichText } from '../rich-text'
import { Button } from '../ui'

interface CTAProps extends CallToActionBlockType {}

const CTA: FC<CTAProps> = ({ backgroundColor, body_html, heading, image, links, subheading }) => {
  const bgColor = `bg-${backgroundColor}`

  return (
    <section
      className={cn(
        'relative flex min-h-80 items-center justify-center',
        backgroundColor === 'transparent' && !image ? 'border-y border-border' : bgColor
      )}
    >
      <div className="container z-10 flex flex-col items-center gap-8 py-4 text-background md:py-6 lg:py-8">
        <div className="flex flex-col gap-4 md:px-12">
          <div className="flex flex-col gap-2">
            {heading && <h2 className="text-center">{heading}</h2>}
            {subheading && <h5 className="text-center">{subheading}</h5>}
          </div>
          {body_html && (
            <div className="max-w-prose">
              <RichText content={body_html} />
            </div>
          )}
        </div>
        {links && (
          <div className="flex md:px-12">
            {links.map((link) => {
              const linkUrl = (link.link.url as string) ?? (link.link.reference?.value as Page).slug

              return (
                <Link key={link.id} href={linkUrl}>
                  <Button variant="secondary">{link.link.label}</Button>
                </Link>
              )
            })}
          </div>
        )}
      </div>
      {image && (
        <Image
          src={(image as Media).url as string}
          alt={(image as Media).alt}
          fill
          className={cn('absolute inset-0 object-cover', heading && 'brightness-50')}
        />
      )}
    </section>
  )
}

export { CTA }
