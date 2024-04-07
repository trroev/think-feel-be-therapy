import { FAQ, LGBTQAffirming, MentalHealthMatch, PsychologyToday } from '@/components'

const items = [
  {
    value: '1',
    trigger: 'Trigger 1',
    content: 'Content 1',
  },
  {
    value: '2',
    trigger: 'Trigger 2',
    content: 'Content 2',
  },
  {
    value: '3',
    trigger: 'Trigger 3',
    content: 'Content 3',
  },
  {
    value: '4',
    trigger: 'Trigger 4',
    content: 'Content 4',
  },
]

export default function TestPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center gap-8">
      <h1>Test Page</h1>
      <FAQ items={items} type="multiple" />
      <div className="flex items-center gap-10">
        <LGBTQAffirming className="h-20" />
        <MentalHealthMatch className="h-20" />
        <PsychologyToday className="mr-[-45px] h-20" />
      </div>
    </div>
  )
}
