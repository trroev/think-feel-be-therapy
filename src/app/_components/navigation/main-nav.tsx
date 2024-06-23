'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navigation, Page } from '@/payload/payload-types'
import { cn } from '@/lib'
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
        {navItems.map(item => {
          const slug = (item.link as Page).slug as string

          return (
            <Link
              key={item.id}
              href={`/${slug}`}
              className={cn(
                pathname === `/${slug}` && 'font-medium underline',
                'hover:underline',
                'lg:text-xl',
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
