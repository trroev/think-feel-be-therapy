import { ContactForm, FAQ, LGBTQAffirming, MentalHealthMatch, PsychologyToday } from '@/components'

const items = [
  {
    question: 'question 1',
    answer: 'answer 1',
  },
  {
    question: 'question 2',
    answer: 'answer 2',
  },
  {
    question: 'question 3',
    answer: 'answer 3',
  },
  {
    question: 'question 4',
    answer: 'answer 4',
  },
]

export default function TestPage() {
  return (
    <div className="container relative flex h-full flex-col items-center justify-center gap-8">
      <h1>Test Page</h1>
      <ContactForm />
      <FAQ items={items} type="multiple" />
      <div className="flex items-center gap-10">
        <LGBTQAffirming className="h-20" />
        <MentalHealthMatch className="h-20" />
        <PsychologyToday className="mr-[-45px] h-20" />
      </div>
    </div>
  )
}
