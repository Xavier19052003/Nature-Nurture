import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const brands = [
  {
    name: "Nature's Nurture",
    slug: 'natures-nurture',
    logo: asset('brands/natures-nurture/logo.jpg'),
    summary: 'Evidence-based everyday health and family wellness products built around practical nutrition and trusted ingredients.',
    areas: ['Sublingual Nutrition', 'Infant & Family Nutrition', 'Cereals', 'Natural Sweeteners', 'Family Protection'],
    images: [
      asset('products/sublingual/b12-folate.png'),
      asset('products/infant-formula/stage-1.png'),
      asset('products/cereal/banana-bliss.png'),
      asset('products/stevia/stevia-sachets.png'),
    ],
  },
  {
    name: 'Zingo',
    slug: 'zingo',
    summary: 'A bold, bright powdered drink range bringing refreshment and everyday vitality to active consumers and families.',
    areas: ['Energy & Hydration', 'On-the-go Format', 'Family & Active'],
    images: [asset('products/zingo/orange-boost.png')],
  },
]

const portfolioAreas = [
  {
    number: '01',
    title: 'Sublingual Nutrition',
    description: 'Fast-absorbing micronutrient sprays delivering convenient nutritional support.',
  },
  {
    number: '02',
    title: 'Energy & Hydration',
    description: 'Functional powdered drinks developed around hydration, refreshment and everyday vitality.',
  },
  {
    number: '03',
    title: 'Infant & Family Nutrition',
    description: 'Trusted formulas and cereals designed to nourish from the earliest stages of life.',
  },
  {
    number: '04',
    title: 'Natural & Lifestyle',
    description: 'Botanical sweeteners and protective wellness solutions for clean, conscious living.',
  },
]

const portfolioVisuals = [
  { src: asset('products/sublingual/b12-folate.png'), alt: "Nature's Nurture sublingual spray" },
  { src: asset('products/infant-formula/stage-1.png'), alt: "Nature's Nurture infant formula" },
  { src: asset('products/cereal/banana-bliss.png'), alt: "Nature's Nurture cereal" },
  { src: asset('products/stevia/stevia-sachets.png'), alt: "Nature's Nurture Stevia" },
  { src: asset('products/mosquito-repellent/mosquito-repellent-patches.png'), alt: "Nature's Nurture Mosquito Repellent Patches" },
  { src: asset('products/zingo/orange-boost.png'), alt: 'Zingo' },
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
        <div className="container">
          <div className="section-header section-header--spaced">
            <div>
              <p className="eyebrow eyebrow--dark">Our brands</p>
              <h2>A focused portfolio</h2>
            </div>
            <p className="brands-intro-copy">
              A focused portfolio of brands created around everyday wellness, nutrition, energy and family care.
            </p>
          </div>

          <div className="brands-grid brands-grid--two">
            {brands.map((brand) => (
              <article key={brand.name} className="brand-card brand-card--portfolio">
                <div className="brand-card__media brand-card__media--portfolio brand-card__media--collage">
                  {brand.logo ? (
                    <div className="brand-card__logo">
                      <img src={brand.logo} alt={`${brand.name} logo`} />
                    </div>
                  ) : null}
                  <div className="brand-card__collage">
                    {brand.images.map((src) => (
                      <div key={src} className="brand-card__collage-item">
                        <img src={src} alt="" loading="lazy" />
                      </div>
                    ))}
                  </div>
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

      <section className="section section--light portfolio-visuals-section">
        <div className="container">
          <div className="portfolio-visual-strip">
            {portfolioVisuals.map((visual) => (
              <div key={visual.src} className="portfolio-visual-strip__item">
                <img src={visual.src} alt={visual.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
