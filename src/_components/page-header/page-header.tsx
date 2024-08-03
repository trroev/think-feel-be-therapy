import { type FC } from 'react'
import { type PageHeaderFieldType } from '@/payload-types'

import { cn } from '@/_lib'
import { renderBackgroundColor } from '@/_lib/helpers'

import { Divider } from '../ui'

interface PageHeaderProps extends PageHeaderFieldType {}

const PageHeader: FC<PageHeaderProps> = ({ backgroundColor, heading, subheading }) => {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center py-4 md:py-6 lg:py-8',
        renderBackgroundColor(backgroundColor)
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
