import { ArrowRight, Check, Clock3, Coffee, Droplets, Leaf, Milk, PackageCheck, Sprout, Utensils, Wheat } from 'lucide-react'
import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { catalogueProducts } from '../data/products'
import { cerealBenefits, cerealFlavours, cerealImportant, cerealLifestyle, cerealNutrition, cerealOverview, cerealProtein, cerealUses, cerealVitamins } from '../data/cerealRange'
import '../styles/stevia-product.css'
import '../styles/cereal-range.css'

const image = (file: string) => `${import.meta.env.BASE_URL}products/cereal/${file}`
const icons = [Clock3, Sprout, Wheat, Utensils, Milk, Leaf, Coffee, Droplets]
const related = ['stevia-sachets', 'zingo', 'infant-formula-stage-1'].map((slug) => catalogueProducts.find((product) => product.slug === slug)).filter((product) => product !== undefined).map((product) => product.slug === 'infant-formula-stage-1' ? { ...product, name: 'Infant Formula' } : product)

function Cards({ items, columns = 4 }: { items: readonly { title: string; text: string }[]; columns?: number }) {
  return <div className={`cereal-grid cereal-grid--${columns}`}>{items.map(({ title, text }, index) => { const Icon = icons[index % icons.length]; return <article className="stevia-card" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article> })}</div>
}

