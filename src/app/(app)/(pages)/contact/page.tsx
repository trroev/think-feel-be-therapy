import { ContactForm } from '@/components/contact-form'
import { PageHeader } from '@/components/page-header'

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
