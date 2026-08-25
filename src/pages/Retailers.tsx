import { ArrowRight, Check, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactDetails } from '../data/contact'

const benefits = [
  'Dedicated product education and category support',
  'Strong brand visibility across wellness and family categories',
  'Flexible retailer partnerships and regular training',
  'Reliable assortment for everyday health essentials',
]

const locations = [
  {
    name: 'National head office',
    address: contactDetails.address,
    phone: contactDetails.phone,
  },
  {
    name: 'Retail support',
    address: contactDetails.address,
    phone: contactDetails.phone,
  },
  {
    name: 'Wholesale enquiries',
    address: contactDetails.address,
    phone: contactDetails.phone,
  },
]

export function RetailersPage() {
  return (
    <main className="page-shell page-shell--light">
      <section className="page-header">
        <div className="container page-header__inner page-header__inner--stacked">
          <div>
            <p className="eyebrow eyebrow--dark">For retailers</p>
            <h1>Growing everyday wellness retail partnerships.</h1>
          </div>
          <div className="page-header__copy">
            <p>We build practical retail relationships that help independent stores, pharmacy groups and wellness channels grow with confidence.</p>
          </div>
        </div>
      </section>

      <section className="container partner-layout">
        <div className="partner-copy">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--dark">Why partner with us</p>
            <h2>Built to support trusted demand and real shelf momentum.</h2>
          </div>
          <ul className="check-list">
            {benefits.map((item) => (
              <li key={item}><Check size={16} />{item}</li>
            ))}
          </ul>
        </div>
        <div className="partner-panel">
          <h3>Retail support model</h3>
          <div className="mini-stat">
            <span>Product education</span>
            <strong>Retail-ready tools</strong>
          </div>
          <div className="mini-stat">
            <span>Distribution support</span>
            <strong>National reach</strong>
          </div>
          <div className="mini-stat">
            <span>Consumer trust</span>
            <strong>Evidence-led brands</strong>
          </div>
        </div>
      </section>

      <section className="container location-shell">
        <div className="section-header section-header--spaced">
          <div>
            <p className="eyebrow eyebrow--dark">Regional presence</p>
            <h2>Our growth footprint</h2>
          </div>
        </div>
        <div className="location-grid">
          {locations.map((location) => (
            <article key={location.name} className="location-card">
              <MapPin size={16} />
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <div className="location-card__contact">
                <Phone size={15} />
                <span>{location.phone}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-panel cta-panel--light">
        <div>
          <p className="eyebrow eyebrow--dark">Retail opportunities</p>
          <h3>Let&apos;s build stronger, more resilient product ranges together.</h3>
        </div>
        <Link className="button button--primary" to="/contact">Become a retail partner <ArrowRight size={16} /></Link>
      </section>
    </main>
  )
}
