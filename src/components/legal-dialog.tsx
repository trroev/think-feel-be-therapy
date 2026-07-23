import type { FC } from 'react'
import { RichText } from './rich-text'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Divider } from './ui/divider'

type LegalDialogProps = {
  triggerLabel: string
  heading: string
  subheading?: string
  content?: string
}

const LegalDialog: FC<LegalDialogProps> = ({
  triggerLabel,
  heading,
  subheading,
  content,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline" type="button">
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        {content && <RichText content={content} />}
      </DialogContent>
    </Dialog>
  )
}

export { LegalDialog }
