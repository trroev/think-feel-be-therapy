'use client'

import type { FC } from 'react'
import type { Navigation } from '@/types/payload-types'
import { isCmsLinkResolvable } from '@/utils/resolveCmsLink'
import { CmsLink } from '../cms-link'
import { buttonVariants } from '../ui/button'
import { Divider } from '../ui/divider'

type Props = Navigation

const MainNav: FC<Props> = ({ cta, links }) => {
  return (
    <nav className="hidden md:flex">
      <div className="flex items-center space-x-4">
        {links &&
          links.length > 0 &&
          links.map(({ id, link }) => (
            <CmsLink
              activeClassName="font-medium underline"
              className="text-sm hover:underline lg:text-xl"
              key={id}
              link={link}
            />
          ))}
        {isCmsLinkResolvable(cta) && (
          <>
            <Divider orientation="vertical" />
            <CmsLink
              className={buttonVariants({ variant: 'secondary' })}
              link={cta}
            />
          </>
        )}
      </div>
    </nav>
  )
}

export { MainNav }
