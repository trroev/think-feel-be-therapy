'use client'

import type { FC } from 'react'

import { cn } from '@/_lib'

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Divider,
} from '../ui'

interface Testimonial {
  client?: string
  id: number
  quote: string
  year?: string
}

interface TestimonialSliderProps {
  alignment?: 'center' | 'left' | 'right'
  heading?: string
  subheading?: string
  testimonials: Testimonial[]
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({
  alignment,
  heading,
  subheading,
  testimonials,
}) => {
  return (
    <>
      <section className="bg-brandSecondary">
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
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="flex items-center justify-center"
                >
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="flex flex-col space-y-2">
                        <p className="line-clamp-[8] text-sm sm:text-base">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        {testimonial.client && testimonial.year && (
                          <p className="text-sm sm:text-base">
                            —{' '}
                            <span className="font-semibold">
                              {testimonial.client},
                            </span>{' '}
                            {testimonial.year}
                          </p>
                        )}
                        {testimonial.client && !testimonial.year && (
                          <p className='font-semibold text-sm sm:text-base'>
                            -{testimonial.client}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  )
}

export { TestimonialSlider }
