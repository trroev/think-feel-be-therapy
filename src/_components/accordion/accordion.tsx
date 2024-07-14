import { type FC } from 'react'
import { type AccordionBlockType } from '@/payload-types'

import { RichText } from '../rich-text'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '../ui'

interface AccordionProps extends AccordionBlockType {
  asChild?: boolean
}

const Accordion: FC<AccordionProps> = ({ asChild, items, type = 'multiple' }) => {
  return asChild ? (
    <AccordionRoot type={type || 'multiple'} className="w-full">
      {items?.map((item) => (
        <AccordionItem key={item.id} value={`${item.heading}`}>
          <AccordionTrigger>{item.heading}</AccordionTrigger>
          <AccordionContent>
            {item.content_html && <RichText content={item.content_html} />}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  ) : (
    <section className="container py-12">
      <AccordionRoot type={type || 'multiple'} className="w-full">
        {items?.map((item) => (
          <AccordionItem key={item.id} value={`${item.heading}`}>
            <AccordionTrigger>{item.heading}</AccordionTrigger>
            <AccordionContent>
              {item.content_html && <RichText content={item.content_html} />}
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </section>
  )
}

export { Accordion, type AccordionProps }
