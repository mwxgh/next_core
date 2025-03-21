import Link from 'next/link'

const navLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Profile', href: '/profile' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Articles', href: '/articles' },
  { name: 'Read in English', href: '/articles/breaking-news-123?lang=en' },
  { name: 'Read in French', href: '/articles/breaking-news-123?lang=fr' },
]

const Home = () => (
  <div>
    <h1>Welcome home!</h1>
    <ul>
      {navLinks.map(({ name, href }) => (
        <li key={href}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Home
