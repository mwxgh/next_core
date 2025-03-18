import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Core',
  description: 'Nextjs 15 Core',
}

const ProductDetailLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        {children}

        <h2>Layout feature layout</h2>
      </body>
    </html>
  )
}

export default ProductDetailLayout
