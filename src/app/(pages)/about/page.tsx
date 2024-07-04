import { Accordion } from '@/_components/accordion'
import { CTA } from '@/_components/call-to-action'
import { PageHeader } from '@/_components/page-header'
import { TextSection } from '@/_components/text-section'

const accordionItems = [
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
  {
    content: `
      <p>
        <strong>Master of Social Work & Graduate Certificate in Alcohol & Drug Abuse</strong>
        <br>
        <em>Western Michigan University</em> - 2013, Summa Cum Laude
      </p>
      <br>
      <p>
        <strong>Bachelor of Social Work</strong>
        <br>
        <em>Grand Valley State University</em> - 2010, Magna Cum Laude & Phi Kappa Phi Honors
      </p>
    `,
    heading: 'Education',
    id: 'education',
  },
  {
    content: `
      <p>
        <strong>Rachael Mathiak Therapy, LLC</strong>
        <br>
        <em>Owner & Therapist</em>
        <br>
        2023 - Present
      </p>
      <br>
      <p>
        <strong>Therapy Lab</strong>
        <br>
        Los Angeles, CA
        <br>
        <em>Therapist</em>
        <br>
        2021 - 2023
      </p>
      <br>
      <p>
        <strong>Community Hospital of the Monterey Peninsula</strong>
        <br>
        Monterey, CA
        <br>
        <em>Therapist & Medical Social Worker</em>
        <br>
        2016 - 2021
      </p>
      <br>
      <p>
        <strong>Monterey County Children's Behavioral Health</strong>
        <br>
        Salinas, CA
        <br>
        <em>Therapist</em>
        <br>
        2016 - 2017
      </p>
      <br>
      <p>
        <strong>Encompass Community Supports, ESS Team</strong>
        <br>
        Santa Cruz, CA
        <br>
        <em>Counselor III</em>
        <br>
        2014 - 2016
      </p>
      <br>
      <p>
        <strong>Arbor Circle</strong>
        <br>
        Grand Rapids, MI
        <br>
        <em>Home-based Youth/Family Therapist</em>
        <br>
        2013 - 2014
      </p>
      <br>
      <p>
        <strong>WMU Behavioral Health & Substance Abuse Outpatient Clinic</strong>
        <br>
        Kalamazoo, MI
        <br>
        <em>Graduate Internship</em>
        <br>
        2012 - 2013
      </p>
      <br>
      <p>
        <strong>Kent County Mental Health</strong>
        <br>
        Kent County, MI
        <br>
        <em>Case Manager/Counselor</em>
        <br>
        2010 - 2012
      </p>
    `,
    heading: 'Experience',
    id: 'experience',
  },
  {
    content: `
      <ul>
        <li>Person/Client Centered</li>
        <li>Interpersonal Therapy</li>
        <li>Cognitive Behavioral Therapy (CBT)</li>
        <li>Mindfulness</li>
        <li>Dialectical Behavioral Therapy (DBT)</li>
        <li>Exposure Response Prevention (ERP)</li>
      </ul>
    `,
    heading: 'Modes of Treatment',
    id: 'modes-of-treatment',
  },
]

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
        richText="
          <p>Hi there, I'm Rachael, a licensed clinical social worker (CA # 73823, MI # 6801110065, MA #124554) and founder of Think.Feel.Be Therapy.  I have been providing mental health care over the last 14 years to youth, families, and adults in different settings including: non-profit, community mental health/crisis services, outpatient behavioral health, medical social work, and private practice. Throughout my experience I have gained expertise in supporting people with improving symptoms related to anxiety, trauma, depression, grief, family conflict, ADHD, and LGBTQIA+ related life stressors. I am a  social justice aligned, LGBTQIA+ affirming, and a climate crisis aware therapist. Having received training in mindfulness, DBT, CBT, solutions focused therapy, trauma informed care, the unified protocol and motivational interviewing; I consistently use all the above frameworks in my practice to help you reach your goals.
          <br>
          <br>
          I am passionate about helping people better connect to themselves, friends, family, and their communities.  I believe the foundation to a meaningful therapeutic experience starts with trust and the relationship between a client and therapist. In our sessions, you can expect a blend of empathy, humor, and accountability as we explore a deeper understanding of your thoughts, emotions, and experiences while building skills to better cope with the ebbs and flow of life.
          <br>
          <br>
          I may be a good fit for you if you're experiencing symptoms related to anxiety, depression, ADHD, trauma, relationship issues, parenting stress, or people-pleasing and perfectionist tendencies.
          <br>
          <br>
          If you're ready to embark on a journey toward emotional well-being and greater self understanding,  I'm here to support you every step of the way. Together, let us navigate the complexities of life with curiosity, courage, and compassion. <a href='https://thinkfeelbetherapy.sessionshealth.com/request'>Schedule a consult now!</a>
          <br>
          <br>
          Looking forward to connecting with you!
          </p>"
      />
      <Accordion items={accordionItems} />
      <CTA
        backgroundColor="brandSecondary"
        heading="Get started with Think.Feel.Be. Therapy today"
        links={[
          {
            href: 'https://thinkfeelbetherapy.sessionshealth.com/request',
            label: 'Schedule Now',
          },
        ]}
      />
      <CTA image={{ alt: 'McWay Falls in Big Sur, California', url: '/images/mcway-falls.jpg' }} />
      <CTA
        backgroundColor="brandPrimary"
        heading="Want to learn more?"
        links={[
          {
            href: '/faqs',
            label: 'View FAQs',
          },
        ]}
      />
    </>
  )
}
