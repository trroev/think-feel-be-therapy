import type { FC } from 'react'

import { cn } from '@/lib'

import { Divider } from '../ui'

interface PageHeaderProps {
  backgroundColor?:
    | (
        | 'brandPrimary'
        | 'brandSecondary'
        | 'brandTertiary'
        | 'brandQuaternary'
        | 'transparent'
      )
    | null
  heading?: string | null
  subheading?: string | null
}

const PageHeader: FC<PageHeaderProps> = ({
  backgroundColor,
  heading,
  subheading,
}) => {
  const bgColor = backgroundColor && `bg-${backgroundColor}`

  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center py-4 md:py-6 lg:py-8',
        bgColor
      )}
    >
      <div className="container">
        <h1 className="">{heading}</h1>
        {subheading && (
          <>
            <Divider className="my-4" />
            <h6 className="">{subheading}</h6>
          </>
        )}
      </div>
    </section>
  )
}

export { PageHeader }
