import { ProductImagePlaceholder, ProductMedia } from '../components/ui/ProductImagePlaceholder'
import { ArrowRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ZingoProduct } from './ZingoProduct'
import { naturesNurtureContent } from '../data/naturesNurtureContent'
import { NotFound } from './NotFound'
import { getProductHref } from '../data/products'

function NaturesNurtureDetail() {
  const nn = naturesNurtureContent

  return (
    <main className="page-shell page-shell--light nn-page">
      <section className="nn-hero">
        <div className="container nn-hero__grid">
          <div className="nn-hero__copy">
            <p className="eyebrow eyebrow--dark">{nn.hero.eyebrow}</p>
            <h1>{nn.hero.headline}</h1>
            <p className="nn-hero__lead">{nn.hero.lead}</p>
            <div className="cta-row">
              <Link className="button button--primary" to="/products">Explore the range <ArrowRight size={16} /></Link>
              <Link className="button button--secondary" to="/contact">Talk to us about {nn.name}</Link>
            </div>
          </div>
          <div className="nn-hero__collage">
            {nn.hero.images.map((src) => (
              <div key={src} className="nn-hero__collage-item">
                {src ? <img src={src} alt="" loading="lazy" /> : <ProductImagePlaceholder name="Vitamin B12 + Folate" compact />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light nn-intro">
        <div className="container nn-intro__grid">
          <div>
            <p className="eyebrow eyebrow--dark">{nn.intro.eyebrow}</p>
            <h2>{nn.intro.headline}</h2>
          </div>
          <p className="nn-intro__copy">{nn.intro.copy}</p>
        </div>
      </section>

      <section className="section section--light nn-sublingual">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow eyebrow--dark">{nn.sublingual.eyebrow}</p>
              <h2>{nn.sublingual.headline}</h2>
            </div>
            <p className="nn-sublingual__lead">{nn.sublingual.lead}</p>
          </div>
          <div className="nn-product-grid">
            {nn.sublingual.products.map((product) => (
              <Link key={product.slug} to={`/products/${product.slug}`} className="nn-product-card">
                <div className="nn-product-card__media">
                  <ProductMedia product={product} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <span className="nn-card-action">Explore product <ArrowRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark-cta nn-why">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--alt">Sublingual delivery</p>
            <h2>{nn.whySublingual.headline}</h2>
          </div>
          <div className="nn-why__grid">
            {nn.whySublingual.points.map((point) => {
              const Icon = point.icon
              return (
                <article key={point.title} className="nn-why-card">
                  <span className="nn-why-card__icon"><Icon size={18} /></span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--light nn-transition">
        <div className="container nn-transition__grid">
          <div>
            <p className="eyebrow eyebrow--dark">The wider portfolio</p>
            <h2>{nn.transition.headline}</h2>
            <p className="nn-transition__lead">{nn.transition.lead}</p>
          </div>
          <div className="nn-transition__areas">
            {nn.transition.areas.map((area) => (
              <div key={area.number} className="nn-transition-area">
                <span>{area.number}</span>
                <div>
                  <strong>{area.title}</strong>
                  <p>{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light nn-infant">
        <div className="container nn-infant__grid">
          <div>
            <p className="eyebrow eyebrow--dark">{nn.infant.eyebrow}</p>
            <h2>{nn.infant.headline}</h2>
            <p>{nn.infant.lead}</p>
          </div>
          <div className="nn-infant__products">
            {nn.infant.products.map((product) => (
              <Link key={product.slug} to={getProductHref(product)} className="nn-infant-card">
                <div className="nn-infant-card__media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark-cta nn-cereal">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--alt">{nn.cereal.eyebrow}</p>
            <h2>{nn.cereal.headline}</h2>
          </div>
          <div className="nn-cereal__grid">
            {nn.cereal.products.map((product) => (
              <Link key={product.slug} to={getProductHref(product)} className="nn-cereal-card">
                <div className="nn-cereal-card__media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light nn-stevia">
        <div className="container nn-stevia__grid">
          <div className="nn-stevia__media">
            {nn.stevia.product ? <img src={nn.stevia.product.image} alt={nn.stevia.product.name} loading="lazy" /> : null}
          </div>
          <div>
            <p className="eyebrow eyebrow--dark">{nn.stevia.eyebrow}</p>
            <h2>{nn.stevia.headline}</h2>
            <ul className="nn-checklist">
              {nn.stevia.points.map((point) => (
                <li key={point}><Check size={15} /> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--light nn-mosquito">
        <div className="container nn-mosquito__grid">
          <div>
            <p className="eyebrow eyebrow--dark">{nn.mosquito.eyebrow}</p>
            <h2>{nn.mosquito.headline}</h2>
            <ul className="nn-checklist">
              {nn.mosquito.points.map((point) => (
                <li key={point}><Check size={15} /> {point}</li>
              ))}
            </ul>
          </div>
          <div className="nn-mosquito__media nn-mosquito__variants">
            {nn.mosquito.products.map((product) => <Link className="nn-product-card" key={product.slug} to={getProductHref(product)}>
              <div className="nn-product-card__media"><img src={product.image} alt={product.name} loading="lazy" /></div>
              <h3>{product.name}</h3><span className="nn-card-action">Explore product <ArrowRight size={16} aria-hidden="true" /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section section--light nn-pillars">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--dark">{nn.pillars.eyebrow}</p>
            <h2>{nn.pillars.headline}</h2>
          </div>
          <div className="portfolio-areas-grid">
            {nn.pillars.areas.map((area) => (
              <div key={area.number} className="portfolio-area-item">
                <span className="portfolio-area-item__number">{area.number}</span>
                <strong>{area.title}</strong>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark-cta nn-principles">
        <div className="container">
          <div className="section-heading section-heading--left">
            <p className="eyebrow eyebrow--alt">Brand principles</p>
            <h2>{nn.principles.headline}</h2>
          </div>
          <div className="nn-principles__grid">
            {nn.principles.items.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="nn-principle-pill">
                  <Icon size={16} />
                  <span>{item.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container nn-cta cta-panel cta-panel--green">
        <div className="nn-cta__copy">
          <p className="eyebrow eyebrow--alt">{nn.name}</p>
          <h3>{nn.cta.headline}</h3>
          <p>{nn.cta.copy}</p>
        </div>
        <div className="cta-row">
          <Link className="button button--inverted" to="/products">Explore the product collection <ArrowRight size={16} /></Link>
          <Link className="button button--ghost" to="/brands">Back to brands</Link>
        </div>
      </section>
    </main>
  )
}

export function BrandDetailPage() {
  const { slug } = useParams()

  if (slug === 'natures-nurture') return <NaturesNurtureDetail />
  if (slug === 'zingo') return <ZingoProduct />
  return <NotFound />
}
