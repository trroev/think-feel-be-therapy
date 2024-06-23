import { cn } from '@/lib'
import type { Page, PageHeaderFieldType } from '@/payload/payload-types'
import { FC } from 'react'
import { Divider } from '../ui'

type PageHeaderType = PageHeaderFieldType

interface PageHeaderProps extends PageHeaderType {}

const PageHeader: FC<PageHeaderProps> = ({ backgroundColor, heading, subheading }) => {
  const bgColor = `bg-${backgroundColor}`

  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center py-4 md:py-6 lg:py-8',
        bgColor,
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
