'use client'

import { type FC } from 'react'
import { type TestimonialSectionBlockType } from '@/payload-types'

import { cn } from '@/_lib'

import { TestimonialCard } from '../testimonial-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Divider,
} from '../ui'

interface TestimonialSliderProps extends TestimonialSectionBlockType {}

const TestimonialSlider: FC<TestimonialSliderProps> = ({
  alignment,
  backgroundColor,
  heading,
  subheading,
  testimonialCards,
}) => {
  const bgColor = `bg-${backgroundColor}`

  return (
    <section className={bgColor}>
      <div className="container flex flex-col items-center gap-12 py-12">
        {heading && (
          <div
            className={cn(
              'flex flex-col gap-4 self-stretch',
              alignment === 'center' && 'items-center',
              alignment === 'left' && 'items-start',
              alignment === 'right' && 'items-end'
            )}
          >
            <h3>{heading}</h3>
            {subheading && (
              <>
                <Divider />
                <h6>{subheading}</h6>
              </>
            )}
          </div>
        )}
        <Carousel className="w-full max-w-[250px] sm:max-w-sm md:max-w-xl">
          <CarouselContent>
            {testimonialCards?.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="flex items-center justify-center">
                <TestimonialCard
                  client={testimonial.client as string}
                  quote={testimonial.quote}
                  year={testimonial.year as string}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export { TestimonialSlider }
