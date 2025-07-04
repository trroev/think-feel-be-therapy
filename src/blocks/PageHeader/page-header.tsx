import type { FC } from 'react'
import { Divider } from '@/components/ui/divider'
import { cn } from '@/lib'
import type { PageHeaderBlock } from '@/types/payload-types'
import { mapBackgroundColor } from '@/utils/mapBackgroundColor'

type PageHeaderProps = PageHeaderBlock

const PageHeader: FC<PageHeaderProps> = ({
  backgroundColor,
  heading,
  subheading,
}) => {
  const bgColor = mapBackgroundColor(backgroundColor)

  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center py-4 md:py-6 lg:py-8',
        bgColor
      )}
    >
      <div className="container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">{heading}</h1>
        {subheading && (
          <>
            <Divider className="my-4" />
            <span className="font-semibold text-base tracking-tight md:text-lg lg:text-xl">
              {subheading}
            </span>
          </>
        )}
      </div>
    </section>
  )
}

export { PageHeader }
