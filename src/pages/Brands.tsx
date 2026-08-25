import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { createProductPlaceholder } from '../data/products'

const brands = [
  {
    name: 'Nature\'s Nurture',
    summary: 'Evidence-based everyday health and family wellness products built around practical nutrition and trusted ingredients.',
    image: createProductPlaceholder('Nature', '#244f39', '#dfeadf'),
  },
  {
    name: 'Zingo',
    summary: 'Fruit-inspired hydration designed for everyday energy and family routines.',
    image: createProductPlaceholder('Zingo', '#ef8f4b', '#f9ddc0'),
  },
  {
    name: 'Nature\'s Nurture Wellness',
    summary: 'Nutritional support, micronutrients and wellness essentials created for daily quality of life.',
    image: createProductPlaceholder('Wellness', '#d5bb8d', '#fcf2e1'),
  },
]

export function BrandsPage() {
  return (
    <main className="page-shell page-shell--light">
      <section className="page-header">
        <div className="container page-header__inner page-header__inner--stacked">
          <div>
            <p className="eyebrow eyebrow--dark">Brand architecture &amp; portfolio</p>
            <h1>Our Distinct Brand Portfolios</h1>
          </div>
          <div className="page-header__copy">
            <p>Rainmaker FMCG and Nature&apos;s Nurture bring together product innovation, family-first wellbeing and everyday science-led nutrition.</p>
          </div>
        </div>
      </section>

      <section className="container brand-grid">
        {brands.map((brand) => (
          <article key={brand.name} className="brand-card">
            <div className="brand-card__media">
              <img src={brand.image} alt={brand.name} />
            </div>
            <div className="brand-card__body">
              <h3>{brand.name}</h3>
              <p>{brand.summary}</p>
              <Link to="/brands/natures-nurture" className="inline-link inline-link--dark">
                Explore brand <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
