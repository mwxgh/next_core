import type { Metadata } from 'next'
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
          <p>Header</p>
        </header>
        {children}

        <footer className="bg-red-950 p-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
