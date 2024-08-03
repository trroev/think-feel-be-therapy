import { type FC } from 'react'
import Image from 'next/image'

import { cn } from '@/_lib'

import { Accordion, type AccordionProps } from '../accordion'
import { RichText } from '../rich-text'

interface TextSectionProps {
  accordion?: AccordionProps
  backgroundColor?:
    | ('brandPrimary' | 'brandSecondary' | 'brandTertiary' | 'brandQuaternary' | 'transparent')
    | null
  fullHeightImage?: boolean | null
  heading?: string | null
  headingAlignment?: ('left' | 'center' | 'right') | null
  subheading?: string | null
  richText: string
  image?: { alt: string; url: string }
  imageFirst?: boolean | null
}

const TextSection: FC<TextSectionProps> = ({
  accordion,
  backgroundColor,
  fullHeightImage,
  heading,
  headingAlignment,
  image,
  imageFirst,
  richText,
  subheading,
}) => {
  const bgColor = `bg-${backgroundColor}`

  return (
    <section className={cn('container py-12', bgColor)}>
      <div
        className={cn(
          'flex flex-col gap-12 md:px-12',
          fullHeightImage && imageFirst
            ? 'md:flex-row md:items-center'
            : 'flex-col-reverse md:flex-row-reverse md:items-center'
        )}
      >
        {image && fullHeightImage && (
          <div className="flex grow justify-center">
            <Image
              src={image.url}
              alt={image.alt}
              height={450}
              width={400}
              className="min-w-72 rounded-[99px] object-cover shadow-lg"
            />
          </div>
        )}
        <div className="flex grow flex-col gap-12">
          {heading && (
            <div
              className={cn(
                'flex flex-col gap-4',
                headingAlignment === 'center' && 'items-center',
                headingAlignment === 'left' && 'items-start',
                headingAlignment === 'right' && 'items-end',
                fullHeightImage && 'items-start'
              )}
            >
              <h3>{heading}</h3>
              {subheading && <h6>{subheading}</h6>}
            </div>
          )}
          {image && !fullHeightImage ? (
            <div
              className={cn(
                'flex flex-col gap-12 md:flex-row md:px-12',
                imageFirst ? '' : 'flex-col-reverse md:flex-row-reverse'
              )}
            >
              <div className="flex items-center justify-center md:w-1/2">
                <Image
                  src={image.url}
                  alt={image.alt}
                  height={450}
                  width={400}
                  className="min-w-72 rounded-[99px] object-cover shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-12 md:w-1/2">
                <RichText content={richText} />
                {accordion && <Accordion asChild {...accordion} />}
              </div>
            </div>
          ) : (
            <div className={cn('flex flex-col gap-12 md:px-12', fullHeightImage && 'md:px-0')}>
              <RichText content={richText} />
              {accordion && <Accordion asChild {...accordion} />}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { TextSection }
