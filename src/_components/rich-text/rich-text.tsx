import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import parse from 'html-react-parser'

import { cn } from '@/_lib'

interface RichTextProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
  content?: string
  inline?: boolean
}

const resolveContent = (value: string, inline: boolean): string => {
  if (!inline) {
    return value.replaceAll('<p></p>', '<div></div>')
  }

  const inlineHtmlString = value.replace(/^<p>|<\/p>$/gi, '')
  return inlineHtmlString.replaceAll('<p></p>', '<div></div>')
}

const RichText = forwardRef<HTMLDivElement, RichTextProps>(
  ({ asChild = false, className, content, inline = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    if (!content) return null

    const htmlString = resolveContent(content, inline)

    return (
      <Comp className={cn('cms-html', className)} {...props} ref={ref}>
        {parse(htmlString, { trim: true })}
      </Comp>
    )
  }
)
RichText.displayName = 'RichText'

export { RichText, type RichTextProps }
