import { ArrowUpRight, Factory, FlaskConical, Globe2, Home as HomeIcon, Leaf, ShieldCheck, Store, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { featuredProducts } from '../data/products'

const philosophy = [
  { number: '01', title: 'Wellness', icon: Leaf },
  { number: '02', title: 'Nutrition', icon: FlaskConical },
  { number: '03', title: 'Family', icon: Users2 },
  { number: '04', title: 'Everyday living', icon: HomeIcon },
]

const reasons = [
  { title: 'Science-led mucosal delivery', text: 'Designed for efficient nutrient absorption and quality routines.', icon: FlaskConical },
  { title: 'Quality-focused manufacturing', text: 'Traceable, standardised production for trusted daily health support.', icon: ShieldCheck },
  { title: 'Formulated for modern Africa', text: 'Balance, accessibility and practicality across everyday lifestyles.', icon: Globe2 },
  { title: 'Retail-ready multi-category FMCG', text: 'Structured for the realities of African retail and commercial scale.', icon: Store },
]

const retailStats = [
  { label: '6+ categories', value: '6+' },
  { label: '100+ SKUs ready', value: '100+' },
  { label: 'Multi-channel', value: 'Multi' },
  { label: 'Pan-Africa', value: 'Pan' },
]

const compliance = [
  { label: 'SAHPRA aligned', icon: ShieldCheck },
  { label: 'Department of Health SA', icon: Factory },
  { label: 'SA Pharmacy Council', icon: Store },
  { label: 'GMP Certified', icon: Factory },
  { label: 'HACCP certified', icon: ShieldCheck },
  { label: 'ISO 22000', icon: ShieldCheck },
]

export function Home() {
  return (
    <>
      <main>
        <section className="hero-shell">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">01 • Portfolio introduction</p>
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
                <Link className="button button--secondary" to="/retailers">For formulas &amp; wholesalers</Link>
              </div>
              <div className="hero-meta">
                <span>Natural ingredients</span>
                <span>Evidence-led</span>
                <span>Family wellness</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Featured Nature's Nurture products">
              <div className="product-stack product-stack--one">
                <div className="mini-product mini-product--rose">
                  <span className="mini-badge">B12</span>
                  <h4>Vitamin B12 + Folate</h4>
                </div>
              </div>
              <div className="product-stack product-stack--two">
                <div className="mini-product mini-product--green">
                  <span className="mini-badge">Zingo</span>
                  <h4>Zingo</h4>
                </div>
              </div>
              <div className="product-stack product-stack--three">
                <div className="mini-product mini-product--gold">
                  <span className="mini-badge">Cereal</span>
                  <h4>Cereal</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container philosophy-grid">
            <div className="section-heading section-heading--left">
              <p className="eyebrow eyebrow--dark">01 • Our philosophy</p>
              <h2>
                Nurturing better choices<br />
                for everyday life across<br />
                Africa.
              </h2>
            </div>
            <div className="section-copy">
              <p>
                Premium nutrition should feel practical. Our products combine natural ingredients, functional formulation and everyday relevance for real families across Africa.
              </p>
            </div>
            <div className="philosophy-list">
              {philosophy.map((item) => (
                <div key={item.number} className="philosophy-item">
                  <span className="philosophy-item__icon" aria-hidden="true"><item.icon size={15} /></span>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="section-header section-header--spaced">
              <div>
                <p className="eyebrow eyebrow--dark">02 • Featured flagships</p>
                <h2>Featured Flagships</h2>
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
          <div className="container narrative-shell narrative-shell--split">
            <div className="narrative-heading">
              <p className="eyebrow eyebrow--alt">03 • Brand narrative</p>
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
              <p className="eyebrow eyebrow--dark">04 • Why Nature&apos;s Nurture</p>
              <h2>Why Nature&apos;s Nurture</h2>
            </div>
            <div className="reason-cards">
              {reasons.map((reason, index) => (
                <article key={reason.title} className="reason-card">
                  <span className="reason-card__icon" aria-hidden="true"><reason.icon size={16} /></span>
                  <span className="reason-number">0{index + 1}</span>
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
              <p className="eyebrow eyebrow--alt">05 • Retailers &amp; wholesalers</p>
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
              <p className="eyebrow eyebrow--dark">06 • Let&apos;s connect</p>
              <h2>Let&apos;s Talk.</h2>
            </div>
            <div className="connect-actions">
              <p>Whether you&apos;re a supermarket buyer, health professional, distributor or partner, our team would welcome a conversation.</p>
              <div className="cta-row cta-row--inline">
                <Link className="button button--primary" to="/contact">Submit trade enquiry</Link>
                <Link className="button button--secondary" to="/contact">General contact</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