export function CerealRange() {
  const [flavourIndex, setFlavourIndex] = useState(0)
  const flavour = cerealFlavours[flavourIndex]
  const tabs = useRef<(HTMLButtonElement | null)[]>([])


  function changeTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % cerealFlavours.length
    else if (event.key === 'ArrowLeft') next = (index + cerealFlavours.length - 1) % cerealFlavours.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = cerealFlavours.length - 1
    else return
    event.preventDefault()
    setFlavourIndex(next)
    tabs.current[next]?.focus()
  }

  return <main className="page-shell page-shell--light stevia-story cereal-story">
    <section className="stevia-hero cereal-hero"><div className="container stevia-split"><div><p className="eyebrow">Cereal &amp; Meal Replacement</p><h1>Power-Packed Nutrition for Everyday Life.</h1><p>Nature’s Nurture Cereal &amp; Meal Replacement is a convenient breakfast and meal-replacement range designed around balanced nutrition, everyday convenience and five distinct flavours.</p><p>Quick to prepare with milk, water, or a combination of both, the range is positioned for busy mornings, meal replacement, snacks and everyday nourishment.</p><div className="cta-row"><a href="#cereal-flavours" className="button button--primary">Explore the flavours <ArrowRight size={18} aria-hidden="true" /></a><Link to="/contact" className="stevia-text-link">Request product details <ArrowRight size={17} aria-hidden="true" /></Link></div></div><figure className="stevia-art cereal-hero__art"><img src={image('cereal-range-hero.png')} alt="Chocolate Crave, Banana Bliss and Strawberry Sunrise packs with cereal bowls and shakes in a bright outdoor setting" width={1448} height={1086} fetchPriority="high" /></figure></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="cereal-overview"><div className="container" data-stevia-reveal><div className="stevia-editorial"><div><p className="eyebrow">Everyday Nutrition</p><h2 id="cereal-overview">More Than Just Cereal</h2></div><p>Nature’s Nurture is presented as a breakfast cereal and instant meal-replacement mix containing whole grains, protein, fibre and essential vitamins. It is designed for health-conscious individuals, busy professionals, parents and families looking for a practical everyday nutrition option.</p></div><Cards items={cerealOverview} /></div></section>

    <section className="stevia-section cereal-range-intro" aria-labelledby="cereal-range"><div className="container" data-stevia-reveal><div className="stevia-split"><div><p className="eyebrow">The flavour collection</p><h2 id="cereal-range">Five Flavours. One Everyday Range.</h2><a href="#cereal-flavours" className="stevia-text-link">Find your flavour <ArrowRight size={17} aria-hidden="true" /></a></div><figure className="stevia-art"><img src={image('cereal-range-story.png')} alt="Chocolate Crave, Custard Dream and Strawberry Sunrise packs beside cereal bowls" width={1448} height={1086} loading="lazy" /></figure></div><div className="cereal-flavour-cards">{cerealFlavours.map((item) => <article className="stevia-card" key={item.name} style={{ '--flavour-accent': item.accent } as CSSProperties}><div className="cereal-flavour-cards__image"><img src={image(item.image)} alt={`Nature’s Nurture ${item.name}`} loading="lazy" /></div><h3>{item.name}</h3><p>{item.description}</p></article>)}</div></div></section>

    <section className="stevia-section stevia-section--white cereal-selector" id="cereal-flavours" aria-labelledby="cereal-selector-heading"><div className="container"><p className="eyebrow">One range. Your flavour.</p><h2 id="cereal-selector-heading">Explore the Flavours</h2><div className="cereal-tabs" role="tablist" aria-label="Cereal flavours">{cerealFlavours.map((item, index) => <button key={item.slug} ref={(element) => { tabs.current[index] = element }} id={`tab-${item.slug}`} role="tab" type="button" aria-selected={index === flavourIndex} aria-controls="cereal-flavour-panel" tabIndex={index === flavourIndex ? 0 : -1} onClick={() => setFlavourIndex(index)} onKeyDown={(event) => changeTab(event, index)}>{item.name}</button>)}</div><div className="cereal-flavour-panel" role="tabpanel" id="cereal-flavour-panel" aria-labelledby={`tab-${flavour.slug}`} tabIndex={0} style={{ '--flavour-accent': flavour.accent } as CSSProperties}><div className="stevia-split cereal-flavour-panel__content" key={flavour.slug}><figure className="cereal-flavour-panel__image"><img src={image(flavour.image)} alt={`Nature’s Nurture ${flavour.name} cereal and meal replacement pack`} /></figure><div><p className="eyebrow">Cereal &amp; Meal Replacement · 0{flavourIndex + 1} / 05</p><h3>{flavour.name}</h3><p className="cereal-flavour-panel__description">{flavour.description}</p><Link to="/contact" className="button button--primary">Request product details <ArrowRight size={18} aria-hidden="true" /></Link></div></div></div></div></section>

    <section className="stevia-section cereal-strawberry" aria-labelledby="cereal-strawberry"><div className="container stevia-split" data-stevia-reveal><figure className="stevia-art"><img src={image('strawberry-spotlight.png')} alt="Strawberry cereal and meal replacement pack beside a berry-topped bowl and milk splash" width={1448} height={1086} loading="lazy" /></figure><div><p className="eyebrow">Flavour Spotlight</p><h2 id="cereal-strawberry">Strawberry Sunrise</h2><p className="cereal-feature-line">Sweet and vibrant flavour.</p><p>Strawberry Sunrise brings a bright fruit-led flavour profile to the Nature’s Nurture range, while remaining part of the same convenient cereal and meal-replacement format.</p></div></div></section>

    <section className="stevia-section" aria-labelledby="cereal-benefits"><div className="container" data-stevia-reveal><p className="eyebrow">Practical everyday nourishment</p><h2 id="cereal-benefits">Unique Benefits</h2><Cards items={cerealBenefits} /></div></section>

    <section className="stevia-section stevia-section--sage" aria-labelledby="cereal-preparation"><div className="container" data-stevia-reveal><div className="stevia-editorial"><div><p className="eyebrow">Fits into your day</p><h2 id="cereal-preparation">Quick &amp; Easy Preparation</h2></div><p>Quick and easy to prepare with milk, water, or a combination of both.</p></div><Cards items={[{ title: 'Simple Steps', text: 'Transforms into a smooth, satisfying meal with milk, water, or both.' }, { title: 'Busy Lifestyles', text: 'Designed for busy mornings and on-the-go lifestyles.' }]} columns={2} /><p className="cereal-pack-guidance"><PackageCheck size={22} aria-hidden="true" />Follow current pack preparation instructions.</p></div></section>

    <section className="stevia-section stevia-section--white cereal-nutrition-main" aria-labelledby="cereal-serving"><div className="container" data-stevia-reveal><p className="eyebrow">The supplied nutritional profile</p><h2 id="cereal-serving">Balanced Nutrition Per 50g Serving</h2><dl className="cereal-nutrition">{cerealNutrition.map((item) => <div key={item.title}><dt>{item.title}</dt><dd><strong>{item.serving}</strong>{'nrv' in item && <span>{item.nrv} NRV</span>}</dd></div>)}</dl><p className="cereal-note">NRV based on a 2000 calorie diet, as stated in the supplied product material.</p></div></section>

    <section className="stevia-section" aria-labelledby="cereal-vitamins"><div className="container" data-stevia-reveal><p className="eyebrow">Per 50g serving</p><h2 id="cereal-vitamins">Vitamins &amp; Minerals</h2><dl className="cereal-vitamins">{cerealVitamins.map(({ title, value, nrv }) => <div key={title}><dt>{title}</dt><dd><strong>{value}</strong><span>per 50g · {nrv} NRV</span></dd></div>)}</dl><p className="cereal-note">Additional nutrients identified in the supplied material include Iron, Vitamin D, Potassium, Fibre and Protein.</p></div></section>

    <section className="stevia-section stevia-section--compact cereal-hundred" aria-labelledby="cereal-hundred"><div className="container" data-stevia-reveal><div className="cereal-hundred__panel"><h2 id="cereal-hundred">Per 100g Nutritional Profile</h2><dl className="cereal-nutrition cereal-nutrition--secondary">{cerealNutrition.map(({ title, hundred }) => <div key={title}><dt>{title}</dt><dd><strong>{hundred}</strong></dd></div>)}</dl><p className="cereal-note">Sodium Information: The supplied nutritional material lists 95.6 mg sodium per 100 g.</p></div></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="cereal-protein"><div className="container" data-stevia-reveal><div className="stevia-editorial"><div><p className="eyebrow">From the supplied product material</p><h2 id="cereal-protein">Protein &amp; Fibre</h2></div><div className="cereal-protein-values"><p><strong>9.5 g</strong><span>protein per 50 g</span></p><p><strong>19 g</strong><span>protein per 100 g</span></p></div></div><Cards items={cerealProtein} columns={3} /></div></section>

    <section className="stevia-section" aria-labelledby="cereal-omega"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Omega-3 &amp; Omega-6</p><h2 id="cereal-omega">Omega Fatty Acids</h2><p>The product material positions the range as containing Omega-3 and Omega-6 fatty acids.</p></div><div className="cereal-omega-values"><Leaf size={30} aria-hidden="true" /><h3>Omega-3</h3><dl><div><dt>Per 50 g</dt><dd>95.9 mg</dd></div><div><dt>Per 100 g</dt><dd>191.8 mg</dd></div></dl></div></div></section>

    <section className="stevia-section stevia-section--sage" aria-labelledby="cereal-uses"><div className="container" data-stevia-reveal><p className="eyebrow">Breakfast, snacks &amp; recipes</p><h2 id="cereal-uses">More Than Just Cereal</h2><Cards items={cerealUses} /></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="cereal-lifestyle"><div className="container" data-stevia-reveal><p className="eyebrow">Everyday versatility</p><h2 id="cereal-lifestyle">Beyond Breakfast</h2><Cards items={cerealLifestyle} columns={3} /><div className="cereal-serving-ideas"><h3>Serving suggestions</h3><ul>{['Smoothies', 'Parfaits', 'Overnight oats', 'Baking'].map((text) => <li key={text}>{text}</li>)}</ul></div></div></section>

    <section className="stevia-section stevia-section--compact" aria-labelledby="cereal-polyols"><div className="container" data-stevia-reveal><div className="cereal-polyols"><div><Leaf size={28} aria-hidden="true" /><h2 id="cereal-polyols">No Added Polyols</h2></div><p>The supplied product material states that Nature’s Nurture contains no added polyols (sugar alcohols).</p></div></div></section>

    <section className="stevia-section cereal-quality" aria-labelledby="cereal-quality"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Standards referenced in the source</p><h2 id="cereal-quality">Quality &amp; Manufacturing</h2></div><div><p>Quality standards referenced in the supplied product material include NIHT, GMP, HACCP, ISO 22000:2018 and SHUDDHA.</p><ul className="cereal-quality__references" aria-label="Referenced quality standards">{['NIHT', 'GMP', 'HACCP', 'ISO 22000:2018', 'SHUDDHA'].map((text) => <li key={text}>{text}</li>)}</ul></div></div></section>

    <section className="stevia-section cereal-product-story" aria-labelledby="cereal-story"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Nature’s Nurture</p><h2 id="cereal-story">Nourishment from Nature. Power for Your Day.</h2></div><p>The Nature’s Nurture cereal and meal-replacement range is built around convenient preparation, whole grains, protein, fibre and essential nutrients, with five flavours designed to fit modern everyday routines.</p></div></section>

    <section className="stevia-section stevia-section--white stevia-related" aria-labelledby="cereal-related"><div className="container"><p className="eyebrow">Everyday essentials from the wider range</p><h2 id="cereal-related">Explore More from the Portfolio</h2><div className="stevia-related__grid">{related.map((product) => <div className="cereal-related-item" key={product.id} data-stevia-reveal><ProductCard product={product} /></div>)}</div></div></section>

    <section className="stevia-section cereal-trade" aria-labelledby="cereal-trade"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Retail &amp; wholesale</p><h2 id="cereal-trade">Interested in Nature’s Nurture Cereal &amp; Meal Replacement?</h2></div><div><p>Connect with our team for product information, retail opportunities and wholesale enquiries.</p><div className="cta-row"><Link to="/retailers" className="button button--inverted">Retail &amp; wholesale enquiries <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/contact" className="button button--ghost">Contact us <ArrowRight size={18} aria-hidden="true" /></Link></div></div></div></section>

    <section className="stevia-section stevia-section--compact cereal-information" aria-labelledby="cereal-information"><div className="container"><div className="cereal-information__panel"><h2 id="cereal-information">Important Product Information</h2><ul className="stevia-checklist">{cerealImportant.map((text) => <li key={text}><Check size={17} aria-hidden="true" /><span>{text}</span></li>)}</ul></div></div></section>
  </main>
}
