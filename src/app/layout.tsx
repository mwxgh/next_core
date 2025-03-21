import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Core',
  description: 'Nextjs 15 Core',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 p-4">
          <Link href={'/'}>
            <p>Header</p>
          </Link>
        </header>
        {children}

        <footer className="bg-red-400 p-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
