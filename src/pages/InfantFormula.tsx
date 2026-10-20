import { OptimizedImage } from '../components/ui/OptimizedImage'
import { ArrowDown, ArrowRight, Baby, Brain, Check, Droplets, Heart, Leaf, Milk, PackageCheck, ShieldCheck, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DetailTable } from '../components/ui/DetailTable'
import { ProductCard } from '../components/ui/ProductCard'
import { catalogueProducts } from '../data/products'
import { balancedNutrition, formulaBenefits, formulaImportant, formulaIngredients, formulaMinerals, formulaNutrition, formulaProteins, formulaSafety, formulaStages, formulaVitamins, nurtureNutrients, parentPriorities, stageOnePositioning } from '../data/infantFormula'
import '../styles/stevia-product.css'
import '../styles/infant-formula.css'

const image = (file: string) => `${import.meta.env.BASE_URL}products/infant-formula/${file}`
const benefitIcons = [Milk, Droplets, Leaf, Sprout, Heart, Baby, PackageCheck, ShieldCheck]
const related = ['cereal-banana-bliss', 'stevia-sachets', 'cereal-chocolate-crave'].map((slug) => catalogueProducts.find((product) => product.slug === slug)).filter((product) => product !== undefined)

function Cards({ items, columns = 4 }: { items: readonly { title: string; text: string }[]; columns?: number }) {
  return <div className={`formula-grid formula-grid--${columns}`}>{items.map(({ title, text }, index) => {
    const Icon = benefitIcons[index % benefitIcons.length]
    return <article className="stevia-card" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
  })}</div>
}

function Snapshot({ stage }: { stage: 0 | 1 }) {
  return <div className="formula-snapshot"><p className="eyebrow">From the supplied product material</p><h3>Stage {stage + 1} Nutritional Snapshot</h3><DetailTable caption={`Stage ${stage + 1} nutritional snapshot`} columns={['Nutrient', 'Amount per 100 ml']} rows={formulaNutrition[stage].map(({ title, value, unit }) => ({ id: title, values: [title, `${value} ${unit}`] }))} /></div>
}

