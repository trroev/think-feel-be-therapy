import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import { cn } from '@/lib'

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

export const FAQ = ({ items, type = 'multiple', className }: AccordionProps) => {
  return (
    <Accordion type={type} className={cn('w-full', className)}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
