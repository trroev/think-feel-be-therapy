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
    </>
  )
}
