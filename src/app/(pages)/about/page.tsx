import { PageHeader } from '@/_components/page-header'
import { TextSection } from '@/_components/text-section'

export default function AboutPage() {
  return (
    <>
      <PageHeader backgroundColor="brandSecondary" heading="Meet Rachael" />
      <TextSection
        image={{
          alt: 'Rachael Mathiak headshot',
          url: '/images/rachael_headshot.jpg',
        }}
        imageFirst
        richText="<p>Rachael Mathiak, MSW, LICSW, is a licensed independent clinical social worker in the state of Washington. She has been providing therapy for over 15 years. Rachael has a passion for working with people who are struggling with anxiety, depression, parenting stress, issues in relationships, and providing affirming care for LGBTQIA+ folks.</p>"
      />
    </>
  )
}
