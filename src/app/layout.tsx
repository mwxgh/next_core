import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/theme-provider'
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
  description: 'Portfolio by Nova Mei',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-red-400 w-full h-24 text-center">
          <p>Header</p>
          <ThemeToggle />
        </header>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <footer className="bg-yellow-400 w-full h-24 text-center">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
