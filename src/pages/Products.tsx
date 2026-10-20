import { optimizedImageUrl } from '../data/optimizedImages'
import { OptimizedImage } from '../components/ui/OptimizedImage'
import { PageHero } from '../components/ui/PageHero'
import { Baby, Bug, Droplets, FlaskConical, Grid2X2, Leaf, Search, UtensilsCrossed } from 'lucide-react'
import { useMemo, type CSSProperties } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RangeCarousel } from '../components/ui/RangeCarousel'
import { catalogueRanges, toProductSlide } from '../data/catalogueRanges'
import { categories, catalogueProducts } from '../data/products'

const asset = (path: string) => optimizedImageUrl(`${import.meta.env.BASE_URL}${path}`)

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

  const visibleRanges = catalogueRanges.filter((range) => range.products.some((product) => filteredProducts.some((match) => match.id === product.id)))
  const chooseCategory = (category: string) => {
    setSearchParams(category === 'All Products' ? {} : { category })
  }

  return (
    <main className="page-shell page-shell--light products-page">
      <PageHero className="products-hero" scrollLabel="Explore the catalogue" scrollTarget="catalogue" style={{ '--products-hero-background': `url("${asset('catalogue/products-hero-background.png')}")` } as CSSProperties}>
        <div className="container products-hero__grid page-hero__layout">
          <div className="products-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--dark">Nature&apos;s Nurture Range</p>
            <h1>The Complete Catalogue</h1>
            <p className="products-hero__lead">Explore our full range of nutrition, wellness and everyday health products — thoughtfully crafted for healthier lives, across Africa and beyond.</p>
          </div>
          <div className="products-hero__image page-hero__visual">
            <OptimizedImage src={asset('catalogue/portfolio-lineup-no-infant-formula.webp')} alt="Nature’s Nurture nutrition and wellness products arranged with botanicals, fruit and grains on a stone display" width={1356} height={1159} fetchPriority="high" />
          </div>
        </div>
      </PageHero>

      <section className="container catalogue-browser" id="catalogue" tabIndex={-1} aria-labelledby="catalogue-heading">
        <div className="catalogue-browser__heading">
          <div>
            <p className="catalogue-eyebrow">Explore our range</p>
            <h2 id="catalogue-heading">Choose a category</h2>
          </div>
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
        <p className="catalogue-results-summary" role="status">{visibleRanges.length} {visibleRanges.length === 1 ? 'range' : 'ranges'} · {filteredProducts.length} {filteredProducts.length === 1 ? 'product or range' : 'products and ranges'}{searchQuery.trim() ? ' matching your search' : ''}{activeCategory === 'All Products' ? '' : ` in ${activeCategory}`}</p>
        <div id="catalogue-results">
          {filteredProducts.length > 0 ? (
            <div className={`catalogue-ranges${visibleRanges.length === 1 ? ' catalogue-ranges--filtered' : ''}`}>
              {visibleRanges.map((range) => (
                <RangeCarousel key={`${range.id}:${searchQuery.trim().toLocaleLowerCase()}`} label={range.title}
                  slides={range.products.map((product) => toProductSlide(product, range.products.length === 1 || range.id === 'protection'))}
                  initialSlideId={filteredProducts.find((product) => product.category === range.category)?.id}
                  autoplay={!searchQuery.trim()}
                  variant={range.id === 'sublingual' || range.id === 'protection' ? 'feature' : range.products.length === 1 ? 'single' : 'range'} />
              ))}
            </div>
          ) : (
            <div className="products-empty-state">
              <p>No products match your search.</p>
              <button className="button button--primary" onClick={() => setSearchParams({})}>Show all products</button>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
