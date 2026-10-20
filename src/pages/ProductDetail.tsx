import { OptimizedImage } from '../components/ui/OptimizedImage'
import { SublingualProduct } from './SublingualProduct'
import { ProductMedia } from '../components/ui/ProductImagePlaceholder'
import { sublingualRange } from '../data/sublingual'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { mosquitoPatchVariants } from '../data/mosquitoPatches'
import { MosquitoPatchProduct } from './MosquitoPatchProduct'
import { SteviaProduct } from './SteviaProduct'
import { InfantFormula } from './InfantFormula'
import { CerealRange } from './CerealRange'
import { cerealFlavours } from '../data/cerealRange'
import { catalogueProducts, getCategoryHref, getProductHref, products } from '../data/products'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const benefits = product?.benefits ?? []

  if (slug === 'calm-complex') return <Navigate to="/products/vitamin-b-complex" replace />
  if (product && sublingualRange.some((item) => item.slug === slug)) return <SublingualProduct key={product.slug} product={product} />

  if (slug === 'cereal-meal-replacement') return <CerealRange />
  if (cerealFlavours.some((flavour) => flavour.slug === slug)) {
    return <Navigate to="/products/cereal-meal-replacement" replace />
  }

  if (slug === 'infant-formula') return <InfantFormula />
  if (slug === 'infant-formula-stage-1' || slug === 'infant-formula-stage-2') {
    return <Navigate to="/products/infant-formula" replace />
  }

  if (slug === 'mosquito-repellent-patches') {
    return <Navigate to={getCategoryHref('Family Protection')} replace />
  }

  const patchVariant = mosquitoPatchVariants.find((variant) => variant.slug === slug)
  if (product && patchVariant) return <MosquitoPatchProduct product={product} variant={patchVariant} />

  if (product && slug === 'stevia-sachets') return <SteviaProduct />

  if (slug === 'zingo' || (product && product.slug.startsWith('zingo-'))) {
    return <Navigate to="/brands/zingo" replace />
  }

  if (!product) {
    return (
      <main className="page-shell page-shell--light">
        <section className="container">
          <p className="eyebrow eyebrow--dark">Product unavailable</p>
          <h1>We couldn't find this product.</h1>
          <Link to="/products" className="inline-link inline-link--dark">Back to catalogue</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell page-shell--light">
      <section className="container product-detail">
        <div className="product-detail__media">
          <div className="product-detail__image-frame" style={{ ['--card-accent' as string]: product.accent ?? '#3e6b3f' }}>
            <OptimizedImage src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-detail__content">
          <p className="eyebrow eyebrow--dark">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__lead">{product.description}</p>

          <div className="product-detail__meta">
            <span>{product.label}</span>
            <span>{product.format}</span>
          </div>

          <div className="product-detail__actions">

            <Link to="/products" className="inline-link inline-link--dark">Back to catalogue <ArrowRight size={16} /></Link>
          </div>

          <div className="detail-list">
            <h3>Unique Benefits</h3>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}><CheckCircle2 size={15} /> {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container related-block">
        <div className="section-header section-header--spaced">
          <div>
            <p className="eyebrow eyebrow--dark">Related products</p>
            <h2>Explore more from the portfolio</h2>
          </div>
        </div>
        <div className="product-grid product-grid--related">
          {catalogueProducts.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
            <article key={item.id} className="mini-product-card">
              <ProductMedia product={item} />
              <div>
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <Link to={getProductHref(item)} className="inline-link inline-link--dark">View product <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
