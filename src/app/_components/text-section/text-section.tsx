import { Media, TextSectionBlockType } from '@/payload/payload-types'
import Image from 'next/image'
import { FC } from 'react'
import RichText from '../RichText'
import { cn } from '@/lib'

interface TextSectionProps extends TextSectionBlockType {
  textSectionBackgroundColor: TextSectionBlockType['backgroundColor']
}

const TextSection: FC<TextSectionProps> = ({
  heading,
  headingAlignment,
  image,
  imageFirst,
  richText,
  subheading,
  textSectionBackgroundColor,
}) => {
  const bgColor = `bg-${textSectionBackgroundColor}`

  return (
    <section className={cn('container py-12', bgColor)}>
      <div className="flex flex-col gap-12">
        {heading && (
          <div
            className={cn(
              'flex flex-col gap-4',
              headingAlignment === 'center' && 'items-center',
              headingAlignment === 'left' && 'items-start',
              headingAlignment === 'right' && 'items-end',
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
              imageFirst ? '' : 'flex-col-reverse md:flex-row-reverse',
            )}
          >
            <div className="flex items-center justify-center md:w-1/2">
              <Image
                src={(image as Media).url as string}
                alt=""
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
