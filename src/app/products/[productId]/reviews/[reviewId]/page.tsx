const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>
}) => {
  const { productId, reviewId } = await params
  return (
    <div>
      ReviewDetail {productId} {reviewId}
    </div>
  )
}

export default ReviewDetail
