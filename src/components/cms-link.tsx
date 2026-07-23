'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC, ReactNode } from 'react'
import type { Link } from '@/types/payload-types'
import { cn } from '@/utils/cn'
import { resolveCmsLink } from '@/utils/resolveCmsLink'

type CmsLinkProps = {
  link: Link | null | undefined
  activeClassName?: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const CmsLink: FC<CmsLinkProps> = ({
  activeClassName,
  children,
  className,
  link,
  onClick,
}) => {
  const pathname = usePathname()
  const resolved = resolveCmsLink(link)

  if (!resolved) {
    return null
  }
  const { href, label, newTab } = resolved

  return (
    <NextLink
      className={
        cn(pathname === href && activeClassName, className) || undefined
      }
      href={href}
      onClick={onClick}
      rel={newTab ? 'noopener noreferrer' : undefined}
      target={newTab ? '_blank' : '_self'}
    >
      {children ?? label}
    </NextLink>
  )
}

export { CmsLink, type CmsLinkProps }
