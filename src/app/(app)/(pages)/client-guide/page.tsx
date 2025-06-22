import { Accordion } from '@/components/accordion'
import { CTA } from '@/components/call-to-action'
import { PageHeader } from '@/components/page-header'
import { TextSection } from '@/components/text-section'

const accordionItems = [
  {
    content: `
      <ul>
        <li>Person/Client Centered</li>
        <li>Interpersonal Therapy</li>
        <li>Cognitive Behavioral Therapy (CBT)</li>
        <li>Mindfulness</li>
        <li>Dialectical Behavioral Therapy (DBT)</li>
        <li>Exposure Response Prevention (ERP)</li>
        <li>Unified Protocol</li>
      </ul>
    `,
    heading: 'Modes of Treatment',
    id: 'modes-of-treatment',
  },
  {
    content: `
      <ul>
        <li>Anxiety</li>
        <li>Depression</li>
        <li>ADHD</li>
        <li>People pleasing and perfectionist tendencies</li>
        <li>Parenting</li>
        <li>Navigating life changes</li>
        <li>Trauma</li>
      </ul>
    `,
    heading: 'Specializations',
    id: 'specializations',
  },
]

export default function ClientGuidePage() {
  return (
    <>
      <PageHeader
        backgroundColor="brandQuaternary"
        heading="Client Guide"
        subheading="Everything you need to know about working with Think.Feel.Be. Therapy"
      />
      <TextSection
        fullHeightImage
        heading="Services & Pricing"
        headingAlignment="center"
        image={{
          alt: "Rachael Mathiak's office",
          url: '/images/rachael-office.jpg',
        }}
        richText="
          <ul>
            <li>Individual Therapy - $175/session</li>
            <li>Family Therapy & Parent Coaching - $200/session</li>
          </ul>
        "
      />
      <Accordion items={accordionItems} />
      <TextSection
        heading="Payment & Insurance Information"
        headingAlignment="center"
        image={{ alt: 'Rachael Mathiak', url: '/images/coffee-notes.jpg' }}
        imageFirst
        richText="
          <p>
            I am in-network and able to submit claims directly to:
          </p>
          <ul>
            <li>Blue Cross Blue Shield</li>
            <li>Aetna</li>
          </ul>
          <br>
          <p>
            For those who do not have insurance through those carriers, my services are available via private pay. I am considered an out-of-network (OON) provider. You may still qualify for reimbursement from your insurance for therapy. I partner with Mentaya, a service that streamlines getting reimbursed for your therapy sessions through out-of-network benefits. Please reach out for more details about how to use OON coverage for therapy.
          </p>
          <br>
          <p>
           Insurance coverage can be confusing, I'm happy to help you navigate what makes the most sense of how to utilize insurance benefits to help you access support during an initial consult call.
          </p>
        "
      />
      <TextSection
        heading="Cancellation Policy"
        headingAlignment="center"
        richText="
          <p>
            48 hours advance notice is required to cancel/reschedule your appointment.  If notice is not given, the full rate is charged for the missed appointment time. Please note: your insurance will not reimburse you for late canceled or no show appointments.
          </p>
        "
      />
      <CTA
        backgroundColor="brandPrimary"
        heading="Learn more about Rachael"
        links={[{ href: '/about', label: 'Meet Rachael' }]}
      />
    </>
  )
}
