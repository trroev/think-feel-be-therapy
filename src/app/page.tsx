import { testimonials } from '@/_config'
import { CTA } from '@/_components/call-to-action'
import { Hero } from '@/_components/hero'
import { TestimonialSlider } from '@/_components/testimonial-slider'
import { TextSection } from '@/_components/text-section'

export default function IndexPage() {
  const wordsArray = [
    'themselves',
    'others',
    'their relationships',
    'change',
    'their lived experience',
  ]

  return (
    <>
      <Hero
        heading="Think.Feel.Be."
        heroTagline={[
          {
            staticHeading: 'Therapy for people who want to understand and accept',
            words: wordsArray.map((word) => ({ word })),
          },
        ]}
        image={{
          alt: 'McWay Falls in Big Sur, California',
          url: '/images/mcway-falls.jpg',
        }}
        subheading="Therapy"
      />
      <CTA
        backgroundColor="brandPrimary"
        subheading="Think. Feel. Be is a space to come make sense of the way you experience your thoughts and emotions and move to a place of more self-understanding and self-acceptance.
          Rachael is especially helpful with supporting people who are struggling with anxiety, depression, parenting stress, issues in relationships, and providing affirming care for LGBTQIA+ folks."
      />
      <TextSection
        heading="Our Values"
        headingAlignment="center"
        richText="
        <h5>Change:</h5>
        <p>Change is a guarantee in life. It can be scary, invigorating, and everything in between. I hold change as a value because it is something we all need to learn to accept, adapt to, and grow with. It is an integral part of this work.</p>
        <br>
        <h5>Trust:</h5>
        <p>Trust is at the core of any healthy relationship, including the relationship you have with your therapist. We’ll work to build a safe and caring relationship where you can find healing and greater life satisfaction.</p>
        <br>
        <h5>Authenticity:</h5>
        <p>You are the expert on yourself. Therapy is a judgment-free space where you get to discover what living an authentic life means to you.</p>
        <br>
        <h5>Acceptance:</h5>
        <p>Our motto is accept more, resist less. I accept people wherever they are in life when they show up to my door, and guide them to learn how to better accept themselves and their circumstances. Acceptance is so much more than a value. It is also a skill, a guiding principle, and a way of relating to others. </p>
        "
      />
      <TestimonialSlider testimonials={testimonials} />
      <CTA
        heading="Ready to start your journey?"
        image={{
          alt: 'Big Sur, California',
          url: '/images/big-sur_flowers.jpg',
        }}
        links={[
          {
            href: 'https://thinkfeelbetherapy.sessionshealth.com/request',
            label: 'Schedule a Session',
          },
        ]}
      />
    </>
  )
}
