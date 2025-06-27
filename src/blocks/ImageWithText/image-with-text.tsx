import Image from 'next/image'
import type { FC } from 'react'
import { cn } from '@/lib'
import type { ImageWithTextBlock } from '@/types/payload-types'
import { getImage } from '@/utils/getImage'
import { mapBackgroundColor } from '@/utils/mapBackgroundColor'
import { ContentSection } from './content-section'
import { SectionHeading } from './section-heading'

type Props = ImageWithTextBlock

const ImageWithText: FC<Props> = ({
  accordion,
  backgroundColor,
  fullHeightImage,
  heading,
  headingAlignment,
  image,
  imageFirst,
  richTextHTML,
  subheading,
}) => {
  const bgColor = mapBackgroundColor(backgroundColor)
  const resolvedImage = getImage(image)

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
        {resolvedImage && fullHeightImage && (
          <div className="flex grow justify-center">
            <Image
              alt={resolvedImage.alt}
              className="min-w-72 rounded-[99px] object-cover shadow-lg"
              height={450}
              src={resolvedImage.url}
              width={400}
            />
          </div>
        )}
        <div className="flex grow flex-col gap-12">
          <SectionHeading
            fullHeightImage={fullHeightImage}
            heading={heading}
            headingAlignment={headingAlignment}
            subheading={subheading}
          />
          <ContentSection
            accordion={accordion}
            fullHeightImage={fullHeightImage}
            image={resolvedImage}
            imageFirst={imageFirst}
            richText={richTextHTML}
          />
        </div>
      </div>
    </section>
  )
}

export { ImageWithText }
