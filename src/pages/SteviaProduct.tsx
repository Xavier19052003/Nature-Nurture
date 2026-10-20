import { OptimizedImage } from '../components/ui/OptimizedImage'
import { ArrowRight, BriefcaseBusiness, Check, Coffee, Cookie, CupSoda, Heart, Home, Leaf, Luggage, PackageCheck, Sprout, Utensils, Wheat, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { catalogueProducts } from '../data/products'
import '../styles/stevia-product.css'

const image = (file: string) => `${import.meta.env.BASE_URL}products/stevia/${file}.png`

const benefits = [
  { icon: Zap, title: 'Zero-Calorie Sweetness', text: 'Provides sweetness without adding calories.' },
  { icon: Leaf, title: 'Natural & Plant-Based', text: 'Positioned as a naturally derived sweetener from the stevia plant.' },
  { icon: Sprout, title: 'Alternative to Refined Sugar', text: 'A clean, more intentional sweetness option for consumers reducing refined sugar.' },
  { icon: PackageCheck, title: 'Convenient Single-Serve Format', text: 'Easy-to-use sachets designed for portioned, everyday use.' },
  { icon: Heart, title: 'Vegan-Friendly Positioning', text: 'Aligned to plant-based and vegan lifestyle preferences.' },
  { icon: Utensils, title: 'Keto & Low-Carb Positioning', text: 'Positioned to suit consumers following low-carb lifestyle goals.' },
  { icon: Sprout, title: 'Non-GMO Positioning', text: 'Presented as made with clean, natural ingredients.' },
  { icon: Coffee, title: 'Sugar-Reduction Choice', text: 'Helps consumers enjoy sweet foods and drinks while reducing sugar intake.' },
]

const applications = [
  { icon: Coffee, title: 'Hot & Cold Beverages' },
  { icon: Cookie, title: 'Baking & Desserts' },
  { icon: Wheat, title: 'Breakfast Cereals & Porridge' },
  { icon: CupSoda, title: 'Smoothies & Shakes' },
]

const overview = ['Zero-calorie sweetness', 'Natural & plant-based positioning', 'Convenient sachet format', 'Suitable for everyday use', 'Portable single-serve convenience']
const reasons = ['Convenient single-serve portions', 'Portable format', 'Everyday versatility', 'Plant-based sweetness', 'Suitable across drinks and food preparation', 'No need to change the foods and drinks consumers already enjoy']
const relatedSlugs = ['cereal-banana-bliss', 'zingo', 'cereal-chocolate-crave']

export function SteviaProduct() {


  return (
    <main className="page-shell page-shell--light stevia-story">
      <section className="stevia-hero">
        <div className="container stevia-split">
          <div className="stevia-hero__copy">
            <p className="eyebrow">Everyday Wellness</p>
            <h1>Stevia Sachets</h1>
            <p className="stevia-hero__tagline">Plant-based sweetness{' '}<br />for everyday life.</p>
            <p>Nature’s Nurture Stevia Sachets are positioned as a convenient, zero-calorie sweetening solution for consumers looking for a natural alternative to sugar in everyday foods and drinks.</p>
            <div className="stevia-highlights" aria-label="Product highlights">
              <span>Zero-Calorie Sweetness</span><span>Natural &amp; Plant-Based</span><span>100-sachet and 50-sachet packs</span><span>Single-Serve Convenience</span>
            </div>
            <div className="cta-row">

              <Link to="/products" className="stevia-text-link">Back to catalogue <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
          <figure className="stevia-art stevia-hero__art"><OptimizedImage src={image('stevia-hero')} alt="Nature’s Nurture Stevia Sachets pack beside tea, loose sachets and botanicals" width={1024} height={1536} fetchPriority="high" /></figure>
        </div>
      </section>

      <section className="stevia-section stevia-section--white" aria-labelledby="stevia-overview">
        <div className="container stevia-editorial" data-stevia-reveal>
          <div><p className="eyebrow">A considered everyday choice</p><h2 id="stevia-overview">Product Overview</h2><p>Nature’s Nurture Stevia Sachets are designed for consumers who want sweetness without the sugar. Positioned as a plant-based sweetener in a portable single-serve format, the product supports everyday use across beverages, baking and general food preparation.</p></div>
          <ul className="stevia-checklist stevia-overview-list">{overview.map((text) => <li key={text}><Check size={20} aria-hidden="true" /><span>{text}</span></li>)}</ul>
        </div>
      </section>

      <section className="stevia-section stevia-section--sage" aria-labelledby="stevia-benefits">
        <div className="container" data-stevia-reveal>
          <div className="stevia-section-heading"><p className="eyebrow">Sweetness, thoughtfully portioned</p><h2 id="stevia-benefits">Unique Benefits</h2></div>
          <div className="stevia-benefits">{benefits.map(({ icon: Icon, title, text }) => <article className="stevia-card" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="stevia-section stevia-sweetness" aria-labelledby="stevia-sweetness">
        <div className="container stevia-editorial" data-stevia-reveal>
          <div><p className="eyebrow">A more mindful choice</p><h2 id="stevia-sweetness">Sweetness Without{' '}<br />the Sugar</h2></div>
          <p>Nature’s Nurture Stevia is positioned for consumers who want to reduce sugar without giving up sweetness. It brings a cleaner, more mindful sweetness choice into everyday life, supporting a more intentional approach to food and drink.</p>
        </div>
      </section>

      <section className="stevia-section stevia-origin" aria-labelledby="stevia-origin">
        <div className="container" data-stevia-reveal>
          <div className="stevia-origin__panel">
            <div className="stevia-origin__mark" aria-hidden="true"><Sprout strokeWidth={1} /></div>
            <div><p className="eyebrow">Botanical origins</p><h2 id="stevia-origin">Naturally Derived from <em>Stevia rebaudiana</em></h2><p>Stevia is presented as a natural plant-based sweetener derived from the stevia plant. It is positioned as an alternative to artificial sweeteners and refined sugar, with a clean-label appeal suited to modern everyday wellness.</p></div>
          </div>
        </div>
      </section>

      <section className="stevia-section stevia-section--white" aria-labelledby="stevia-applications">
        <div className="container stevia-split stevia-applications" data-stevia-reveal>
          <figure className="stevia-art"><OptimizedImage src={image('stevia-baking')} alt="Stevia Sachets being poured into a baking bowl beside the pack and cookies" width={1198} height={1313} loading="lazy" /></figure>
          <div><p className="eyebrow">From the first sip to a sweet treat</p><h2 id="stevia-applications">Perfect For</h2><p>The concentrated powder format is positioned for flexible use across everyday drinks, baking and food preparation.</p><div className="stevia-applications__grid">{applications.map(({ icon: Icon, title }) => <article className="stevia-card" key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3></article>)}</div></div>
        </div>
      </section>

      <section className="stevia-section stevia-section--sage" aria-labelledby="stevia-convenience">
        <div className="container stevia-split" data-stevia-reveal>
          <div><p className="eyebrow">A little sweetness, wherever life goes</p><h2 id="stevia-convenience">Designed for Everyday Convenience</h2><p>The single-serve sachet format makes Stevia easy to keep at home, take to work, or use while travelling and commuting.</p><div className="stevia-places">{[{ icon: Home, title: 'Home' }, { icon: BriefcaseBusiness, title: 'Office' }, { icon: Luggage, title: 'On the Go' }].map(({ icon: Icon, title }) => <div key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3></div>)}</div></div>
          <figure className="stevia-art stevia-convenience__art"><OptimizedImage src={image('stevia-sachets-lifestyle')} alt="Individual Nature’s Nurture Stevia sachets arranged with green leaves and white flowers" width={1086} height={1448} loading="lazy" /></figure>
        </div>
      </section>

      <section className="stevia-section stevia-section--compact stevia-lifestyle" aria-labelledby="stevia-lifestyle">
        <div className="container" data-stevia-reveal><p className="eyebrow">Everyday wellness</p><h2 id="stevia-lifestyle">Lifestyle Positioning</h2><ul>{['Zero Calorie', 'Plant-Based', 'Vegan-Friendly', 'Keto-Friendly', 'Low-Carb'].map((label) => <li key={label}><Leaf size={17} aria-hidden="true" />{label}</li>)}</ul></div>
      </section>

      <section className="stevia-section stevia-section--compact stevia-format" aria-labelledby="stevia-format">
        <div className="container" data-stevia-reveal><div className="stevia-format__panel"><div><h2 className="eyebrow" id="stevia-format">Product Format</h2><h3>100-sachet and 50-sachet packs</h3><p>Available in 100-sachet and 50-sachet packs. A portable single-serve format designed for everyday sweetness.</p></div><PackageCheck size={64} strokeWidth={1} aria-hidden="true" /></div></div>
      </section>

      <section className="stevia-section stevia-section--white" aria-labelledby="stevia-reasons">
        <div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Fits into your day</p><h2 id="stevia-reasons">Why Choose Stevia Sachets</h2><p>A practical sweetness solution designed to fit naturally into modern daily routines.</p></div><ul className="stevia-checklist">{reasons.map((text) => <li key={text}><Check size={20} aria-hidden="true" /><span>{text}</span></li>)}</ul></div>
      </section>

      <section className="stevia-section stevia-section--compact stevia-information" aria-labelledby="stevia-information">
        <div className="container" data-stevia-reveal><div className="stevia-information__panel"><h2 id="stevia-information">Important Product Information</h2><p>Product positioning is based on the currently supplied approved material. Some packaging specifications may still require final confirmation.</p></div></div>
      </section>

      <section className="stevia-section stevia-related" aria-labelledby="stevia-related">
        <div className="container" data-stevia-reveal><p className="eyebrow">Everyday food &amp; drink</p><h2 id="stevia-related">Explore More from the Portfolio</h2><div className="stevia-related__grid">{relatedSlugs.map((slug) => catalogueProducts.find((item) => item.slug === slug)).filter((item) => item !== undefined).map((product) => <ProductCard key={product.id} product={product} />)}</div></div>
      </section>

      <section className="stevia-section stevia-trade" aria-labelledby="stevia-trade">
        <div className="container stevia-split" data-stevia-reveal><div><p className="eyebrow">Retail &amp; wholesale</p><h2 id="stevia-trade">Interested in stocking Nature’s Nurture Stevia?</h2><p>Connect with us for product information, retail opportunities and wholesale enquiries.</p><div className="cta-row"><Link to="/retailers" className="button button--inverted">Retail &amp; wholesale enquiries <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/contact" className="button button--ghost">Contact us <ArrowRight size={18} aria-hidden="true" /></Link></div></div><figure className="stevia-art stevia-trade__art"><OptimizedImage src={image('stevia-trade')} alt="Nature’s Nurture Stevia Sachets presented with tea, sugar cubes and botanicals on a dark green background" width={1024} height={1536} loading="lazy" /></figure></div>
      </section>
    </main>
  )
}
