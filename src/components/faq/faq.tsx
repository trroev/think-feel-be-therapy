import { cn } from '@/lib'
import { type RegisteredComponent } from '@builder.io/sdk-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui'

interface AccordionItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

interface AccordionProps {
  items: AccordionItemProps[]
  type?: 'single' | 'multiple'
  className?: string
}

const FAQ = ({ items, type = 'multiple', className }: AccordionProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-xl">
        <Accordion type={type} className={cn('w-full', className)}>
          {items.map((item, index) => (
            <AccordionItem key={index + 3.3} value={`${item.question}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

const FAQRegistration: RegisteredComponent = {
  component: FAQ,
  name: 'FAQ Accordion',
  noWrap: true,
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        {
          name: 'question',
          type: 'longText',
          required: true,
        },
        {
          name: 'answer',
          type: 'longText',
          required: true,
        },
      ],
    },
    {
      name: 'type',
      type: 'string',
      defaultValue: 'multiple',
      enum: ['single', 'multiple'],
    },
  ],
}

export { FAQ, FAQRegistration }
