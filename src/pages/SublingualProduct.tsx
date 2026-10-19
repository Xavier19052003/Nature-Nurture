import { ArrowLeft, ArrowRight, Check, Droplets, FlaskConical, Leaf, ScanLine, ShieldCheck, Sprout } from 'lucide-react'
import { useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { ProductImagePlaceholder } from '../components/ui/ProductImagePlaceholder'
import type { Product } from '../data/products'
import { ironFormat, sublingualComparison, sublingualDifference, sublingualProducts, sublingualRange, whySublingual } from '../data/sublingual'
import '../styles/stevia-product.css'
import '../styles/sublingual-product.css'

const benefitIcons = [Sprout, Leaf, ShieldCheck, Droplets, FlaskConical, ScanLine]
function BenefitCards({ items }: { items: { title: string; text: string }[] }) {
  return <div className="sublingual-card-grid">{items.map(({ title, text }, index) => { const Icon = benefitIcons[index % benefitIcons.length]; return <article className="stevia-card" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article> })}</div>
}

export function SublingualProduct({ product }: { product: Product }) {
  const content = sublingualRange.find((item) => item.slug === product.slug)!
  useEffect(() => {
    const oldTitle = document.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const oldDescription = meta?.content
    document.title = `${product.name} | Sublingual Nutrition | Nature’s Nurture`
    if (meta) meta.content = product.description
    return () => { document.title = oldTitle; if (meta && oldDescription !== undefined) meta.content = oldDescription }
  }, [product.name, product.description])

  return <main className="page-shell page-shell--light stevia-story sublingual-story" style={{ '--sublingual-accent': content.accent } as CSSProperties}>
    <section className="sublingual-hero"><div className="container"><nav className="sublingual-breadcrumb" aria-label="Breadcrumb"><Link to="/products">Products</Link><span aria-hidden="true">/</span><Link to="/products?category=Sublingual+Nutrition#catalogue">Sublingual Nutrition</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav><div className="stevia-split"><div><p className="eyebrow">Sublingual Nutrition</p><h1>{product.name}</h1><p className="sublingual-hero__lead">{product.description}</p><ul className="sublingual-chips" aria-label="Product highlights">{content.highlights.map((item) => <li key={item}>{item}</li>)}</ul><div className="cta-row"><Link to="/contact" className="button button--primary">Request product details <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/products" className="stevia-text-link"><ArrowLeft size={17} aria-hidden="true" />Back to catalogue</Link></div></div><figure className="sublingual-hero__art">{product.image ? <img src={product.image} alt={product.name} width={800} height={1000} fetchPriority="high" /> : <ProductImagePlaceholder name={product.name} accent={product.accent} />}</figure></div></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="sublingual-overview"><div className="container stevia-split" data-stevia-reveal><div><p className="eyebrow">Product Overview</p><h2 id="sublingual-overview">Daily Nutrition. Thoughtfully Delivered.</h2><p>{content.overview}</p></div><figure className="sublingual-secondary-art"><ProductImagePlaceholder name={product.name} accent={product.accent} supporting /></figure></div></section>

    <section className="stevia-section" aria-labelledby="sublingual-benefits"><div className="container" data-stevia-reveal><p className="eyebrow">{product.name}</p><h2 id="sublingual-benefits">Unique Benefits</h2><BenefitCards items={content.benefits} /></div></section>

    <section className="stevia-section sublingual-formula" aria-labelledby="sublingual-nutrients"><div className="container" data-stevia-reveal><p className="eyebrow">Key Nutrients / Formula</p><h2 id="sublingual-nutrients">{content.nutrientHeading}</h2>{content.nutrientIntro && <p className="sublingual-section-lead">{content.nutrientIntro}</p>}<div className={`sublingual-nutrients${content.nutrients.length === 8 ? ' sublingual-nutrients--eight' : ''}`}>{content.nutrients.map(({ title, form, points }) => <article className="stevia-card" key={title}><h3>{title}</h3><p className="sublingual-nutrient-form">{form}</p>{points && <ul className="stevia-checklist">{points.map((point) => <li key={point}><Check size={17} aria-hidden="true" /><span>{point}</span></li>)}</ul>}</article>)}</div></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="sublingual-why"><div className="container" data-stevia-reveal><p className="eyebrow">An Alternative Delivery Format</p><h2 id="sublingual-why">Why Sublingual?</h2><p className="sublingual-section-lead">Sublingual delivery uses the area beneath the tongue as an alternative to conventional tablet or capsule supplementation.</p><BenefitCards items={whySublingual} /></div></section>

    <section className="stevia-section sublingual-comparison" aria-labelledby="sublingual-comparison"><div className="container" data-stevia-reveal><p className="eyebrow">Understanding the Formats</p><h2 id="sublingual-comparison">Sublingual Delivery vs Traditional Pills</h2><div className="sublingual-table"><table><caption className="sublingual-table__caption">A comparison of delivery formats</caption><thead><tr><th scope="col">Factor</th><th scope="col">Traditional Pills</th><th scope="col">Sublingual</th></tr></thead><tbody>{sublingualComparison.map(({ factor, pills, spray }) => <tr key={factor}><th scope="row">{factor}</th><td><span className="sublingual-table__mobile-label" aria-hidden="true">Traditional Pills</span>{pills}</td><td><span className="sublingual-table__mobile-label" aria-hidden="true">Sublingual</span>{spray}</td></tr>)}</tbody></table></div></div></section>

    {product.slug === 'iron' && <section className="stevia-section stevia-section--white" aria-labelledby="sublingual-iron"><div className="container" data-stevia-reveal><p className="eyebrow">Iron &amp; Everyday Convenience</p><h2 id="sublingual-iron">Why Sublingual Iron?</h2><div className="sublingual-iron-panels">{ironFormat.map(({ title, points }) => <article className="stevia-card" key={title}><h3>{title}</h3><dl>{points.map((point) => <div key={point.title}><dt>{point.title}</dt><dd>{point.text}</dd></div>)}</dl></article>)}</div></div></section>}

    <section className="stevia-section sublingual-delivery" aria-labelledby="sublingual-delivery"><div className="container" data-stevia-reveal><div className="stevia-editorial"><div><p className="eyebrow">How the Delivery Format Works</p><h2 id="sublingual-delivery">The Sublingual Difference</h2></div><p>A spray applied beneath the tongue is designed for absorption through the oral mucosa, reducing reliance on normal digestive processing.</p></div><BenefitCards items={sublingualDifference} /></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="sublingual-use"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Your Daily Routine</p><h2 id="sublingual-use">How to Use</h2></div><div className="sublingual-use-panel"><Droplets size={30} aria-hidden="true" /><p>{product.usage}</p><span>Always follow the current product label.</span></div></div></section>

    <section className="stevia-section" aria-labelledby="sublingual-quality"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Formulation. Ingredients. Manufacturing.</p><h2 id="sublingual-quality">Quality &amp; Product Standards</h2></div><div><p>The Sublingual Nutrition range is presented within Nature’s Nurture’s broader quality-focused product philosophy, with emphasis on formulation consistency, ingredient quality and controlled manufacturing.</p><Link to="/certifications" className="stevia-text-link">Explore quality standards <ArrowRight size={17} aria-hidden="true" /></Link></div></div></section>

    <section className="stevia-section stevia-section--white stevia-related" aria-labelledby="sublingual-related"><div className="container"><p className="eyebrow">Four Products. One Thoughtful Format.</p><h2 id="sublingual-related">Explore the Sublingual Range</h2><div className="stevia-related__grid">{sublingualProducts.filter((item) => item.slug !== product.slug).map((item) => <div className="sublingual-related-card" key={item.slug} data-stevia-reveal><ProductCard product={item} /></div>)}</div></div></section>


  </main>
}
