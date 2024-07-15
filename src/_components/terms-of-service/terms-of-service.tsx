import { type FC } from 'react'
import { type Footer } from '@/payload-types'

import { RichText } from '../rich-text'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Divider,
} from '../ui'

interface TermsOfServiceProps extends Pick<Footer, 'termsOfService'> {}

const TermsOfService: FC<TermsOfServiceProps> = ({ termsOfService }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">{termsOfService?.heading}</button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{termsOfService?.heading}</DialogTitle>
          <DialogDescription>{termsOfService?.subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        {termsOfService?.termsOfServiceContent_html && (
          <RichText content={termsOfService.termsOfServiceContent_html} />
        )}
      </DialogContent>
    </Dialog>
  )
}

export { TermsOfService }
