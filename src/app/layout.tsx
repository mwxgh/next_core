import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@theme/theme-provider'
import { ThemeToggle } from '@theme/theme-toggle'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nova Mei',
  description: 'Portfolio by Nova Mei',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="dark:bg-yellow-400 bg-red-400 w-full h-24 text-center">
            <p>Header</p>
            <Link href="/">Home</Link>
            <ThemeToggle />
          </header>

          {children}

          <footer className="dark:bg-red-400 bg-yellow-400 w-full h-24 text-center">
            <p>Footer</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
