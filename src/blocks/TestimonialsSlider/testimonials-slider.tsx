import type { FC } from 'react'
import { match, P } from 'ts-pattern'
import { RichText } from '@/components/rich-text'
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Divider,
} from '@/components/ui'
import type { TestimonialsSliderBlock } from '@/types/payload-types'

type TestimonialsSliderProps = TestimonialsSliderBlock

const TestimonialsSlider: FC<TestimonialsSliderProps> = ({
  heading,
  subheading,
  testimonials,
}) => {
  const resolvedTestimonials = mapTestimonials(testimonials)

  return (
    <>
      <section className="bg-brand-secondary">
        <div className="container flex flex-col items-center gap-12 py-12">
          {heading && (
            <div className="flex flex-col items-center gap-4 self-stretch">
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
              {resolvedTestimonials.map((testimonial) => (
                <CarouselItem
                  className="flex items-center justify-center"
                  key={testimonial.id}
                >
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="flex flex-col space-y-2">
                        <div className="line-clamp-8 text-sm sm:text-base">
                          <RichText content={testimonial.quote} />
                        </div>
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
                          <p className="font-semibold text-sm sm:text-base">
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

export { TestimonialsSlider }

function mapTestimonials(
  testimonials: TestimonialsSliderBlock['testimonials']
): {
  client?: string
  id: string
  quote: string
  year?: string
}[] {
  return match(testimonials)
    .with(
      P.array({
        id: P.string,
        name: P.string,
        dateRange: P.string,
        testimonialHTML: P.string,
      }),
      (t) =>
        t.map((testimonial) => ({
          id: testimonial.id,
          client: testimonial.name,
          quote: testimonial.testimonialHTML,
          year: testimonial.dateRange,
        }))
    )
    .otherwise(() => [])
}
