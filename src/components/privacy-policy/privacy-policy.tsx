import type { FC } from 'react'
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

type PrivacyPolicyProps = {
  heading: string
  subheading?: string
  privacyPolicy?: string
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({
  heading,
  subheading,
  privacyPolicy,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline" type="button">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        {privacyPolicy && <RichText content={privacyPolicy} />}
      </DialogContent>
    </Dialog>
  )
}

export { PrivacyPolicy }
