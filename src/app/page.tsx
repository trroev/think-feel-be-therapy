import { Hero } from '@/_components/hero'
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
      <TextSection
        richText="<p>Think. Feel. Be is a space to come make sense of the way you experience your thoughts and emotions and move to a place of more self-understanding and self-acceptance.
Rachael is especially helpful with supporting people who are struggling with anxiety, depression, parenting stress, issues in relationships, and providing affirming care for LGBTQIA+ folks.
</p>"
      />
    </>
  )
}
