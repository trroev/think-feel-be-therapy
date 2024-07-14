'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Navigation, type Page } from '@/payload-types'

import { cn } from '@/_lib'

import { Button, Divider } from '../ui'

interface MainNavProps extends Pick<Navigation, 'navItems'> {}

const MainNav: FC<MainNavProps> = ({ navItems }) => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => {
          const slug = (item.link as Page).slug

          return (
            <Link
              key={item.id}
              href={slug === 'home' ? '/' : `/${slug}`}
              className={cn(
                pathname === `/${slug}` && 'font-medium underline',
                'hover:underline',
                'text-sm lg:text-xl'
              )}
            >
              {item.label}
            </Link>
          )
        })}
        <Divider orientation="vertical" />
        <Button asChild variant="secondary">
          <Link href="https://thinkfeelbetherapy.sessionshealth.com/">Schedule a Session</Link>
        </Button>
      </div>
    </nav>
  )
}

export { MainNav }
