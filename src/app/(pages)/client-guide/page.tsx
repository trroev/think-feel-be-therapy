import { Accordion } from '@/_components/accordion'
import { CTA } from '@/_components/call-to-action'
import { MentayaWidget } from '@/_components/mentaya-widget'
import { PageHeader } from '@/_components/page-header'
import { TextSection } from '@/_components/text-section'

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
        image={{ alt: "Rachael Mathiak's office", url: '/images/rachael-office.jpg' }}
        fullHeightImage
        heading="Services & Pricing"
        headingAlignment="center"
        richText="
          <ul>
            <li>Individual Therapy - $175/session</li>
            <li>Family, Couples, & Parent Coaching - $210/session</li>
          </ul>
        "
      />
      <Accordion items={accordionItems} />
      <TextSection
        image={{ alt: 'Rachael Mathiak', url: '/images/coffee-notes.jpg' }}
        imageFirst
        heading="Payment & Insurance Information"
        headingAlignment="center"
        richText="
          <p>
            Paying for your sessions is convenient and easy through our HIPAA-compliant platform, Mentaya and Sessions Health. Both Mentaya and Sessions Health  securely store your payment information (credit card, HSA/FSA card, or ACH banking account information) on file and debit your account after each session.
          </p>
          <br>
          <p>
            Mentaya auto-submits claims to your health insurance provider after each appointment. If you qualify for reimbursement (per your insurance plan policy) you will receive these funds back from your out of pocket costs for completed sessions.
          </p>
          <br>
          <p>
            If you do not have OON coverage, you will receive a $10/session discount on services as I am able to bill directly through Sessions Health.
          </p>
          <br>
          <p>
            Use this helpful tool below to learn if you qualify for reimbursement from your insurance provider.
          </p>
        "
      />
      <MentayaWidget />
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
