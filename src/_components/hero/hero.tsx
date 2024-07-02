import { type FC } from 'react'
import Image from 'next/image'

import { cn } from '@/_lib'

import { Divider, WordCarousel } from '../ui'

interface TaglineProps {
  staticHeading: string
  words: { word: string }[]
}

interface HeroProps {
  backgroundColor?:
    | ('brandPrimary' | 'brandSecondary' | 'brandTertiary' | 'brandQuaternary' | 'transparent')
    | null
  heading?: string
  headingFontWeight?:
    | ('thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold')
    | null
  heroTagline?: TaglineProps[]
  image?: { alt: string; url: string }
  subheading?: string
}

const Hero: FC<HeroProps> = ({
  backgroundColor,
  heading,
  headingFontWeight,
  heroTagline,
  image,
  subheading,
}) => {
  const bgColor = `bg-${backgroundColor}`
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
        backgroundColor === 'transparent' ? 'border-y border-border' : bgColor,
        image && 'h-[calc(100vh-6rem)]'
      )}
    >
      {heading && (
        <div className="container z-10 flex flex-col items-center justify-center py-4 text-center text-background md:py-6 lg:py-8">
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
                </h4>
              </div>
            </>
          )}
        </div>
      )}
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className={cn('absolute inset-0 object-cover', heading && 'brightness-[0.6]')}
        />
      )}
    </section>
  )
}

export { Hero }
