import { type FC } from 'react'
import Image from 'next/image'
import { type Media, type TextSectionBlockType } from '@/payload-types'

import { cn } from '@/_lib'

import { Accordion } from '../accordion'
import { RichText } from '../rich-text'

interface TextSectionProps extends TextSectionBlockType {}

const TextSection: FC<TextSectionProps> = ({
  accordion,
  backgroundColor,
  body_html,
  heading,
  headingAlignment,
  image,
  imageFirst,
  subheading,
}) => {
  const bgColor = `bg-${backgroundColor}`
  const textSectionAccordion = accordion?.[0]

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
                src={(image as Media).url as string}
                alt={(image as Media).alt}
                height={450}
                width={400}
                className="min-w-72 rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-12 md:w-1/2">
              {body_html && <RichText content={body_html} />}
              {textSectionAccordion && <Accordion asChild {...textSectionAccordion} />}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-12 md:px-12">
            {body_html && <RichText content={body_html} />}
            {textSectionAccordion && <Accordion asChild {...textSectionAccordion} />}
          </div>
        )}
      </div>
    </section>
  )
}

export { TextSection }
