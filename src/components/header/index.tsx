'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import { ThemeToggle } from '@theme/theme-toggle'
import Image from 'next/image'
import { assets } from 'assets'
import Link from 'next/link'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="h-10 w-auto flex items-center">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={assets.logo}
              alt="Logo"
              className="h-10 w-auto"
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden border-t bg-background overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">
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
