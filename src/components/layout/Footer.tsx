import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const productCategories = ['Sublingual sprays', 'Cereal & meal replacement', 'Infant formula', 'Zingo', 'Mosquito repellent', 'Natural ingredients']

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-branding">
          <p className="wordmark wordmark--footer">• NATURE&apos;S NURTURE</p>
          <p className="footer-copy">
            Nature&apos;s Nurture is a science-led wellness platform for family health, nutrition and trusted everyday essentials.
          </p>
          <div className="trust-row">
            <span>SAHPRA aligned</span>
            <span>GMP certified</span>
            <span>Pan-Africa</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product categories</h4>
          <ul>
            {productCategories.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company &amp; trade</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/retailers">Retailers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-column--contact">
          <h4>Head office contact</h4>
          <ul>
            <li><MapPin size={15} /> 6 Grind Road, Durban, South Africa</li>
            <li><Phone size={15} /> +27 31 572 3943</li>
            <li><Mail size={15} /> hello@rainmakermfgc.co.za</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="footer-bottom__left">
          <span>© 2025 Nature&apos;s Nurture</span>
          <Link to="/about">Compliance</Link>
          <Link to="/contact">Privacy</Link>
        </div>
        <Link to="/contact" className="inline-link inline-link--light">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </div>
    </footer>
  )
}
