import { ArrowRight, Globe2, Handshake, MapPinned, Phone, Store, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactDetails } from '../data/contact'

const benefits = [
  'Dedicated product education and category support',
  'Strong brand visibility across wellness and family categories',
  'Flexible retailer partnerships and regular training',
  'Reliable assortment for everyday health essentials',
]

const supportIcons = [Handshake, Store, Truck, Globe2]

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
      <section className="retail-hero">
        <div className="container retail-hero__grid">
          <div className="retail-hero__copy">
            <p className="eyebrow eyebrow--dark">For retailers</p>
            <h1>Growing everyday wellness retail partnerships.</h1>
            <span className="about-hero__divider" aria-hidden="true" />
            <p>
              We build practical retail relationships that help independent stores, pharmacy groups and wellness channels grow with confidence.
            </p>
            <div className="cta-row">
              <Link className="button button--primary" to="/contact">Become a retail partner <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="retail-hero__panel">
            <div className="retail-hero__stats">
              <div className="retail-hero__stat">
                <span>6+</span>
                <strong>Markets</strong>
              </div>
              <div className="retail-hero__stat">
                <span>100+</span>
                <strong>Retail doors</strong>
              </div>
              <div className="retail-hero__stat">
                <span>Multi</span>
                <strong>Channel</strong>
              </div>
              <div className="retail-hero__stat">
                <span>Pan</span>
                <strong>African reach</strong>
              </div>
            </div>
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
            {benefits.map((item, index) => {
              const Icon = supportIcons[index]
              return (
                <li key={item}>
                  <span className="check-list__icon" aria-hidden="true"><Icon size={16} /></span>
                  {item}
                </li>
              )
            })}
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
              <MapPinned size={16} />
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
    </main>
  )
}
