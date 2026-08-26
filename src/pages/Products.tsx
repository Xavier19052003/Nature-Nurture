import { ArrowRight, Baby, Droplets, FlaskConical, Grid2X2, Leaf, Search, ShieldCheck, Sparkles, Users2, UtensilsCrossed } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { categories, featuredProducts, products } from '../data/products'

const categoryIcons = {
  'All Products': Grid2X2,
  Hydration: Droplets,
  'Wellness Nutrition': FlaskConical,
  'Daily Support': ShieldCheck,
  'Child Nutrition': Baby,
  'Family Nutrition': UtensilsCrossed,
}

const valuePoints = [
  {
    number: '01',
    title: 'Science-led formulas',
    description: 'Developed with evidence and purpose.',
    icon: FlaskConical,
  },
  {
    number: '02',
    title: 'Trusted ingredients',
    description: 'Quality nutrients you can rely on.',
    icon: Leaf,
  },
  {
    number: '03',
    title: 'Family-first wellbeing',
    description: 'Products designed for everyday health.',
    icon: Users2,
  },
  {
    number: '04',
    title: 'Quality you can trust',
    description: 'Manufactured to appropriate standards.',
    icon: ShieldCheck,
  },
]

const heroProducts = featuredProducts.slice(0, 3)

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])
  const productPdfHref = `${import.meta.env.BASE_URL}Natures-Nurture-NEW.pdf`

  return (
    <main className="page-shell page-shell--light products-page">
      <section className="products-hero">
        <div className="container products-hero__grid">
          <div className="products-hero__copy">
            <p className="eyebrow eyebrow--dark">Product catalogue &amp; formulation</p>
            <h1>The Complete Catalogue</h1>
            <span className="about-hero__divider" aria-hidden="true" />
            <p className="products-hero__lead">
              Explore our evidence-led FMCG and wellness portfolio across nutrition, wellness and family health.
            </p>
            <div className="cta-row">
              <Link to="/retailers" className="button button--primary">Browse wholesale pricing</Link>
              <a href={productPdfHref} download className="button button--secondary">
                Download master catalogue (PDF)
              </a>
            </div>
          </div>

          <div className="products-hero__visual" aria-label="Featured Nature's Nurture product composition">
            <div className="products-hero__frame">
              <div className="products-hero__accent" aria-hidden="true" />
              {heroProducts.map((product, index) => {
                const Icon = index === 0 ? Sparkles : index === 1 ? Leaf : Users2
                return (
                  <article
                    key={product.id}
                    className={`products-hero__product products-hero__product--${index + 1}`}
                    style={{ ['--card-accent' as string]: product.accent ?? '#3e6b3f' }}
                  >
                    <div className="products-hero__product-media">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="products-hero__product-copy">
                      <span className="products-hero__product-icon" aria-hidden="true"><Icon size={13} /></span>
                      <span className="tag">{product.category}</span>
                      <h3>{product.name}</h3>
                      <p>{product.shortDescription ?? product.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container products-value-strip" aria-label="Product values">
        {valuePoints.map(({ number, title, description, icon: Icon }) => (
          <article key={number} className="products-value-item">
            <span className="products-value-item__number">{number}</span>
            <span className="products-value-item__icon" aria-hidden="true"><Icon size={15} /></span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="container product-section-intro">
        <div className="section-heading section-heading--left">
          <div>
            <p className="eyebrow eyebrow--dark">Explore by category</p>
            <h2>Products for modern family wellbeing.</h2>
          </div>
          <p className="about-section-heading__copy">
            Browse the portfolio by category, formulation type and everyday use case.
          </p>
        </div>
        <div className="product-filters-shell">
          <div className="product-filters" aria-label="Filter product categories">
            <div className="search-chip">
              <Search size={14} />
              <span>Search products</span>
            </div>
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              return (
                <button
                  key={category}
                  type="button"
                  className={`filter-chip ${activeCategory === category ? 'is-selected' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {Icon ? (
                    <span className="filter-chip__icon" aria-hidden="true"><Icon size={12} /></span>
                  ) : null}
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container products-catalogue">
        <div className="product-grid product-grid--catalogue">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} ctaLabel="EXPLORE PRODUCT →" />
          ))}
        </div>
      </section>

      <section className="container product-cta-row">
        <Link to="/contact" className="button button--secondary">
          Request product information <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  )
}
