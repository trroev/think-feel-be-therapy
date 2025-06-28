import type { FC } from 'react'
import type { ContactFormBlock } from '@/types/payload-types'

type Props = ContactFormBlock

const ContactForm: FC<Props> = () => {
  return (
    <section className="container flex justify-center py-12">
      <div className="flex min-h-screen w-full">
        <iframe
          className="size-full rounded-lg border border-border bg-brand-primary/30"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdTsbAFsbghh-epnVRoPEzQUBOkCNrwbNMSUoqSr0DpsrqInQ/viewform?embedded=true"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  )
}

export { ContactForm }
