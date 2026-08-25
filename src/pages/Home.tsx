import { ArrowRight, ArrowUpRight, Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { createProductPlaceholder, featuredProducts } from '../data/products'

const philosophy = [
  { number: '01', title: 'Wellness' },
  { number: '02', title: 'Nutrition' },
  { number: '03', title: 'Family' },
  { number: '04', title: 'Everyday living' },
]

const categoryCards = [
  {
    title: 'Sublingual Micronutrient Sprays',
    description: 'Evidence-led oral wellness essentials designed for everyday vitality and support.',
    tone: 'lavender',
    image: createProductPlaceholder('B12', '#d9bfd6', '#f3ebf4'),
  },
  {
    title: 'Cereals & Meal Replacements',
    description: 'Practical nutrition for breakfast, convenience and full-day performance.',
    tone: 'mint',
    image: createProductPlaceholder('Cereal', '#8db38b', '#dfeee0'),
  },
  {
    title: 'Infant & Follow-On Formula',
    description: 'Supportive early-life nutrition built around formula-led ease and trust.',
    tone: 'peach',
    image: createProductPlaceholder('Infant', '#e5c4a9', '#f8e4d5'),
  },
  {
    title: 'Zingo Fruit Hydration',
    description: 'Fruit-powered hydration for families and active everyday routines.',
    tone: 'amber',
    image: createProductPlaceholder('Zingo', '#ef8f4b', '#f7d7b2'),
  },
]

const reasons = [
  { title: 'Science-led mucosal delivery', text: 'Designed for efficient nutrient absorption and quality routines.' },
  { title: 'Quality-focused manufacturing', text: 'Traceable, standardised production for trusted daily health support.' },
  { title: 'Formulated for modern Africa', text: 'Balance, accessibility and practicality across everyday lifestyles.' },
  { title: 'Retail-ready multi-category FMCG', text: 'Structured for the realities of African retail and commercial scale.' },
]

const retailStats = [
  { label: '6+ categories', value: '6+' },
  { label: '100+ SKUs ready', value: '100+' },
  { label: 'Multi-channel', value: 'Multi' },
  { label: 'Pan-Africa', value: 'Pan' },
]

const compliance = ['SAHPRA aligned', 'Department of Health SA', 'SA Pharmacy Council', 'GMP Certified', 'HACCP certified', 'ISO 22000']

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
                We believe that premium, science-backed nutrition and wellness should be practical, accessible and built for real families. Through every stage of life, our products bridge natural ingredients, functional formulation and everyday relevance.
              </p>
            </div>
            <div className="philosophy-list">
              {philosophy.map((item) => (
                <div key={item.number} className="philosophy-item">
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
                <p className="eyebrow eyebrow--dark">01 • Category architecture</p>
                <h2>The Product World</h2>
              </div>
              <Link to="/products" className="inline-link inline-link--dark">View all products <ArrowUpRight size={16} /></Link>
            </div>

            <div className="category-grid">
              {categoryCards.map((card) => (
                <article key={card.title} className={`category-card category-card--${card.tone}`}>
                  <div className="category-card__content">
                    <span className="tag tag--small">Product range</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link to="/products" className="inline-link inline-link--dark">
                      Explore product <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="category-card__visual">
                    <img src={card.image} alt={card.title} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="section-header section-header--spaced">
              <div>
                <p className="eyebrow eyebrow--dark">04 • Featured flagships</p>
                <h2>Featured Flagships</h2>
              </div>
              <Link to="/products" className="inline-link inline-link--dark">Explore all products <ChevronRight size={16} /></Link>
            </div>

            <div className="featured-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark-cta">
          <div className="container narrative-shell">
            <div className="narrative-copy">
              <p className="eyebrow eyebrow--alt">06 • Brand narrative</p>
              <h2>
                Nurturing life through<br />
                science, nature &amp;<br />
                honest craftsmanship.
              </h2>
              <p>
                Nature&apos;s Nurture was founded on a simple belief: that science-backed nutrition and everyday wellness deserve better ingredients, better choices and better outcomes for families.
              </p>
              <div className="cta-row cta-row--stacked">
                <Link className="button button--inverted" to="/about">Read our story</Link>
                <Link className="button button--ghost" to="/products">See all nutritional information</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--orange">
          <div className="container promo-shell">
            <div className="promo-copy">
              <p className="eyebrow eyebrow--alt">Zingo</p>
              <h2>Stir. Sip. Smile. With Zingo!</h2>
              <p>
                Zingo brings bright flavour, convenience and everyday hydration support to family routines across Africa.
              </p>
              <div className="pill-row">
                <span>Orange boost</span>
                <span>Berry burst</span>
                <span>Fruit hydration</span>
              </div>
              <Link className="button button--light" to="/products/zingo">Explore product</Link>
            </div>
            <div className="promo-product">
              <div className="promo-bottle">
                <img src={createProductPlaceholder('Zingo', '#ef8f4b', '#f7d7b2')} alt="Zingo product placeholder" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container reason-grid">
            <div className="section-heading section-heading--left">
              <p className="eyebrow eyebrow--dark">07 • Why Nature&apos;s Nurture</p>
              <h2>Why Nature&apos;s Nurture</h2>
            </div>
            <div className="reason-cards">
              {reasons.map((reason, index) => (
                <article key={reason.title} className="reason-card">
                  <span className="reason-number">0{index + 1}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container retailer-shell">
            <div className="section-header section-header--spaced">
              <div>
                <p className="eyebrow eyebrow--dark">08 • Retailers &amp; wholesalers</p>
                <h2>For Retailers, Wholesalers &amp; Distributors</h2>
              </div>
              <Link className="inline-link inline-link--dark" to="/retailers">Retail channel overview <ChevronRight size={16} /></Link>
            </div>
            <div className="retailer-stats">
              {retailStats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <span>{stat.value}</span>
                  <strong>{stat.label}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container compliance-shell">
            <div className="section-header section-header--spaced">
              <div>
                <p className="eyebrow eyebrow--dark">09 • Quality &amp; compliance</p>
                <h2>Quality &amp; Regulatory Compliance</h2>
              </div>
              <span className="inline-link inline-link--dark">Inspect compliance overview</span>
            </div>
            <div className="compliance-grid">
              {compliance.map((item) => (
                <div key={item} className="compliance-item">
                  <Check size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark-cta section--release">
          <div className="container narrative-shell narrative-shell--compact">
            <div className="narrative-copy narrative-copy--compact">
              <p className="eyebrow eyebrow--alt">10 • Corporate foundation</p>
              <h2>Behind Nature&apos;s Nurture – Rainmaker FMCG</h2>
              <p>Our company combines product development, science-led belief and strong operations to serve both consumer markets and trade channels with quality and purpose.</p>
              <div className="cta-row cta-row--stacked">
                <Link className="button button--inverted" to="/about">Read more</Link>
                <Link className="button button--ghost" to="/contact">Head office enquiries</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container connect-shell">
            <div>
              <p className="eyebrow eyebrow--dark">11 • Let&apos;s connect</p>
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
