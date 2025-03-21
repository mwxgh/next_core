import { Metadata } from 'next'

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId
  const title = await new Promise((resole) => {
    setTimeout(() => {
      resole(`${id} active`)
    }, 100)
  })

  return {
    title: `Product ${title}`,
  }
}

const ProductDetail = async ({ params }: Props) => {
  const productId = (await params).productId
  return <div>ProductDetail {productId}</div>
}

export default ProductDetail
