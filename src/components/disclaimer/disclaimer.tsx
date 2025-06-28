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

type DisclaimerProps = {
  heading: string
  subheading?: string
  disclaimer?: string
}

const Disclaimer: FC<DisclaimerProps> = ({
  heading,
  subheading,
  disclaimer,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline" type="button">
          Disclaimer
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        {disclaimer && <RichText content={disclaimer} />}
      </DialogContent>
    </Dialog>
  )
}

export { Disclaimer }
