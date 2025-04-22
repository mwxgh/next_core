import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { HeaderNavbar } from '@/components/header-navbar'
import { ThemeToggle } from '@/components/theme-toggle'

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
  description: 'Nova Mei Portfolio',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
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
            <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white text-black dark:bg-black dark:text-white">
              <HeaderNavbar />
              <ThemeToggle />
            </header>

            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

export default RootLayout
