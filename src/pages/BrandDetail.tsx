import { ArrowRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { brandContentBySlug, getBrandProducts } from '../data/brands'

function GenericBrandDetail() {
  return (
    <main className="page-shell page-shell--light">
      <section className="container brand-detail">
        <div className="brand-detail__hero">
          <div>
            <p className="eyebrow eyebrow--dark">Nature&apos;s Nurture</p>
            <h1>Nature&apos;s Nurture portfolio</h1>
            <p>
              Products designed to create everyday health confidence for families, retailers and communities across Africa.
            </p>
          </div>
          <div className="brand-detail__stat">6+ categories</div>
        </div>

        <div className="brand-detail__grid">
          <div className="brand-feature">
            <h3>Core focus</h3>
            <ul>
              <li><Check size={15} /> Wellness nutrition</li>
              <li><Check size={15} /> Family health</li>
              <li><Check size={15} /> Daily performance</li>
            </ul>
          </div>
          <div className="brand-feature">
            <h3>Brand principles</h3>
            <ul>
              <li><Check size={15} /> Science-led</li>
              <li><Check size={15} /> Accessible</li>
              <li><Check size={15} /> Trustworthy</li>
            </ul>
          </div>
        </div>

        <div className="related-block">
          <div className="section-header section-header--spaced">
            <div>
              <p className="eyebrow eyebrow--dark">Product collection</p>
              <h2>Featured in this brand family</h2>
            </div>
          </div>
          <div className="cta-row cta-row--stacked">
            <Link className="button button--primary" to="/products">View Catalogue</Link>
            <Link className="button button--secondary" to="/brands">Return to brands</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export function BrandDetailPage() {
  const { slug } = useParams()
  const content = slug ? brandContentBySlug[slug] : undefined

  if (!content) {
    return <GenericBrandDetail />
  }

  const flavourProducts = getBrandProducts(content)

  return (
    <main className="page-shell page-shell--light zingo-page" style={{ ['--brand-accent' as string]: content.accent }}>
      <section className="zingo-hero">
        <div className="container zingo-hero__grid">
          <div className="zingo-hero__copy">
            <p className="eyebrow eyebrow--brand">{content.heroEyebrow}</p>
            <h1>{content.heroHeadline}</h1>
            <p className="zingo-hero__lead">{content.heroLead}</p>
            <div className="cta-row">
              <Link className="button button--primary" to="/products">Explore the range <ArrowRight size={16} /></Link>
              <Link className="button button--secondary" to="/contact">Talk to us about {content.name}</Link>
            </div>
          </div>
          <div className="zingo-hero__visual">
            <div className="zingo-hero__frame">
              <img src={content.heroImage} alt={`${content.name} product`} loading="lazy" />
            </div>
            <span className="zingo-hero__stat">{content.heroStat}</span>
          </div>
        </div>
      </section>

      <section className="section section--light zingo-what-is">
        <div className="container zingo-what-is__grid">
          <div>
            <p className="eyebrow eyebrow--dark">What is {content.name}?</p>
            <h2>{content.whatIsLead}</h2>
          </div>
          <p className="zingo-what-is__copy">{content.whatIsCopy}</p>
        </div>
      </section>

      <section className="section section--dark-cta zingo-pillars">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--alt">What makes {content.name} different</p>
            <h2>Four ideas behind every sachet.</h2>
          </div>
          <div className="zingo-pillars__grid">
            {content.pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="zingo-pillar-card">
                  <span className="zingo-pillar-card__icon"><Icon size={18} /></span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--light zingo-opportunity">
        <div className="container zingo-opportunity__grid">
          <div>
            <p className="eyebrow eyebrow--dark">{content.opportunityEyebrow}</p>
            <h2>{content.opportunityTitle}</h2>
          </div>
          <p>{content.opportunityCopy}</p>
        </div>
      </section>

      <section className="section section--light zingo-value">
        <div className="container zingo-value__grid">
          <div className="zingo-value__stat">
            <span>{content.valueStat.top}</span>
            <strong>{content.valueStat.bottom}</strong>
          </div>
          <div>
            <p className="eyebrow eyebrow--dark">Value proposition</p>
            <h2>{content.valueHeadline}</h2>
            <p>{content.valueCopy}</p>
          </div>
        </div>
      </section>

      <section className="section section--dark-cta zingo-reasons">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--alt">Why choose {content.name}</p>
            <h2>Everyday reasons families reach for {content.name}.</h2>
          </div>
          <div className="zingo-reasons__grid">
            {content.reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="zingo-reason-pill">
                  <Icon size={16} />
                  <span>{reason.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {flavourProducts.length > 0 && (
        <section className="section section--light zingo-flavours">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow eyebrow--dark">The full collection</p>
                <h2>The {content.name} Flavour Collection</h2>
              </div>
            </div>
            {content.flavourGroups.map((group) => (
              <div key={group.title} className="zingo-flavour-group">
                <h3 className="zingo-flavour-group__title">{group.title}</h3>
                <div className="zingo-flavour-grid">
                  {group.slugs.map((slug) => {
                    const product = flavourProducts.find((item) => item.slug === slug)
                    if (!product) return null
                    return (
                      <Link key={slug} to={`/products/${product.slug}`} className="zingo-flavour-card">
                        <div className="zingo-flavour-card__media">
                          <img src={product.image} alt={product.name} loading="lazy" />
                        </div>
                        <span>{product.name.replace('Zingo ', '')}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section section--light zingo-steps">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--dark">How to enjoy {content.name}</p>
            <h2>From sachet to smile in four steps.</h2>
          </div>
          <div className="zingo-steps__grid">
            {content.steps.map((step, index) => (
              <div key={step.title} className="zingo-step-card">
                <span className="zingo-step-card__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark-cta zingo-shelf">
        <div className="container zingo-shelf__grid">
          <div>
            <p className="eyebrow eyebrow--alt">Retail &amp; shelf story</p>
            <h2>{content.shelfTitle}</h2>
          </div>
          <p>{content.shelfCopy}</p>
        </div>
      </section>

      <section className="section section--light zingo-world">
        <div className="container zingo-world__grid">
          <div>
            <p className="eyebrow eyebrow--dark">Beyond the drink</p>
            <h2>{content.worldTitle}</h2>
          </div>
          <p>{content.worldCopy}</p>
        </div>
      </section>

      <section className="section section--light zingo-growth">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--dark">Looking ahead</p>
            <h2>{content.growthTitle}</h2>
          </div>
          <p className="zingo-growth__copy">{content.growthCopy}</p>
          <div className="zingo-growth__pills">
            {content.growthPoints.map((point) => (
              <span key={point} className="zingo-reason-pill zingo-reason-pill--light">{point}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container zingo-cta cta-panel cta-panel--green">
        <div className="zingo-cta__copy">
          <p className="eyebrow eyebrow--alt">{content.tagline}</p>
          <h3>{content.ctaHeadline}</h3>
          <p>{content.ctaCopy}</p>
        </div>
        <div className="cta-row">
          <Link className="button button--inverted" to="/products">Explore the {content.name} range <ArrowRight size={16} /></Link>
          <Link className="button button--ghost" to="/contact">Talk to us about {content.name}</Link>
        </div>
      </section>
    </main>
  )
}
