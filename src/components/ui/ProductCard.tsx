import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'

export function ProductCard({ product }: { product: Product }) {
  const accent = product.accent ?? '#3e6b3f'
  const benefits = product.benefits ?? []

  return (
    <article className="product-card" style={{ ['--card-accent' as string]: accent }}>
      <div className="product-card__media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__body">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <Link to={`/products/${product.slug}`} className="inline-link">
          Explore product <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  )
}
