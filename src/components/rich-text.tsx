import { Slot } from '@radix-ui/react-slot'
import parse from 'html-react-parser'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/utils/cn'

type RichTextProps = Omit<ComponentPropsWithoutRef<'div'>, 'content'> & {
  asChild?: boolean
  content?: string | null
  inline?: boolean
}

// void/embed elements are visible content despite contributing no text
const MEDIA_TAG = /<(img|hr|iframe|video|audio|embed|object|svg)\b/i

const isRichTextEmpty = (content?: string | null): boolean => {
  if (!content) {
    return true
  }
  if (MEDIA_TAG.test(content)) {
    return false
  }
  return (
    content
      .replace(/<[^>]*>/g, '')
      .replaceAll('&nbsp;', '')
      .trim() === ''
  )
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
    if (!content) {
      return null
    }

    const htmlString = resolveContent(content, inline)

    return (
      <Comp className={cn('cms-html', className)} {...props} ref={ref}>
        {parse(htmlString, { trim: true })}
      </Comp>
    )
  }
)
RichText.displayName = 'RichText'

export { isRichTextEmpty, RichText, type RichTextProps }
