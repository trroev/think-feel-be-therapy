'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib'
import { type NavigationData } from '@/types'

interface MainNavProps extends NavigationData {}

export const MainNav = ({ navigationData }: MainNavProps) => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex">
      <div className="flex space-x-4">
        {navigationData.map((item) => (
          <Link
            key={item.id}
            href={item.data?.slug}
            className={cn(
              pathname === item.data?.slug && 'font-medium underline',
              'text-xl hover:underline'
            )}
          >
            {item.data?.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
