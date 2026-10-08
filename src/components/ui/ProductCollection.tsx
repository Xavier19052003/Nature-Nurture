import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCategoryHref } from '../../data/products'

const previews = [
  { category: 'Sublingual Nutrition', image: 'sublingual/b12-folate.png', alt: 'Vitamin B12 + Folate', tone: 'rose', position: 'one' },
  { category: 'Cereal & Meal Replacement', image: 'cereal/banana-bliss.png', alt: 'Cereal Banana Bliss', tone: 'gold', position: 'two' },
  { category: 'Energy & Hydration', image: 'zingo/orange-boost.png', alt: 'Zingo Orange Boost', tone: 'green', position: 'three' },
]

export function ProductCollection() {
  return (
    <nav className="hero-visual" aria-label="Explore product categories">
      {previews.map((preview) => (
        <div key={preview.category} className={`product-stack product-stack--${preview.position}`}>
          <Link className={`mini-product mini-product--${preview.tone}`} to={getCategoryHref(preview.category)}>
            <img src={`${import.meta.env.BASE_URL}products/${preview.image}`} alt={preview.alt} width={400} height={400} />
            <span className="mini-product__category">{preview.category}</span>
            <span className="mini-product__action">Browse category <ArrowUpRight size={16} aria-hidden="true" /></span>
          </Link>
        </div>
      ))}
    </nav>
  )
}
