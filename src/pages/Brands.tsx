import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { createProductPlaceholder } from '../data/products'

const brands = [
  {
    name: "Nature's Nurture",
    slug: 'natures-nurture',
    summary: 'Evidence-based everyday health and family wellness products built around practical nutrition and trusted ingredients.',
    areas: ['Sublingual Nutrition', 'Infant Nutrition', 'Everyday Wellness', 'Family Care'],
    image: createProductPlaceholder('Nature', '#244f39', '#dfeadf'),
  },
  {
    name: 'Zingo',
    slug: 'zingo',
    summary: 'A bold powdered drink range designed around refreshment, everyday vitality and active lifestyles.',
    areas: ['Energy & Hydration', 'Powdered Drinks', 'Family & Active'],
    image: `${import.meta.env.BASE_URL}products/zingo/orange-boost.png`,
  },
  {
    name: 'Live Now',
    slug: 'live-now',
    summary: 'Nutritious cereals for everyday wellness.',
    areas: ['Cereal', 'Everyday Nutrition', 'Family Wellness'],
    image: `${import.meta.env.BASE_URL}products/cereal/banana-bliss.png`,
  },
  {
    name: "Nature's Nurture Wellness",
    slug: 'natures-nurture-wellness',
    summary: 'Nutritional support, micronutrients and wellness essentials created for daily quality of life.',
    areas: ['Micronutrients', 'Natural Sweeteners', 'Family Protection'],
    image: createProductPlaceholder('Wellness', '#d5bb8d', '#fcf2e1'),
  },
]

const portfolioAreas = [
  {
    number: '01',
    title: 'Sublingual Nutrition',
    description: 'Fast-absorbing micronutrient sprays.',
  },
  {
    number: '02',
    title: 'Energy & Hydration',
    description: 'Functional powdered drinks for everyday vitality.',
  },
  {
    number: '03',
    title: 'Infant & Family Nutrition',
    description: 'Formula and cereals designed for family nutrition.',
  },
  {
    number: '04',
    title: 'Natural & Lifestyle',
    description: 'Natural sweeteners and protective wellness solutions.',
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
                <ul className="brand-card__areas">
                  {brand.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
                <Link to={`/brands/${brand.slug}`} className="inline-link inline-link--dark">
                  Explore brand <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--light portfolio-structure-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--dark">The portfolio</p>
            <h2>Four complementary areas of wellness</h2>
          </div>
          <div className="portfolio-areas-grid">
            {portfolioAreas.map((area) => (
              <div key={area.number} className="portfolio-area-item">
                <span className="portfolio-area-item__number">{area.number}</span>
                <strong>{area.title}</strong>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
