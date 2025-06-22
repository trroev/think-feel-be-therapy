'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { cn } from '@/lib'
import type { Navigation } from '@/types'

import { Button, Divider } from '../ui'

interface MainNavProps {
  navigation: Navigation
}

const MainNav: FC<MainNavProps> = ({ navigation }) => {
  const pathname = usePathname()
  const navItems = navigation.navItems

  return (
    <nav className="hidden md:flex">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => {
          const slug = item.link

          return (
            <Link
              className={cn(
                pathname === `/${slug}` && 'font-medium underline',
                'hover:underline',
                'text-sm lg:text-xl'
              )}
              href={slug}
              key={`${slug}-${item.label}`}
            >
              {item.label}
            </Link>
          )
        })}
        <Divider orientation="vertical" />
        <Button asChild variant="secondary">
          <Link href="https://thinkfeelbetherapy.sessionshealth.com/">
            Schedule a Session
          </Link>
        </Button>
      </div>
    </nav>
  )
}

export { MainNav }