export function InfantFormula() {

  return <main className="page-shell page-shell--light stevia-story infant-story">
    <section className="stevia-hero formula-hero">
      <div className="container stevia-split">
        <div><p className="eyebrow">Infant Nutrition</p><h1>Infant Formula</h1><p className="stevia-hero__tagline">Gentle Nutrition for Life’s First Moments.</p><p>Nature’s Nurture Infant Formula is carefully developed around the nutritional needs of a baby’s first year, with Stage 1 for 0–6 months and Stage 2 for 6–12 months.</p>
          <div className="formula-stage-nav" aria-label="Explore the formula stages">{formulaStages.map((stage) => <a key={stage.number} href={`#stage-${stage.number}`} className={`formula-stage-link formula-stage-link--${stage.number}`}><span>Stage {stage.number}<ArrowDown size={16} aria-hidden="true" /></span><strong>{stage.age}</strong><small>{stage.title}</small></a>)}</div>
          <div className="cta-row"><Link to="/products" className="stevia-text-link">Back to catalogue <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </div>
        <div className="formula-hero__composition" aria-label="The two-stage Infant Formula range">
          <figure className="formula-hero__pack formula-hero__pack--first"><OptimizedImage src={image('stage-1.png')} alt="Nature’s Nurture Stage 1 Infant Starter Formula" width={768} height={775} fetchPriority="high" /><figcaption>Stage 1 <span>0–6 Months</span></figcaption></figure>
          <figure className="formula-hero__pack formula-hero__pack--second"><OptimizedImage src={image('stage-2.png')} loading="eager" alt="Nature’s Nurture Stage 2 Follow-On Formula" width={768} height={776} /><figcaption>Stage 2 <span>6–12 Months</span></figcaption></figure>
        </div>
      </div>
    </section>

    <section className="stevia-section stevia-section--white" aria-labelledby="formula-overview"><div className="container" data-stevia-reveal><div className="stevia-editorial"><div><p className="eyebrow">Gentle Nutrition</p><h2 id="formula-overview">A Foundation for Baby’s First Year</h2></div><p>Nature’s Nurture Infant Formula is presented as a two-stage infant nutrition range designed around nourishment, development, digestion, safety and quality throughout the first year.</p></div><div className="formula-summary">{[{ icon: Heart, text: 'Gentle & Nutritious' }, { icon: Brain, text: 'Brain Development Support' }, { icon: ShieldCheck, text: 'Immune Support' }, { icon: Baby, text: 'Stage-Specific Nutrition' }].map(({ icon: Icon, text }) => <div key={text}><Icon size={23} aria-hidden="true" /><h3>{text}</h3></div>)}</div></div></section>

    <section className="stevia-section formula-stage formula-stage--1" id="stage-1" aria-labelledby="formula-stage-1"><div className="container">
      <div className="stevia-split" data-stevia-reveal><figure className="stevia-art formula-stage__image"><OptimizedImage src={image(formulaStages[0].image)} alt={formulaStages[0].alt} width={768} height={775} loading="lazy" /></figure><div><p className="eyebrow formula-stage__label">Stage 1 · <span>0–6 Months</span></p><h2 id="formula-stage-1">Infant Formula Stage 1</h2><p className="formula-stage__lead">{formulaStages[0].positioning}</p><p>{formulaStages[0].copy}</p></div></div>
      <div className="formula-stage__information" data-stevia-reveal><h3 className="formula-subheading">Stage 1 Key Positioning</h3><Cards items={stageOnePositioning} /><Snapshot stage={0} /></div>
    </div></section>

    <section className="stevia-section stevia-section--white formula-transition" aria-labelledby="formula-transition"><div className="container stevia-split" data-stevia-reveal><div><p className="eyebrow">One range. Two stages.</p><h2 id="formula-transition">Continuing the Journey</h2><p>As babies grow, the range moves from Stage 1 Infant Starter Formula to Stage 2 Follow-On Formula.</p><a className="stevia-text-link" href="#stage-2">Explore Stage 2 <ArrowDown size={17} aria-hidden="true" /></a></div><figure className="stevia-art"><OptimizedImage src={image('infant-range.png')} alt="Nature’s Nurture pink Stage 1 and lavender Stage 2 formula packs in a nursery" width={1254} height={1254} loading="lazy" /></figure></div></section>

    <section className="stevia-section formula-stage formula-stage--2" id="stage-2" aria-labelledby="formula-stage-2"><div className="container"><div className="stevia-split" data-stevia-reveal><figure className="stevia-art formula-stage__image"><OptimizedImage src={image(formulaStages[1].image)} alt={formulaStages[1].alt} width={768} height={776} loading="lazy" /></figure><div><p className="eyebrow formula-stage__label">Stage 2 · <span>6–12 Months</span></p><h2 id="formula-stage-2">Infant Formula Stage 2</h2><p>{formulaStages[1].copy}</p></div></div><div className="formula-stage__information" data-stevia-reveal><Snapshot stage={1} /></div></div></section>

    <section className="stevia-section" aria-labelledby="formula-benefits"><div className="container" data-stevia-reveal><p className="eyebrow">The range at a glance</p><h2 id="formula-benefits">Unique Benefits</h2><Cards items={formulaBenefits} /></div></section>

    <section className="stevia-section stevia-section--sage" aria-labelledby="formula-balanced"><div className="container" data-stevia-reveal><p className="eyebrow">Our supplied product positioning</p><h2 id="formula-balanced">Balanced Nutrition Inspired by Nature</h2><Cards items={balancedNutrition} /></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="formula-protein"><div className="container" data-stevia-reveal><p className="eyebrow">Protein Composition</p><h2 id="formula-protein">Protein Composition in Supplied Product Material</h2><div className="formula-grid formula-grid--3 formula-protein">{formulaProteins.map(({ value, title, text }) => <article className="stevia-card" key={title}><p className="formula-protein__value">{value}</p><h3>{title}</h3><p>{text}</p></article>)}</div><p className="formula-note">Stage applicability of this protein composition should be confirmed before final launch.</p><aside className="formula-carnitine"><h3>Carnitine &amp; Taurine</h3><p>The supplied product material identifies Carnitine and Taurine as additions to the formula.</p></aside></div></section>

    <section className="stevia-section" aria-labelledby="formula-fatty-acids"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Omega-3 &amp; Omega-6</p><h2 id="formula-fatty-acids">Essential Fatty Acids</h2><p>The supplied material associates these essential fatty acids with brain and nervous-system development.</p></div><div className="formula-grid formula-grid--2 formula-fatty-acids"><article className="stevia-card"><Leaf size={25} aria-hidden="true" /><p className="eyebrow">Omega-6</p><h3>Linoleic Acid</h3></article><article className="stevia-card"><Leaf size={25} aria-hidden="true" /><p className="eyebrow">Omega-3</p><h3>Alpha-Linolenic Acid</h3></article></div></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="formula-vitamins"><div className="container" data-stevia-reveal><p className="eyebrow">The supplied nutrient profile</p><h2 id="formula-vitamins">Complete Vitamin Support</h2><Cards items={formulaVitamins} columns={3} /></div></section>

    <section className="stevia-section stevia-section--sage" aria-labelledby="formula-nurture"><div className="container" data-stevia-reveal><p className="eyebrow">Nourishment through the first year</p><h2 id="formula-nurture">Nutrients That Nurture</h2><div className="formula-grid formula-grid--4 formula-nurture">{nurtureNutrients.map(({ title, points }, index) => { const Icon = [Brain, Baby, ShieldCheck, Sprout][index]; return <article className="stevia-card" key={title}><Icon size={26} aria-hidden="true" /><h3>{title}</h3><ul>{points.map((text) => <li key={text}>{text}</li>)}</ul></article> })}</div></div></section>

    <section className="stevia-section" aria-labelledby="formula-minerals"><div className="container" data-stevia-reveal><p className="eyebrow">Essential micronutrients</p><h2 id="formula-minerals">Essential Minerals</h2><Cards items={formulaMinerals} columns={3} /></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="formula-ingredients"><div className="container" data-stevia-reveal><p className="eyebrow">The supplied ingredient profile</p><h2 id="formula-ingredients">Quality Ingredients Parents Can Trust</h2><div className="formula-grid formula-grid--4 formula-ingredients">{formulaIngredients.map(({ title, points }) => <article className="stevia-card" key={title}><h3>{title}</h3><ul>{points.map((text) => <li key={text}>{text}</li>)}</ul></article>)}</div><aside className="formula-allergen" aria-labelledby="formula-allergen"><ShieldCheck size={30} aria-hidden="true" /><div><h3 id="formula-allergen">Allergen Information</h3><p>Contains Cow’s Milk and Soy.</p></div></aside></div></section>

    <section className="stevia-section" aria-labelledby="formula-priorities"><div className="container" data-stevia-reveal><div className="stevia-split formula-priorities-intro"><div><p className="eyebrow">Our supplied product positioning</p><h2 id="formula-priorities">Designed Around Everyday Parent Priorities</h2></div><figure className="stevia-art"><OptimizedImage src={image('infant-stage-2-lifestyle.png')} alt="Nature’s Nurture Stage 2 Follow-On Formula beside a baby in a nursery" width={1254} height={1254} loading="lazy" /></figure></div><div className="formula-grid formula-grid--2 formula-priorities">{parentPriorities.map(({ title, question, text }) => <article className="stevia-card" key={title}><p className="eyebrow">{title}</p><h3>{question}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="stevia-section formula-safety" aria-labelledby="formula-safety"><div className="container"><div className="stevia-split" data-stevia-reveal><div><p className="eyebrow">Quality through every step</p><h2 id="formula-safety">Safety Comes First</h2></div><figure className="stevia-art"><OptimizedImage src={image('infant-quality.png')} alt="Nature’s Nurture Stage 1 formula pack with a laboratory quality-control scene" width={1254} height={1254} loading="lazy" /></figure></div><ol className="formula-process" data-stevia-reveal>{formulaSafety.map(({ title, text }, index) => <li key={title}><span className="formula-process__number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

    <section className="stevia-section formula-preparation" aria-labelledby="formula-preparation"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Packaging-led guidance</p><h2 id="formula-preparation">Simple Preparation</h2></div><div className="formula-preparation__guidance"><PackageCheck size={32} aria-hidden="true" /><p className="formula-preparation__primary">Always follow preparation guidelines on packaging.</p><p>Refer to current pack instructions for stage-specific preparation.</p></div></div></section>

    <section className="stevia-section stevia-section--compact formula-information" aria-labelledby="formula-information"><div className="container" data-stevia-reveal><div className="formula-information__panel"><h2 id="formula-information">Important Product Information</h2><ul className="stevia-checklist">{formulaImportant.map((text) => <li key={text}><Check size={18} aria-hidden="true" /><span>{text}</span></li>)}</ul></div></div></section>

    <section className="stevia-section stevia-related" aria-labelledby="formula-related"><div className="container"><p className="eyebrow">The wider Nature’s Nurture portfolio</p><h2 id="formula-related">Explore More from the Portfolio</h2><div className="stevia-related__grid">{related.map((product) => <div className="formula-related-item" key={product.id} data-stevia-reveal><ProductCard product={product} /></div>)}</div></div></section>

    <section className="stevia-section formula-trade" aria-labelledby="formula-trade"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Retail &amp; wholesale</p><h2 id="formula-trade">Interested in Nature’s Nurture Infant Nutrition?</h2></div><div><p>Connect with our team for product information, retail opportunities and wholesale enquiries.</p><div className="cta-row"><Link to="/retailers" className="button button--inverted">Retail &amp; wholesale enquiries <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/contact" className="button button--ghost">Contact us <ArrowRight size={18} aria-hidden="true" /></Link></div></div></div></section>
  </main>
}
