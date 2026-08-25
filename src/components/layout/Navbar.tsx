import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Brands', to: '/brands' },
  { label: 'About', to: '/about' },
  { label: 'Retailers', to: '/retailers' },
  { label: 'Search', to: '/products' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const getNavClassName = (link: { label: string; to: string }, isActive: boolean) => {
    if (link.label === 'Search' && location.pathname.startsWith('/products')) {
      return ''
    }

    return isActive ? 'is-active' : ''
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="wordmark" to="/" aria-label="Nature's Nurture home">
          • NATURE&apos;S NURTURE
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to + link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => getNavClassName(link, isActive)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-contact">Contact</NavLink>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink
              key={link.to + link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => getNavClassName(link, isActive)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  )
}
