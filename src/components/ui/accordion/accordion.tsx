import { cn } from '@/lib'

import { AccordionContent, AccordionItem, AccordionTrigger, AccordionUI } from './accordion-ui'

interface AccordionItemProps {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItemProps[]
  type?: 'single' | 'multiple'
  className?: string
}

export const Accordion = ({ items, type = 'multiple', className }: AccordionProps) => {
  return (
    <AccordionUI type={type} className={cn('w-full', className)}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionUI>
  )
}
