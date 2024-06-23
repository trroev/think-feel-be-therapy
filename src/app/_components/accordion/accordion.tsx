import { FC } from 'react'
import { AccordionRoot, AccordionContent, AccordionItem, AccordionTrigger } from '../ui'
import RichText from '../RichText'
import { AccordionBlockType } from '@/payload/payload-types'

interface AccordionProps extends AccordionBlockType {}

const Accordion: FC<AccordionProps> = ({ items, type }) => {
  return (
    <section className="container py-12">
      <AccordionRoot type={type || 'multiple'} className="w-full">
        {items?.map(item => (
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
