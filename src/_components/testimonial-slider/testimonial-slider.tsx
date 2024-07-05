'use client'

import { type FC } from 'react'

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui'

interface Testimonial {
  content: string
  id: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ testimonials }) => {
  return (
    <section className="bg-brandQuaternary">
      <div className="container flex justify-center py-12">
        <Carousel
          // plugins={[
          //   Autoplay({
          //     delay: 5000,
          //   }),
          // ]}
          className="w-full max-w-xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="flex items-center justify-center">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <p>{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </div>
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
