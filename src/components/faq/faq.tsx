import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import { cn } from '@/lib'

interface AccordionItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

interface AccordionProps {
  items: AccordionItemProps[]
  type?: 'single' | 'multiple'
  className?: string
}

export const FAQ = ({ items, type = 'multiple', className }: AccordionProps) => {
  return (
    <Accordion type={type} className={cn('w-full', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index + 3.3} value={`${item.question}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
