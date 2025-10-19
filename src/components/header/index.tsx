'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import { ThemeToggle } from '@theme/theme-toggle'
import Image from 'next/image'
import { assets } from 'assets'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-background/60 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/40'
          : 'bg-transparent py-6',
      )}
    >
      <div
        className={cn(
          'mx-auto w-full px-6 transition-all duration-300 ease-out',
          isScrolled ? 'max-w-4xl' : 'max-w-6xl',
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between gap-4 transition-all duration-300 ease-out',
            isScrolled
              ? 'rounded-full border border-border/30 bg-card/90 px-6 py-3 shadow-md supports-[backdrop-filter]:backdrop-blur-sm'
              : 'px-0 py-0',
          )}
        >
          {/* Logo */}
          <div
            className={cn(
              'flex w-auto items-center transition-[height] duration-300 ease-out',
              isScrolled ? 'h-8' : 'h-10',
            )}
          >
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={assets.logo}
                alt="Logo"
                className={cn(
                  'w-auto transition-all duration-300 ease-out',
                  isScrolled ? 'h-8' : 'h-10',
                )}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navbar + ThemeToggle */}
          <div className="hidden md:flex flex-1 justify-center">
            <Navbar />
          </div>

          {/* ThemeToggle (right side on desktop) */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden border-t bg-background/90 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-3">
          <Navbar mobile onLinkClick={() => setMenuOpen(false)} />
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
