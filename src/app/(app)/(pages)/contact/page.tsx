import { ContactForm } from '@/_components/contact-form'
import { PageHeader } from '@/_components/page-header'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        backgroundColor="brandSecondary"
        heading="Contact"
        subheading="Get in touch with Think.Feel.Be. Therapy"
      />
      <ContactForm />
    </>
  )
}
