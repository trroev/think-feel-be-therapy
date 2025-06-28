'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { cn } from '@/lib'
import type { Navigation } from '@/types/payload-types'
import { getLink } from '@/utils/getLink'
import { Button, Divider } from '../ui'

type Props = Navigation

const MainNav: FC<Props> = ({ cta, links }) => {
  const pathname = usePathname()

  const processedCta = getLink(cta)

  return (
    <nav className="hidden md:flex">
      <div className="flex items-center space-x-4">
        {links &&
          links.length > 0 &&
          links.map(({ id, link }) => {
            const processedLink = getLink(link)

            if (!processedLink) {
              return null
            }
            const { href, label, newTab } = processedLink

            return (
              <Link
                className={cn(
                  pathname === href && 'font-medium underline',
                  'hover:underline',
                  'text-sm lg:text-xl'
                )}
                href={href}
                key={id}
                target={newTab ? '_blank' : '_self'}
              >
                {label}
              </Link>
            )
          })}
        {processedCta && (
          <>
            <Divider orientation="vertical" />
            <Button asChild variant="secondary">
              <Link
                href={processedCta.href}
                target={processedCta.newTab ? '_blank' : '_self'}
              >
                {processedCta.label}
              </Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  )
}

export { MainNav }
