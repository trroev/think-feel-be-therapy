'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type Navigation } from '@/_types'
import { cn } from '@/_lib'

import { Button, Divider } from '../ui'

interface MainNavProps {
  navigation: Navigation
}

const MainNav: FC<MainNavProps> = ({ navigation }) => {
  const pathname = usePathname()
  const navItems = navigation.navItems
  console.log('nav items:', navItems)

  return (
    <nav className="hidden md:flex">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => {
          const slug = item.link

          return (
            <Link
              key={`${slug}-${item.label}`}
              href={slug}
              className={cn(
                pathname === `/${slug}` && 'font-medium underline',
                'hover:underline',
                'lg:text-xl'
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
