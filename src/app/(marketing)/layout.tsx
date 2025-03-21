import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Core',
  description: 'Nextjs 15 Core',
}

const MarketingLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-green-500 p-4">
          <p>Header</p>
        </header>
        {children}

        <footer className="bg-yellow-500 p-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}

export default MarketingLayout
