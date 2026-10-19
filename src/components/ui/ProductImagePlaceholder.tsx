import { Leaf, Sprout } from 'lucide-react'
import type { CSSProperties } from 'react'
import '../../styles/product-image-placeholder.css'

export function ProductImagePlaceholder({ name, accent = '#e3eadc', compact = false, supporting = false }: { name: string; accent?: string; compact?: boolean; supporting?: boolean }) {
  return <div className={`product-image-placeholder${compact ? ' product-image-placeholder--compact' : ''}`} style={{ '--placeholder-accent': accent } as CSSProperties} role="img" aria-label={`${name} — ${supporting ? 'additional supporting' : 'product'} image placeholder`}>
    <Leaf className="product-image-placeholder__leaf" size={160} strokeWidth={0.6} aria-hidden="true" />
    <div className="product-image-placeholder__content"><Sprout size={38} strokeWidth={1} aria-hidden="true" /><span className="product-image-placeholder__brand">Nature’s Nurture</span><strong>{name}</strong><span className="product-image-placeholder__label">{supporting ? 'Supporting imagery' : 'Sublingual Nutrition'}</span>{!compact && <span className="product-image-placeholder__pending">{supporting ? 'Additional photography to follow' : 'Product photography to follow'}</span>}</div>
  </div>
}

export function ProductMedia({ product, compact = true }: { product: { name: string; image: string; accent?: string }; compact?: boolean }) {
  return product.image ? <img src={product.image} alt={product.name} loading="lazy" /> : <ProductImagePlaceholder name={product.name} accent={product.accent} compact={compact} />
}
