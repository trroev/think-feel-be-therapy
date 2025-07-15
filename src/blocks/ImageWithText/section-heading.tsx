import type { FC } from 'react'
import { cn } from '@/lib'
import type { ImageWithTextBlock } from '@/types/payload-types'

type Props = {
  fullHeightImage?: ImageWithTextBlock['fullHeightImage']
  heading: ImageWithTextBlock['heading']
  headingAlignment?: ImageWithTextBlock['headingAlignment']
  subheading?: ImageWithTextBlock['subheading']
}

const SectionHeading: FC<Props> = ({
  fullHeightImage,
  heading,
  headingAlignment,
  subheading,
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
      {subheading && (
        <span className="font-semibold text-base tracking-tight md:text-lg lg:text-xl">
          {subheading}
        </span>
      )}
    </div>
  )
}

export { SectionHeading }
