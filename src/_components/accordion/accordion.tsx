import { type FC } from 'react'

import { RichText } from '../rich-text'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '../ui'

interface AccordionProps {
  items: {
    content: string
    heading: string
    id: string
  }[]
  type?: 'single' | 'multiple'
}

const Accordion: FC<AccordionProps> = ({ items, type }) => {
  return (
    <section className="container py-12">
      <AccordionRoot type={type || 'multiple'} className="w-full">
        {items?.map((item) => (
          <AccordionItem key={item.id} value={`${item.heading}`}>
            <AccordionTrigger>{item.heading}</AccordionTrigger>
            <AccordionContent>
              <RichText content={item.content} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </section>
  )
}

export { Accordion }
