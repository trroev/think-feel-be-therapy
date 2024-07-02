import { type FC } from 'react'
import Image from 'next/image'

import { cn } from '@/_lib'

import { RichText } from '../rich-text'

interface TextSectionProps {
  backgroundColor?:
    | ('brandPrimary' | 'brandSecondary' | 'brandTertiary' | 'brandQuaternary' | 'transparent')
    | null
  heading?: string | null
  headingAlignment?: ('left' | 'center' | 'right') | null
  subheading?: string | null
  richText: string
  image?: { alt: string; url: string }
  imageFirst?: boolean | null
}

const TextSection: FC<TextSectionProps> = ({
  backgroundColor,
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
      <div className="flex flex-col gap-12">
        {heading && (
          <div
            className={cn(
              'flex flex-col gap-4',
              headingAlignment === 'center' && 'items-center',
              headingAlignment === 'left' && 'items-start',
              headingAlignment === 'right' && 'items-end'
            )}
          >
            <h3>{heading}</h3>
            {subheading && <h6>{subheading}</h6>}
          </div>
        )}
        {image ? (
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
                className="min-w-72 rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <RichText content={richText} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:px-12">
            <RichText content={richText} />
          </div>
        )}
      </div>
    </section>
  )
}

export { TextSection }
