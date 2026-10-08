import { ArrowRight, Baby, Bug, Droplets, FlaskConical, Grid2X2, Leaf, Search, UtensilsCrossed } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { ProductCollection } from '../components/ui/ProductCollection'
import { categories, catalogueProducts } from '../data/products'

const categoryIcons = {
  'All Products': Grid2X2,
  'Sublingual Nutrition': FlaskConical,
  'Infant Nutrition': Baby,
  'Cereal & Meal Replacement': UtensilsCrossed,
  'Natural Sweeteners': Leaf,
  'Family Protection': Bug,
  'Energy & Hydration': Droplets,
}

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category') ?? 'All Products'
  const activeCategory = categories.includes(requestedCategory) ? requestedCategory : 'All Products'
  const searchQuery = searchParams.get('q') ?? ''
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase()
    return catalogueProducts.filter((product) => {
      const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory
      const searchableText = [product.name, product.brand, product.category, product.description,
        product.shortDescription, ...(product.tags ?? []), ...product.benefits].join(' ').toLocaleLowerCase()
      return matchesCategory && (!query || searchableText.includes(query))
    })
  }, [activeCategory, searchQuery])

  const chooseCategory = (category: string) => {
    setSearchParams(category === 'All Products' ? {} : { category })
  }

  return (
    <main className="page-shell page-shell--light products-page">
      <section className="products-hero">
        <div className="container products-hero__grid">
          <div className="products-hero__copy">
            <p className="eyebrow eyebrow--dark">Nature&apos;s Nurture &amp; Zingo</p>
            <h1>The Complete Catalogue</h1>
            <p className="products-hero__lead">Choose a category, then explore a product or range for detailed information.</p>
            <a href="#catalogue" className="button button--primary">Browse products <ArrowRight size={16} /></a>
          </div>
          <ProductCollection />
        </div>
      </section>

      <section className="container catalogue-browser" id="catalogue" aria-labelledby="catalogue-heading">
        <div className="catalogue-browser__heading">
          <h2 id="catalogue-heading">Choose a category</h2>
          <label className="search-chip">
            <Search size={20} aria-hidden="true" />
            <input type="search" value={searchQuery} onChange={(event) => {
              const next = new URLSearchParams(searchParams)
              if (event.target.value) next.set('q', event.target.value)
              else next.delete('q')
              setSearchParams(next, { replace: true })
            }} placeholder="Search products or flavours" aria-label="Search products" />
          </label>
        </div>
        <label className="mobile-category-picker">
          <span>Product category</span>
          <select value={activeCategory} onChange={(event) => chooseCategory(event.target.value)} aria-controls="catalogue-results">
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <div className="product-filters" role="group" aria-label="Filter product categories">
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <button key={category} type="button" aria-pressed={activeCategory === category}
                aria-controls="catalogue-results" className={`filter-chip ${activeCategory === category ? 'is-selected' : ''}`}
                onClick={() => chooseCategory(category)}>
                <Icon size={22} aria-hidden="true" />{category}
              </button>
            )
          })}
        </div>
        <p className="catalogue-results-summary" role="status">{filteredProducts.length} {filteredProducts.length === 1 ? 'product or range' : 'products and ranges'}{activeCategory === 'All Products' ? '' : ` in ${activeCategory}`}</p>
        <div id="catalogue-results">
          {filteredProducts.length > 0 ? (
            <div className="product-grid product-grid--catalogue">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="products-empty-state">
              <p>No products match your search.</p>
              <button className="button button--primary" onClick={() => setSearchParams({})}>Show all products</button>
            </div>
          )}
        </div>
      </section>

      <section className="container catalogue-support" aria-label="Product and trade information">
        <Link to="/contact" className="button button--secondary">Request product information <ArrowRight size={16} /></Link>
        <Link to="/retailers" className="inline-link inline-link--dark">Retail &amp; wholesale enquiries</Link>
        <a href={`${import.meta.env.BASE_URL}Natures-Nurture-NEW.pdf`} download className="inline-link inline-link--dark">Download Stevia brochure (PDF)</a>
      </section>
    </main>
  )
}
