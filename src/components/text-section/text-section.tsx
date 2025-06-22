import Image from 'next/image'
import type { FC } from 'react'

import { cn } from '@/lib'

import { Accordion, type AccordionProps } from '../accordion'
import { RichText } from '../rich-text'

interface TextSectionProps {
  accordion?: AccordionProps
  backgroundColor?:
    | (
        | 'brandPrimary'
        | 'brandSecondary'
        | 'brandTertiary'
        | 'brandQuaternary'
        | 'transparent'
      )
    | null
  fullHeightImage?: boolean | null
  heading?: string | null
  headingAlignment?: ('left' | 'center' | 'right') | null
  subheading?: string | null
  richText: string
  image?: { alt: string; url: string }
  imageFirst?: boolean | null
}

interface HeadingProps {
  heading: string
  subheading?: string | null
  headingAlignment?: ('left' | 'center' | 'right') | null
  fullHeightImage?: boolean | null
}

const SectionHeading: FC<HeadingProps> = ({
  heading,
  subheading,
  headingAlignment,
  fullHeightImage,
}) => {
  if (!heading) {
    return null
  }

  return (
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
  )
}

interface ContentSectionProps {
  image?: { alt: string; url: string }
  imageFirst?: boolean | null
  richText: string
  accordion?: AccordionProps
  fullHeightImage?: boolean | null
}

const ContentSection: FC<ContentSectionProps> = ({
  image,
  imageFirst,
  richText,
  accordion,
  fullHeightImage,
}) => {
  if (!image || fullHeightImage) {
    return (
      <div
        className={cn(
          'flex flex-col gap-12 md:px-12',
          fullHeightImage && 'md:px-0'
        )}
      >
        <RichText content={richText} />
        {accordion && <Accordion asChild {...accordion} />}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-12 md:flex-row md:px-12',
        imageFirst ? '' : 'flex-col-reverse md:flex-row-reverse'
      )}
    >
      <div className="flex items-center justify-center md:w-1/2">
        <Image
          alt={image.alt}
          className="min-w-72 rounded-[99px] object-cover shadow-lg"
          height={450}
          src={image.url}
          width={400}
        />
      </div>
      <div className="flex flex-col gap-12 md:w-1/2">
        <RichText content={richText} />
        {accordion && <Accordion asChild {...accordion} />}
      </div>
    </div>
  )
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
              alt={image.alt}
              className="min-w-72 rounded-[99px] object-cover shadow-lg"
              height={450}
              src={image.url}
              width={400}
            />
          </div>
        )}
        <div className="flex grow flex-col gap-12">
          <SectionHeading
            fullHeightImage={fullHeightImage}
            heading={heading || ''}
            headingAlignment={headingAlignment}
            subheading={subheading}
          />
          <ContentSection
            accordion={accordion}
            fullHeightImage={fullHeightImage}
            image={image}
            imageFirst={imageFirst}
            richText={richText}
          />
        </div>
      </div>
    </section>
  )
}

export { TextSection }
