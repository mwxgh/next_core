'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot password', href: '/forgot-password' },
]

const AuthNav = () => {
  const pathname = usePathname()

  return (
    <nav>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== '/')

        return (
          <Link
            className={isActive ? 'font-bold mr-4' : 'text-blue-400 mr-4'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default AuthNav
