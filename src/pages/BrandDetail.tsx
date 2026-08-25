import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export function BrandDetailPage() {
  return (
    <main className="page-shell page-shell--light">
      <section className="container brand-detail">
        <div className="brand-detail__hero">
          <div>
            <p className="eyebrow eyebrow--dark">Nature&apos;s Nurture</p>
            <h1>Nature&apos;s Nurture portfolio</h1>
            <p>
              Products designed to create everyday health confidence for families, retailers and communities across Africa.
            </p>
          </div>
          <div className="brand-detail__stat">6+ categories</div>
        </div>

        <div className="brand-detail__grid">
          <div className="brand-feature">
            <h3>Core focus</h3>
            <ul>
              <li><Check size={15} /> Wellness nutrition</li>
              <li><Check size={15} /> Family health</li>
              <li><Check size={15} /> Daily performance</li>
            </ul>
          </div>
          <div className="brand-feature">
            <h3>Brand principles</h3>
            <ul>
              <li><Check size={15} /> Science-led</li>
              <li><Check size={15} /> Accessible</li>
              <li><Check size={15} /> Trustworthy</li>
            </ul>
          </div>
        </div>

        <div className="related-block">
          <div className="section-header section-header--spaced">
            <div>
              <p className="eyebrow eyebrow--dark">Product collection</p>
              <h2>Featured in this brand family</h2>
            </div>
          </div>
          <div className="cta-row cta-row--stacked">
            <Link className="button button--primary" to="/products">View Catalogue</Link>
            <Link className="button button--secondary" to="/brands">Return to brands</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
