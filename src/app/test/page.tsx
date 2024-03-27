import { Accordion } from '@/components'

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
    <div>
      <h1>Test Page</h1>
      <Accordion items={items} type="multiple" />
    </div>
  )
}
