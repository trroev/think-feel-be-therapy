import Image from 'next/image'
import type { FC } from 'react'
import { match, P } from 'ts-pattern'
import { Accordion, type AccordionProps } from '@/components/accordion'
import { RichText } from '@/components/rich-text'
import { cn } from '@/lib'
import type { ImageWithTextBlock } from '@/types/payload-types'
import type { getImage } from '@/utils/getImage'

type Props = {
  accordion?: ImageWithTextBlock['accordion']
  fullHeightImage?: ImageWithTextBlock['fullHeightImage']
  image?: ReturnType<typeof getImage>
  imageFirst?: ImageWithTextBlock['imageFirst']
  richText: ImageWithTextBlock['richTextHTML']
}

const ContentSection: FC<Props> = ({
  accordion,
  fullHeightImage,
  image,
  imageFirst,
  richText,
}) => {
  const accordionItems = mapAccordionItems(accordion)

  if (!image || fullHeightImage) {
    return (
      <div
        className={cn(
          'flex flex-col gap-12 md:px-12',
          fullHeightImage && 'md:px-0'
        )}
      >
        {richText && <RichText content={richText} />}
        {accordionItems.length > 0 && (
          <Accordion asChild items={accordionItems} />
        )}
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
        {richText && <RichText content={richText} />}
        {accordionItems.length > 0 && (
          <Accordion asChild items={accordionItems} />
        )}
      </div>
    </div>
  )
}

export { ContentSection }

function mapAccordionItems(
  accordion: ImageWithTextBlock['accordion']
): AccordionProps['items'] {
  return match(accordion)
    .with(
      P.array(
        P.select({
          id: P.string,
          heading: P.string,
          accordionContentHTML: P.string,
        })
      ),
      (items) =>
        items.map((item) => ({
          id: item.id,
          heading: item.heading,
          content: item.accordionContentHTML,
        }))
    )
    .otherwise(() => [])
}
