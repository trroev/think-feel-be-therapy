'use client'

import { type FC } from 'react'
import { type EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'

interface WordCarouselProps {
  options: EmblaOptionsType
  words: {
    word: string
  }[]
}

const WordCarousel: FC<WordCarouselProps> = ({ options, words }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 }), Fade()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {words.map((word, index) => (
          <span key={index} className="flex-[0_0_100%] text-brandTertiary">
            {word.word}
          </span>
        ))}
      </div>
    </div>
  )
}

export { WordCarousel }
