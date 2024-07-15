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

interface PrivacyPolicyProps extends Pick<Footer, 'privacyPolicy'> {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ privacyPolicy }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">{privacyPolicy?.heading}</button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{privacyPolicy?.heading}</DialogTitle>
          <DialogDescription>{privacyPolicy?.subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        {privacyPolicy?.privacyPolicyContent_html && (
          <RichText content={privacyPolicy.privacyPolicyContent_html} />
        )}
      </DialogContent>
    </Dialog>
  )
}

export { PrivacyPolicy }
