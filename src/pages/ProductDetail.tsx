import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { products } from '../data/products'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) ?? products[0]
  const benefits = product?.benefits ?? []

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
            <img src={product.image} alt={product.name} />
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
            <Button variant="primary">Request product details</Button>
            <Link to="/products" className="inline-link inline-link--dark">Back to catalogue <ArrowRight size={16} /></Link>
          </div>

          <div className="detail-list">
            <h3>Benefits</h3>
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
          {products.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
            <article key={item.id} className="mini-product-card">
              <img src={item.image} alt={item.name} />
              <div>
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <Link to={`/products/${item.slug}`} className="inline-link inline-link--dark">View product <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
