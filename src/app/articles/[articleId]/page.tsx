import Link from 'next/link'
import { use } from 'react'

const ArticleDetail = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ lang: 'en' | 'es' | 'fr' }>
}) => {
  const { articleId } = use(params)
  const { lang = 'en' } = use(searchParams)
  return (
    <div>
      <h1>New article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>France</Link>
      </div>
    </div>
  )
}

export default ArticleDetail
