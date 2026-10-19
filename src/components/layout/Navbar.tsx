import { Menu, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Quality Standards', mobileLabel: 'Certifications & Quality Standards', to: '/certifications' },
  { label: 'About', to: '/about' },
  { label: 'Retailers', to: '/retailers' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  const getNavClassName = (isActive: boolean) => {
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
              className={({ isActive }) => getNavClassName(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
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
              className={({ isActive }) => getNavClassName(isActive)}
              onClick={() => setMenuOpen(false)}
            >
              {link.mobileLabel ?? link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
