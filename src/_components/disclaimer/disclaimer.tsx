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

interface DisclaimerProps extends Pick<Footer, 'disclaimer'> {}

const Disclaimer: FC<DisclaimerProps> = ({ disclaimer }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">{disclaimer?.heading}</button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{disclaimer?.heading}</DialogTitle>
          <DialogDescription>{disclaimer?.subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        {disclaimer?.disclaimerContent_html && (
          <RichText content={disclaimer.disclaimerContent_html} />
        )}
      </DialogContent>
    </Dialog>
  )
}

export { Disclaimer }
