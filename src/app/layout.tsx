import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Home, User } from 'lucide-react'
import { FloatingNavbar } from '@/components/ui/navbar/floating-navbar'
import { HoverDropdownNavbar } from '@/components/ui/navbar/dropdown-navbar'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio website',
}

const navItems = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="h4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: 'User',
    href: '/user',
    icon: <User className="h4 w-4 text-neutral-500 dark:text-white" />,
  },
]

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          geistMono.variable,
        )}
      >
        <HoverDropdownNavbar />
        {children}
        <FloatingNavbar items={navItems} />
      </body>
    </html>
  )
}

export default RootLayout
