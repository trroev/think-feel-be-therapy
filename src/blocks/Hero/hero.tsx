import { Slot } from '@radix-ui/react-slot'
import Image from 'next/image'
import type { FC } from 'react'
import { Divider, WordCarousel } from '@/components/ui'
import { cn } from '@/lib'
import type { HeroBlock } from '@/types/payload-types'
import { getImage } from '@/utils'
import { mapBackgroundColor } from '@/utils/mapBackgroundColor'

type Props = HeroBlock

const Hero: FC<Props> = ({
  backgroundColor,
  backgroundImage,
  caption,
  heading,
  subheading,
}) => {
  const bgColor = mapBackgroundColor(backgroundColor)
  const bgImage = getImage(backgroundImage)

  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center',
        bgColor,
        bgImage && 'h-[calc(100vh-6rem)]'
      )}
    >
      <div className="container z-10 flex flex-col items-center justify-center py-4 text-center text-background md:py-6 lg:py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">{heading}</h1>
        {subheading && <h2>{subheading}</h2>}
        {caption?.tagline && (
          <>
            <Divider className="my-4" />
            <Slot className="flex flex-col px-4 max-sm:max-w-sm">
              <span className="font-semibold text-xl tracking-tight md:text-2xl lg:text-3xl">
                {caption.tagline}
                <br />
                {caption.words && caption.words.length > 0 && (
                  <WordCarousel
                    options={{ loop: true }}
                    words={caption.words}
                  />
                )}
              </span>
            </Slot>
          </>
        )}
      </div>
      {bgImage && (
        <Image
          alt={bgImage.alt}
          className={cn(
            'absolute inset-0 object-cover',
            heading && 'brightness-[0.6]'
          )}
          fill
          src={bgImage.url}
        />
      )}
    </section>
  )
}

export { Hero }
