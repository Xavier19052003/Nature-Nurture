import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { createProductPlaceholder } from '../data/products'

const brands = [
  {
    name: "Nature's Nurture",
    summary: 'Evidence-based everyday health and family wellness products built around practical nutrition and trusted ingredients.',
    image: createProductPlaceholder('Nature', '#244f39', '#dfeadf'),
  },
  {
    name: 'Zingo',
    summary: 'Fruit-inspired hydration designed for everyday energy and family routines.',
    image: createProductPlaceholder('Zingo', '#ef8f4b', '#f9ddc0'),
  },
  {
    name: "Nature's Nurture Wellness",
    summary: 'Nutritional support, micronutrients and wellness essentials created for daily quality of life.',
    image: createProductPlaceholder('Wellness', '#d5bb8d', '#fcf2e1'),
  },
]

export function BrandsPage() {
  return (
    <main className="page-shell page-shell--light brands-page">
      <section className="brands-hero">
        <div className="container brands-hero__grid">
          <div className="brands-hero__copy">
            <p className="eyebrow eyebrow--dark">Brand architecture &amp; portfolio</p>
            <h1>Our Distinct Brand<br />Portfolios</h1>
          </div>
          <p className="brands-hero__lead">
            Rainmaker FMCG and Nature&apos;s Nurture bring together product innovation, family-first wellbeing and everyday science-led nutrition.
          </p>
        </div>
      </section>

      <section className="brands-grid-section">
        <div className="container brands-grid">
          {brands.map((brand) => (
            <article key={brand.name} className="brand-card brand-card--portfolio">
              <div className="brand-card__media brand-card__media--portfolio">
                <img src={brand.image} alt={brand.name} />
              </div>
              <div className="brand-card__body brand-card__body--portfolio">
                <h3>{brand.name}</h3>
                <p>{brand.summary}</p>
                <Link to="/brands/natures-nurture" className="inline-link inline-link--dark">
                  Explore brand <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
