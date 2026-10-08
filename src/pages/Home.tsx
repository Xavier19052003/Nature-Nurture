import { ArrowUpRight, FlaskConical, Globe2, Home as HomeIcon, Leaf, ShieldCheck, Store, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { ProductCollection } from '../components/ui/ProductCollection'
import { featuredProducts } from '../data/products'

const philosophy = [
  { title: 'Wellness', icon: Leaf },
  { title: 'Nutrition', icon: FlaskConical },
  { title: 'Family', icon: Users2 },
  { title: 'Everyday living', icon: HomeIcon },
]

const reasons = [
  { title: 'Science-led mucosal delivery', text: 'Designed for efficient nutrient absorption and quality routines.', icon: FlaskConical },
  { title: 'Quality-focused manufacturing', text: 'Traceable, standardised production for trusted daily health support.', icon: ShieldCheck },
  { title: 'Formulated for modern Africa', text: 'Balance, accessibility and practicality across everyday lifestyles.', icon: Globe2 },
  { title: 'Retail-ready multi-category FMCG', text: 'Structured for the realities of African retail and commercial scale.', icon: Store },
]

const retailStats = [
  { label: 'Portfolio categories', value: '6' },
  { label: 'Business model', value: 'B2B' },
  { label: 'Distribution channels', value: 'Multi' },
  { label: 'Markets served', value: 'Africa' },
]

const compliance = [
  { label: 'SAHPRA aligned', icon: ShieldCheck },
  { label: 'GMP-compliant', icon: ShieldCheck },
  { label: 'HACCP', icon: ShieldCheck },
  { label: 'ISO-aligned', icon: ShieldCheck },
  { label: 'Codex-compliant', icon: ShieldCheck },
]

export function Home() {
  return (
    <>
      <main>
        <section className="hero-shell">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Nature&apos;s Nurture • Rainmaker FMCG</p>
              <h1 className="display-heading">
                Better<br />
                choices.<br />
                <span>Naturally.</span>
              </h1>
              <p className="lead">
                Nature&apos;s Nurture crafts evidence-based wellness solutions to support everyday confidence, family health and modern nutrition across Africa.
              </p>
              <div className="cta-row">
                <Link className="button button--primary" to="/products">Explore products</Link>
                <Link className="button button--secondary" to="/retailers">For retailers &amp; wholesalers</Link>
              </div>
              <div className="hero-meta">
                <span>Natural ingredients</span>
                <span>Evidence-led</span>
                <span>Family wellness</span>
              </div>
            </div>

            <ProductCollection />
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="section-header section-header--spaced">
              <div>
                <p className="eyebrow eyebrow--dark">Selected from our portfolio</p>
                <h2>Explore our portfolio</h2>
              </div>
              <Link to="/products" className="inline-link inline-link--dark">Explore all products <ArrowUpRight size={16} /></Link>
            </div>

            <div className="featured-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark-cta">
          <div className="container philosophy-grid">
            <div className="section-heading section-heading--left">
              <p className="eyebrow eyebrow--alt">Our philosophy</p>
              <h2>
                Nurturing better choices<br />
                for everyday life across<br />
                Africa.
              </h2>
            </div>
            <div className="section-copy narrative-copy">
              <p>
                Premium nutrition should feel practical. Our products combine natural ingredients, functional formulation and everyday relevance for real families across Africa.
              </p>
            </div>
            <div className="philosophy-list">
              {philosophy.map((item) => (
                <div key={item.title} className="philosophy-item philosophy-item--on-dark">
                  <span className="philosophy-item__icon" aria-hidden="true"><item.icon size={28} /></span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark-cta">
          <div className="container narrative-shell narrative-shell--split">
            <div className="narrative-heading">
              <p className="eyebrow eyebrow--alt">Brand narrative</p>
              <h2>
                Nurturing life through<br />
                science, nature &amp;<br />
                honest craftsmanship.
              </h2>
            </div>
            <div className="narrative-copy narrative-copy--compact">
              <p>
                Nature&apos;s Nurture brings together science-backed nutrition, natural ingredients and thoughtful product development for everyday family wellness.
              </p>
              <div className="cta-row cta-row--stacked">
                <Link className="button button--inverted" to="/about">Read our story</Link>
                <Link className="button button--ghost" to="/products">See all nutritional information</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container reason-grid">
            <div className="section-heading section-heading--left">
              <p className="eyebrow eyebrow--dark">Why Nature&apos;s Nurture</p>
              <h2>Why Nature&apos;s Nurture</h2>
            </div>
            <div className="reason-cards">
              {reasons.map((reason) => (
                <article key={reason.title} className="reason-card">
                  <span className="reason-card__icon" aria-hidden="true"><reason.icon size={16} /></span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark-cta home-trust-section">
          <div className="container home-trust-shell">
            <div className="home-trust-copy">
              <p className="eyebrow eyebrow--alt">Retailers &amp; wholesalers</p>
              <h2>Built for retail. Backed by quality.</h2>
              <p>Practical distribution support for retail partners, backed by trusted manufacturing standards and an established African market footprint.</p>
            </div>
            <div className="home-trust-metrics">
              <div className="retailer-stats home-trust-stats">
                {retailStats.map((stat) => (
                  <div key={stat.label} className="stat-box">
                    <span>{stat.value}</span>
                    <strong>{stat.label}</strong>
                  </div>
                ))}
              </div>
              <div className="home-trust-compliance">
                <p className="home-trust-label">Quality &amp; regulatory compliance</p>
                <div className="compliance-grid">
                  {compliance.map((item) => (
                    <div key={item.label} className="compliance-item">
                      <span className="compliance-item__icon" aria-hidden="true"><item.icon size={15} /></span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="home-trust-footer">
                <p>Behind Nature&apos;s Nurture – Rainmaker FMCG combines product development, strong operations and trade support to serve consumer and retail channels with quality and purpose.</p>
                <div className="cta-row cta-row--stacked">
                  <Link className="button button--inverted" to="/about">Read more</Link>
                  <Link className="button button--ghost" to="/contact">Head office enquiries</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light home-connect-section">
          <div className="container connect-shell home-connect-shell">
            <div>
              <p className="eyebrow eyebrow--dark">Let&apos;s connect</p>
              <h2>Let&apos;s Talk.</h2>
            </div>
            <div className="connect-actions">
              <p>Whether you&apos;re a supermarket buyer, health professional, distributor or partner, our team would welcome a conversation.</p>
              <div className="cta-row cta-row--inline">
                <Link className="button button--primary" to="/contact">Submit trade enquiry</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
