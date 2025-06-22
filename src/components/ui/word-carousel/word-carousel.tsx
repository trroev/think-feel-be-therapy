'use client'

import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import type { FC } from 'react'

interface WordCarouselProps {
  options: EmblaOptionsType
  words: {
    word: string
  }[]
}

const WordCarousel: FC<WordCarouselProps> = ({ options, words }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
    Fade(),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {words.map((word, index) => (
          <span className="flex-[0_0_100%] text-brand-tertiary" key={index}>
            {word.word}
          </span>
        ))}
      </div>
    </div>
  )
}

export { WordCarousel }
