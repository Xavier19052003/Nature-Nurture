import { OptimizedImage } from '../components/ui/OptimizedImage'
import { ArrowRight, Backpack, BriefcaseBusiness, Check, Clock3, Coins, Hand, Info, Leaf, Luggage, Moon, PackageCheck, School, Shirt, Sun, Tent, Users, Waves } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DetailTable } from '../components/ui/DetailTable'
import { getProductHref, products, type Product } from '../data/products'
import { mosquitoBenefits, mosquitoCommunity, mosquitoComparison, mosquitoDirections, mosquitoMechanism, mosquitoPatchVariants, mosquitoTraditionalMethods, mosquitoUsage, mosquitoValue, type MosquitoPatchVariant } from '../data/mosquitoPatches'
import '../styles/mosquito-product.css'

const benefitIcons = { lasting: Clock3, clothing: Shirt, deet: Leaf, application: Hand, portable: Backpack, equipment: PackageCheck, outdoors: Tent, family: Users, value: Coins }
const useCaseIcons = { tent: Tent, waves: Waves, school: School, luggage: Luggage, briefcase: BriefcaseBusiness, sun: Sun, moon: Moon }

export function MosquitoPatchProduct({ product, variant }: { product: Product; variant: MosquitoPatchVariant }) {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = meta?.content
    document.title = `${product.name} | Nature’s Nurture`
    if (meta) meta.content = variant.supporting
    return () => { document.title = previousTitle; if (meta && previousDescription !== undefined) meta.content = previousDescription }
  }, [product.name, variant.supporting])
  const relatedVariant = mosquitoPatchVariants.find((item) => item.slug !== variant.slug)!
  const related = products.find((item) => item.slug === relatedVariant.slug)!
  const benefits = variant.benefits.map((id) => mosquitoBenefits.find((benefit) => benefit.id === id)!)

  return (
    <main className="page-shell page-shell--light mosquito-page">
      <section className="patch-hero">
        <div className="container patch-split">
          <div className="patch-hero__copy">
            <p className="eyebrow">Family Protection</p>
            <h1>Flies and Mosquito Patches{' '}<span>for {variant.audience}</span></h1>
            <p className="patch-lead">{variant.hero}</p>
            <p>{variant.supporting}</p>
            <div className="patch-tags" aria-label="Product features">
              <span>Non-toxic</span><span>DEET-free</span><span>Long-lasting protection</span>
            </div>
            <div className="cta-row">

              <a href="#patch-directions" className="button button--secondary">See how to use <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="patch-hero__visual">
            <OptimizedImage src={product.image} alt={product.name} width={1122} height={1402} fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="patch-section patch-overview" aria-labelledby="patch-overview-heading">
        <div className="container patch-editorial">
          <div><p className="eyebrow">Everyday family use</p><h2 id="patch-overview-heading">Product Overview</h2></div>
          <p>{variant.overview}</p>
        </div>
      </section>

      <section className="patch-section patch-section--soft" aria-labelledby="patch-benefits-heading">
        <div className="container">
          <p className="eyebrow">Practical protection</p>
          <h2 id="patch-benefits-heading">Unique Benefits</h2>
          <div className="patch-benefits">
            {benefits.map(({ id, title, description }) => {
              const Icon = benefitIcons[id]
              return <article className="patch-card" key={id}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>
            })}
          </div>
        </div>
      </section>

      <section className="patch-section patch-section--forest" aria-labelledby="patch-mechanism-heading">
        <div className="container patch-editorial">
          <div><p className="eyebrow">The patch format</p><h2 id="patch-mechanism-heading">How the Protection Works</h2></div>
          <div>{mosquitoMechanism.map((text) => <p key={text}>{text}</p>)}</div>
        </div>
      </section>

      <section className="patch-section" id="patch-directions" aria-labelledby="patch-directions-heading">
        <div className="container">
          <p className="eyebrow">Peel and stick</p><h2 id="patch-directions-heading">Directions for Use</h2>
          <ol className="patch-directions">
            {mosquitoDirections.map(({ number, title, description }) => <li className="patch-card" key={number}><span className="patch-step">{number}</span><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
          <p className="patch-application"><Shirt size={22} aria-hidden="true" />Apply to clothing or nearby objects. Do not apply directly to skin.</p>
        </div>
      </section>

      <section className="patch-section patch-section--soft" aria-labelledby="patch-use-cases-heading">
        <div className="container">
          <p className="eyebrow">Portable protection</p><h2 id="patch-use-cases-heading">Made for Everyday Protection</h2>
          <div className={`patch-use-cases patch-use-cases--${variant.audience.toLowerCase()}`}>
            {variant.useCases.map((item) => {
              const Icon = useCaseIcons[item.icon]
              return <article key={item.title} className="patch-card"><Icon size={24} aria-hidden="true" /><h3>{item.title}</h3>{'description' in item && <p>{item.description}</p>}</article>
            })}
          </div>
          <div className="patch-community">
            <div><p className="eyebrow">Portability, ease of use &amp; affordability</p><h3>Designed for Everyday Life</h3></div>
            <div><p>{mosquitoCommunity.description}</p><ul className="patch-contexts">{mosquitoCommunity.contexts.map((context) => <li key={context}>{context}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="patch-section" aria-labelledby="patch-comparison-heading">
        <div className="container">
          <p className="eyebrow">A practical alternative</p><h2 id="patch-comparison-heading">WHY CHOOSE THE PATCH FORMAT?</h2>
          <DetailTable caption="Traditional sprays and Nature’s Nurture patches" columns={['Traditional Sprays', 'Nature’s Nurture Patches']} rows={mosquitoComparison.map(({ spray, patch }) => ({ id: spray, values: [spray, patch] }))} />
          <h3 className="patch-methods-heading">The patch format &amp; traditional methods</h3>
          <div className="patch-methods">
            {mosquitoTraditionalMethods.map(({ title, points }) => <article className="patch-card" key={title}><h4>{title}</h4><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="patch-section patch-section--soft" aria-labelledby="patch-value-heading">
        <div className="container patch-editorial">
          <div><p className="eyebrow">Cost-conscious everyday use</p><h2 id="patch-value-heading">Value &amp; Convenience</h2><p>{mosquitoValue.description}</p></div>
          <ul className="patch-checklist">{mosquitoValue.points.map((point) => <li key={point}><Check size={20} aria-hidden="true" /><span>{point}</span></li>)}</ul>
        </div>
      </section>

      <section className="patch-section" aria-labelledby="patch-usage-heading">
        <div className="container">
          <div className="patch-usage">
            <div><Info size={28} aria-hidden="true" /><p className="eyebrow">Application guidance</p><h2 id="patch-usage-heading">Important Usage Information</h2></div>
            <ul className="patch-checklist">{mosquitoUsage.map((point) => <li key={point}><Check size={20} aria-hidden="true" /><span>{point}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="patch-section patch-related" aria-labelledby="patch-related-heading">
        <div className="container patch-related__layout">
          <div className="patch-related__visual"><OptimizedImage src={related.image} alt={related.name} width={1122} height={1402} loading="lazy" /></div>
          <div><p className="eyebrow">Family Protection</p><h2 id="patch-related-heading">Also available for {relatedVariant.audience.toLowerCase()}</h2><h3>{related.name}</h3><p>{relatedVariant.hero}</p><Link to={getProductHref(related)} className="button button--primary">Explore {relatedVariant.audience === 'Adults' ? 'adult' : 'kids'} patches <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>

    </main>
  )
}
