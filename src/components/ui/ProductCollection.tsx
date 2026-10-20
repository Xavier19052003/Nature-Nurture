import { OptimizedImage } from './OptimizedImage'
import { sublingualProducts } from '../../data/sublingual'
import { ProductMedia } from './ProductImagePlaceholder'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCategoryHref } from '../../data/products'

const previews = [
  { category: 'Sublingual Nutrition', image: '', alt: 'Vitamin B12 + Folate', tone: 'rose', position: 'one' },
  { category: 'Cereal & Meal Replacement', image: 'cereal/banana-bliss.png', alt: 'Cereal Banana Bliss', tone: 'gold', position: 'two' },
  { category: 'Energy & Hydration', image: 'zingo/orange-boost.png', alt: 'Zingo Orange Boost', tone: 'green', position: 'three' },
]

export function ProductCollection({ homepage = false }: { homepage?: boolean }) {
  const visiblePreviews = homepage
    ? [
        previews[0],
        { category: 'Infant Nutrition', image: 'infant-formula/stage-1.png', alt: "Nature's Nurture Stage 1 infant formula", tone: 'sage', position: 'infant' },
        previews[1],
        { ...previews[2], tone: 'peach' },
        { category: 'Natural Sweeteners', image: 'stevia/stevia-sachets.png', alt: "Nature's Nurture Stevia sachets", tone: 'mint', position: 'sweeteners' },
        { category: 'Family Protection', image: 'mosquito-repellent/mosquito-repellent-patches-kids.png', alt: "Nature's Nurture Mosquito Repellent Patches for Kids", tone: 'lavender', position: 'protection' },
      ]
    : previews
  const cards = visiblePreviews.map((preview) => (
        <div key={preview.category} className={`product-stack product-stack--${preview.position}`}>
          <Link className={`mini-product mini-product--${preview.tone}`} to={getCategoryHref(preview.category === 'Infant & Family Nutrition' ? 'Infant Nutrition' : preview.category)}>
            {preview.image ? <OptimizedImage src={`${import.meta.env.BASE_URL}products/${preview.image}`} alt={preview.alt} loading={homepage ? 'eager' : 'lazy'} sizes="180px" width={400} height={400} /> : <ProductMedia product={sublingualProducts[0]} eager={homepage} sizes="180px" />}
            <span className="mini-product__category">{preview.category}</span>
            <span className="mini-product__action">Browse category <ArrowUpRight size={16} aria-hidden="true" /></span>
          </Link>
        </div>
      ))
  return (
    <nav className={`hero-visual${homepage ? ' hero-visual--home page-hero__visual' : ''}`} aria-label="Explore product categories">
      {homepage ? <h2 className="home-category-heading">Product Categories</h2> : null}
      {homepage ? <div className="home-category-grid">{cards}</div> : cards}
    </nav>
  )
}
