import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProductHref, type Product } from '../../data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card" style={{ ['--card-accent' as string]: product.accent ?? '#3e6b3f' }}>
      <div className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <Link to={getProductHref(product)} className="button button--primary product-card__action" aria-label={`Explore ${product.name}`}>
          Explore {product.id === 'zingo-range' ? 'range' : 'product'} <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  )
}
