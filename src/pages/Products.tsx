import { ArrowRight, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { categories, products } from '../data/products'

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])
  const productPdfHref = `${import.meta.env.BASE_URL}Natures-Nurture-NEW.pdf`

  return (
    <main className="page-shell page-shell--light">
      <section className="page-header page-header--tight">
        <div className="container page-header__inner page-header__inner--stacked">
          <div>
            <p className="eyebrow eyebrow--dark">Product catalogue &amp; formulation</p>
            <h1>The Complete Catalogue</h1>
          </div>
          <div className="page-header__copy">
            <p>Explore our evidence-led FMCG and wellness portfolio across nutrition, wellness and family health.</p>
          </div>
        </div>
      </section>

      <section className="container product-toolbar">
        <div className="toolbar-actions">
          <Link to="/retailers" className="button button--primary">Browse wholesale pricing</Link>
          <a href={productPdfHref} download className="button button--secondary">
            Download master catalogue (PDF)
          </a>
        </div>
      </section>

      <section className="container product-filters-shell">
        <div className="product-filters" aria-label="Filter product categories">
          <div className="search-chip">
            <Search size={14} />
            <span>Search</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${activeCategory === category ? 'is-selected' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="product-grid product-grid--catalogue">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
