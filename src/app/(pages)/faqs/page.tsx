import { Accordion } from '@/_components/accordion'
import { CTA } from '@/_components/call-to-action'
import { PageHeader } from '@/_components/page-header'

const accordionItems = [
  {
    content: `
      <p>
        During our first 1-3 appointments we will be exploring your goals for therapy. Based on your needs, we can discuss an estimated timeline of treatment.
      </p>
    `,
    heading: 'How long do most people come to therapy?',
    id: 'how-long',
  },
  {
    content: `
      <p>
        My rate is $175 for individuals and $200 for family therapy or parent-coaching. I have a limited number of sliding scale slots based on need and schedule availability. <a href="/contact">Contact me</a> to inquire about sliding fee scale rates.
      </p>
      <p>
        *Please note: many times insurance generally does not cover family therapy and parent coaching services, and in most cases this will be a private pay arrangement.
      </p>
    `,
    heading: 'What is your fee?',
    id: 'fee',
  },
  {
    content: `
      <p>
        I am in-network with Blue Cross Blue Shield and Aetna. For any other insurance carrier, I am considered an out of network provider (and leave rest of info already there). Add asterisk under this stating "if you are interested in using BCBS or Aetna, please know each plan varies for how they cover mental health benefits. You may be responsible for the full fee until all deductibles have been met.
      </p>
    `,
    heading: 'Do you accept insurance?',
    id: 'insurance',
  },
  {
    content: `
      <p>
        Locate the Mental Health/Behavioral Health 1800 number on the back of your card and ask the following questions:
      </p>
      <ul>
        <li>
          Do I have mental health benefits?
        </li>
        <li>
          What is my deductible and copay for metnal health/behavioral health services?
        </li>
        <li>
          What are my out of pocket costs per visit?
        </li>
        <li>
          Does my insurance have both in network and out of network coverage for mental health providers?
        </li>
        <li>
          Do I need a referral from a primary care physician to see a mental health provider?
        </li>
        <li>
          Does my plan require pre-authorization for therapy?
        </li>
        <li>
          Is there a limit on the number of sessions or treatments covered?
        </li>
        <li>
          Are there any specific mental health conditions or disorders that may not be covered?
        </li>
      </ul>
    `,
    heading: 'How do I find out what my insurance coverage is for mental health benefits?',
    id: 'insurance-coverage-how',
  },
  {
    content: `
      <p>
        I have limited availability for in person appointments to those who are located in the greater Grand Rapids, Michigan area. <a href="/contact">Contact me</a> for more information.
      </p>
    `,
    heading: 'Do you offer in-person appointments?',
    id: 'in-person',
  },
  {
    content: `
      <a href="https://www.google.com/maps/place/3280+Beltline+Ct,+Grand+Rapids,+MI+49525/@43.0378714,-85.5901617,17z/data=!4m6!3m5!1s0x881854c43ff6c7d1:0x98d5365a9f6620e6!8m2!3d43.0377773!4d-85.5882734!16s%2Fg%2F11b8zcktyh?entry=ttu" target="_blank">
        Northeast GR Counseling building<br>
        3280 Beltline Ct,<br>
        Suite 100-200,<br>
        Grand Rapids, MI 49525
      </a>
    `,
    heading: 'Where are you located?',
    id: 'location',
  },
  {
    content: `
      <p>
        Sessions Health is the secure, HIPAA-compliant platform you'll use to schedule/reschedule appointments, complete your intake paperwork, and access our online video appointments. Current clients can use this link to access their <a href="https://thinkfeelbetherapy.sessionshealth.com/" target="_blank"></a>Sessions Health Client Portal.
      </p>
    `,
    heading: 'What is Sessions Health?',
    id: 'sessions-health',
  },
  {
    content: `
      <p>
        Yes, you are welcome, safe and accepted here.
      </p>
    `,
    heading: 'Are you LGBTQIA+ affirming?',
    id: 'lgbtqia-affirming',
  },
  {
    content: `
      <p>
        Please complete the <a href="/contact">contact form</a> for a follow up email or schedule a 15 minute <a href="tel:16163305822">phone call</a> to discuss any other questions you may have.
      </p>
    `,
    heading: 'Other questions?',
    id: 'other-questions',
  },
]

export default function FAQsPage() {
  return (
    <>
      <PageHeader
        backgroundColor="brandTertiary"
        heading="FAQs"
        subheading="Answers to your most frequently asked questions about Think.Feel.Be. Therapy"
      />
      <Accordion items={accordionItems} />
      <CTA
        heading="Learn more about Rachael"
        links={[
          {
            href: '/about',
            label: 'Meet Rachael',
          },
        ]}
        image={{ alt: 'Bixby Bridge in Big Sur, California', url: '/images/bixby-bridge.jpg' }}
      />
    </>
  )
}
