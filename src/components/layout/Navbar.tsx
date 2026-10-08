import { Menu, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Brands', to: '/brands' },
  { label: 'About', to: '/about' },
  { label: 'Retailers', to: '/retailers' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  const getNavClassName = (link: { label: string; to: string }, isActive: boolean) => {
    return isActive ? 'is-active' : ''
  }

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="container site-header__inner">
        <Link className="wordmark" to="/" aria-label="Nature's Nurture home" onClick={() => setMenuOpen(false)}>
          <img
            className="wordmark__logo"
            src={`${import.meta.env.BASE_URL}branding/natures-nurture-logo.png`}
            alt="Nature's Nurture — Nature's Way, Every Day"
            width={2048}
            height={2064}
          />
          <span className="wordmark__text">Nature&apos;s Nurture<span>Rainmaker FMCG</span></span>
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
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-navigation' : undefined}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
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
        </nav>
      )}
    </header>
  )
}
