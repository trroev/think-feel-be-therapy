'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib'
import { type NavigationData } from '@/types'

interface MainNavProps extends NavigationData {}

export const MainNav = ({ navigationData }: MainNavProps) => {
  const pathname = usePathname()
  const navLinks = navigationData.data.links

  return (
    <nav className="hidden md:flex">
      <div className="flex space-x-4">
        {navLinks.map((link, index) => (
          <Link
            key={index + 3.3}
            href={link.link}
            className={cn(
              pathname === link.link && 'font-medium underline',
              'text-xl hover:underline'
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
