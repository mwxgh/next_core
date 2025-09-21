import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import Link from 'next/link'

const Navbar = ({
  mobile = false,
  onLinkClick,
}: {
  mobile?: boolean
  onLinkClick?: () => void
}) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '#services', label: 'Services' },
    { href: '#works', label: 'My works' },
  ]

  return (
    <NavigationMenu
      viewport={false}
      className={`w-full ${mobile ? 'max-w-full' : 'max-w-fit'}`}
    >
      <NavigationMenuList
        className={`${
          mobile
            ? 'flex-col items-start gap-2 w-full' // mobile stacked
            : 'flex-wrap justify-center gap-1 sm:gap-2' // desktop inline
        }`}
      >
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                mobile
                  ? 'w-full justify-start px-4 py-2 text-base'
                  : 'text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2'
              }`}
            >
              <Link href={link.href} onClick={onLinkClick}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
