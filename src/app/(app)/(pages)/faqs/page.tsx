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
        My rate is $175 for individuals and $210 for couples, family therapy, or parent-coaching. I have a limited number of sliding scale slots based on need and schedule availability. <a href="/contact">Contact me</a> to inquire about sliding fee scale rates.
      </p>
    `,
    heading: 'What is your fee?',
    id: 'fee',
  },
  {
    content: `
      <p>
        I am considered an out-of-network provider. I use a secure billing platform called Mentaya, which can help determine whether your plan includes any out of network benefits and whether it is possible to seek reimbursement for treatment. <a href="/client-guide">Learn more</a> about this in our client guide.
      </p>
    `,
    heading: 'Do you accept insurance?',
    id: 'insurance',
  },
  {
    content: `
      <p>
        There are many reasons some therapists do not accept insurance. For me, this decision came down to a few main reasons:
      </p>
      <br>
      <ul>
        <li>
          I care about protecting the confidentiality of my clients. I won't share your diagnosis with your insurance provider and we can avoid your insurance trying to dictate how often we can meet (applicable only for clients who are not using OON insurance benefits)
        </li>
        <br>
        <li>
          You deserve agency. If working with an in-network therapist is best for you or your finances, do it! If you don't want to use your insurance, great, you shouldn't have to. Even if you have insurance, you may have a high deductible plan that doesn't offer much in the way of mental health coverage. Just remember, you have options, and I can help you figure out what makes the most sense for you.
        </li>
        <br>
        <li>
          Most of us know how convoluted and complicated working with insurances can be. It's hard enough to find a therapist let alone having to hassle with insurance to make it work. Also, insurances don't always compensate therapists well and billing insurance takes a lot of time and management. I've built my practice to offer the highest quality care to my clients and to meet my needs as a business owner.
        </li>
      </ul>
      <br>
      <p>
        You can get more information using this <a href="https://mentalhealthmatch.com/articles/therapy/untold-truth-why-your-therapist-doesnt-take-insurance" target="_blank">link</a>.
      </p>
    `,
    heading: "Why don't you accept insurance?",
    id: 'why-no-insurance',
  },
  {
    content: `
      <p>
        Superbills are invoices that are submitted to your insurance provider when pursuing out-of-network benefits. These invoices include dates, service type (therapy code for insurance), length of session, payment amount, and a diagnosis code.
      </p>
    `,
    heading: 'What is a superbill?',
    id: 'superbill',
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
        I work with relationships of all shapes and sizes. I’m here for individuals, partners, parents, and families.
      </p>
    `,
    heading: 'What kinds of relationships do you work with?',
    id: 'relationship-types',
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
