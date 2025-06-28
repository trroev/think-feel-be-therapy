import type { FC, ReactNode } from 'react'
import { match } from 'ts-pattern'
import { Accordion } from '@/blocks/Accordion/accordion'
import { CallToAction } from '@/blocks/CallToAction/call-to-action'
import { ContactForm } from '@/blocks/ContactForm/contact-form'
import { Hero } from '@/blocks/Hero/hero'
import { ImageWithText } from '@/blocks/ImageWithText/image-with-text'
import { PageHeader } from '@/blocks/PageHeader/page-header'
import { TestimonialsSlider } from '@/blocks/TestimonialsSlider/testimonials-slider'
import type { Page } from '@/types/payload-types'

type Props = {
  blocks: Page['blocks']
}

const RenderBlocks: FC<Props> = ({ blocks }) => {
  return blocks.map((block) => {
    return match(block)
      .returnType<ReactNode>()
      .with({ blockType: 'accordion' }, (props) => (
        <Accordion {...props} key={props.id} />
      ))
      .with({ blockType: 'cta' }, (props) => (
        <CallToAction {...props} key={props.id} />
      ))
      .with({ blockType: 'contact-form' }, (props) => (
        <ContactForm {...props} key={props.id} />
      ))
      .with({ blockType: 'hero' }, (props) => (
        <Hero {...props} key={props.id} />
      ))
      .with({ blockType: 'image-with-text' }, (props) => (
        <ImageWithText {...props} key={props.id} />
      ))
      .with({ blockType: 'page-header' }, (props) => (
        <PageHeader {...props} key={props.id} />
      ))
      .with({ blockType: 'testimonials-slider' }, (props) => (
        <TestimonialsSlider {...props} key={props.id} />
      ))
      .exhaustive()
  })
}

export { RenderBlocks }
