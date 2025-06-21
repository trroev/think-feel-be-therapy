import type { FC } from 'react'

const ContactForm: FC = () => {
  return (
    <section className="container flex justify-center py-12">
      <div className="flex min-h-screen w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdTsbAFsbghh-epnVRoPEzQUBOkCNrwbNMSUoqSr0DpsrqInQ/viewform?embedded=true"
          title="Contact Form"
          className="size-full rounded-lg border border-border bg-brand-primary/30"
        >
          Loading…
        </iframe>
      </div>
    </section>
  )
}

export { ContactForm }
