import { cn } from '@/lib'
import { CallToActionBlockType, Media, Page } from '@/payload/payload-types'
import Image from 'next/image'
import { FC } from 'react'
import { Button, Divider } from '../ui'
import Link from 'next/link'
import RichText from '../RichText'

interface CTAProps extends CallToActionBlockType {
  ctaBackgroundColor: CallToActionBlockType['backgroundColor']
}

const CTA: FC<CTAProps> = ({ body, ctaBackgroundColor, image, heading, links, subheading }) => {
  const bgColor = `bg-${ctaBackgroundColor}`
  return (
    <section
      className={cn(
        'relative flex items-center justify-center min-h-80',
        ctaBackgroundColor === 'transparent' && !image ? 'border-y border-border' : bgColor,
      )}
    >
      {heading && (
        <div className="container z-10 flex flex-col items-center py-4 text-background md:py-6 lg:py-8 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-center">{heading}</h2>
              {subheading && <h5 className="text-center">{subheading}</h5>}
            </div>
            {body && (
              <div className="max-w-prose">
                <RichText content={body} />
              </div>
            )}
          </div>
          {links && (
            <>
              <div className="flex md:px-12">
                {links.map(link => {
                  const linkHref =
                    (link.link.url as string) ?? (link.link.reference?.value as Page).slug
                  return (
                    <Link key={link.id} href={linkHref}>
                      <Button variant="secondary">{link.link.label}</Button>
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}
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
