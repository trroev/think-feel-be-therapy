import { HeroBlockType, Media } from '@/payload/payload-types'
import Image from 'next/image'
import { FC } from 'react'
import { Divider, WordCarousel } from '../ui'
import { cn } from '@/lib'

interface HeroProps extends HeroBlockType {
  heroBackgroundColor: HeroBlockType['backgroundColor']
}

const Hero: FC<HeroProps> = ({
  heading,
  headingFontWeight,
  heroBackgroundColor,
  heroTagline,
  image,
  subheading,
}) => {
  const bgColor = `bg-${heroBackgroundColor}`
  const taglineHeading = heroTagline?.[0].staticHeading
  const wordsArray = heroTagline?.[0].words as unknown as { word: string }[]

  const getHeadingFontWeight = (() => {
    switch (headingFontWeight) {
      case 'thin':
        return 'font-thin'
      case 'light':
        return 'font-light'
      case 'normal':
        return 'font-normal'
      case 'medium':
        return 'font-medium'
      case 'semibold':
        return 'font-semibold'
      case 'bold':
        return 'font-bold'
      case 'extrabold':
        return 'font-extrabold'
      default:
        return undefined
    }
  })()

  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center',
        heroBackgroundColor === 'transparent' ? 'border-y border-border' : bgColor,
        image && 'h-[calc(100vh-6rem)]',
      )}
    >
      {heading && (
        <div className="container z-10 flex flex-col items-center justify-center py-4 text-background text-center md:py-6 lg:py-8">
          <h1 className={cn(getHeadingFontWeight)}>{heading}</h1>
          {subheading && <h3>{subheading}</h3>}
          {heroTagline && (
            <>
              <Divider className="my-4" />
              <div className="flex md:px-12">
                <h4>
                  {taglineHeading}
                  <br />
                  <WordCarousel options={{ loop: true }} words={wordsArray} />
                  {/* <FlipWords words={wordsArray} className="p-0 mx-auto" /> */}
                </h4>
              </div>
            </>
          )}
        </div>
      )}
      {image && (
        <Image
          src={(image as Media).url as string}
          alt={(image as Media).alt}
          fill
          className={cn('absolute inset-0 object-cover', heading && 'brightness-[0.6]')}
        />
      )}
    </section>
  )
}

export { Hero }
