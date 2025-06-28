import type { FC } from 'react'
import { RichText } from '@/components/rich-text'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { AccordionBlock } from '@/types/payload-types'

type Props = AccordionBlock

const Accordion: FC<Props> = ({ items }) => {
  return (
    <section className="container py-12">
      <AccordionRoot className="md:px-12" type="multiple">
        {items?.map((item) => (
          <AccordionItem key={item.id} value={item.heading}>
            <AccordionTrigger>{item.heading}</AccordionTrigger>
            {item.contentHTML && (
              <AccordionContent>
                <RichText content={item.contentHTML} />
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </AccordionRoot>
    </section>
  )
}

export { Accordion }
