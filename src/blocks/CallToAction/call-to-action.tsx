import Image from 'next/image'
import type { FC } from 'react'
import { CmsLink } from '@/components/cms-link'
import { isRichTextEmpty, RichText } from '@/components/rich-text'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import type { CallToActionBlock } from '@/types/payload-types'
import { getImage } from '@/utils/getImage'
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

  const hasBody = !isRichTextEmpty(bodyHTML)

  return (
    <section
      className={cn(
        'relative flex min-h-80 items-center justify-center',
        bgColor === 'transparent' && !backgroundImage
          ? 'border-border border-y'
          : bgColor
      )}
    >
      <div className="container z-10 flex flex-col items-center gap-8 py-4 text-background md:py-6 lg:py-8">
        <div className="flex flex-col gap-4 md:px-12">
          <div className="flex flex-col gap-2">
            {heading && <h2 className="text-center">{heading}</h2>}
            {subheading && (
              <span className="text-center font-semibold text-lg tracking-tight md:text-xl lg:text-2xl">
                {subheading}
              </span>
            )}
          </div>
          {hasBody && (
            <div className="max-w-prose">
              <RichText content={bodyHTML} />
            </div>
          )}
        </div>
        {links && links.length > 0 && (
          <div className="flex md:px-12">
            {links.map(({ id, link }) => (
              <CmsLink
                className={buttonVariants({ variant: 'secondary' })}
                key={id}
                link={link}
              />
            ))}
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
