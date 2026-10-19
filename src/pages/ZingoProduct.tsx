import { ArrowLeft, ArrowRight, Check, Droplets, GlassWater, Luggage, PackageCheck, Palette, PartyPopper, Sparkles, Users, Wallet } from 'lucide-react'
import { useRef, useState, type CSSProperties, type KeyboardEvent, type UIEvent } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { catalogueProducts } from '../data/products'
import { zingoAssets } from '../data/zingoAssets'
import { zingoBenefits, zingoCollections, zingoCustomise, zingoFlavours, zingoGlance, zingoMoments, zingoPreparation, zingoShelfPoints, type ZingoFlavour } from '../data/zingoExperience'
import '../styles/stevia-product.css'
import '../styles/zingo-product.css'

const asset = (file: string) => `${import.meta.env.BASE_URL}products/zingo/approved/${file}`
const findFlavour = (id: string) => zingoFlavours.find((flavour) => flavour.id === id)!
const heroFlavours = ['orange', 'berry', 'lemon', 'mango'].map(findFlavour)
const icons = [Wallet, Palette, Luggage, Droplets, Users, GlassWater, Sparkles, PartyPopper]
const related = ['cereal-banana-bliss', 'stevia-sachets', 'mosquito-repellent-patches-kids'].map((slug) => catalogueProducts.find((product) => product.slug === slug)).filter((product) => product !== undefined).map((product) => product.slug.startsWith('cereal-') ? { ...product, name: 'Cereal & Meal Replacement' } : product)

function ZingoImage({ flavour, sizes, eager = false, priority = false }: { flavour: ZingoFlavour; sizes: string; eager?: boolean; priority?: boolean }) {
  const meta = zingoAssets[flavour.id]
  return <img src={asset(`${flavour.id}-${meta.sizes[meta.sizes.length - 1]}.webp`)} srcSet={meta.sizes.map((width) => `${asset(`${flavour.id}-${width}.webp`)} ${width}w`).join(', ')} sizes={sizes} width={meta.width} height={meta.height} alt={flavour.alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
}

function Cards({ items }: { items: readonly { title: string; text: string }[] }) {
  return <div className="zing-card-grid">{items.map(({ title, text }, index) => { const Icon = icons[index % icons.length]; return <article className="stevia-card" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article> })}</div>
}

function closestSlide(event: UIEvent<HTMLDivElement>, change: (index: number) => void) {
  const track = event.currentTarget
  const left = track.getBoundingClientRect().left
  const distances = Array.from(track.children, (child) => Math.abs(child.getBoundingClientRect().left - left))
  change(distances.indexOf(Math.min(...distances)))
}

function scrollSlide(track: HTMLDivElement | null, index: number) {
  const slide = track?.children[index]
  if (!track || !slide) return
  const left = track.scrollLeft + slide.getBoundingClientRect().left - track.getBoundingClientRect().left
  track.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

export function ZingoProduct() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [collectionIndex, setCollectionIndex] = useState(0)
  const [flavourIndex, setFlavourIndex] = useState(0)
  const heroTrack = useRef<HTMLDivElement>(null)
  const flavourTrack = useRef<HTMLDivElement>(null)
  const collectionTabs = useRef<(HTMLButtonElement | null)[]>([])
  const flavourButtons = useRef<(HTMLButtonElement | null)[]>([])
  const collection = zingoCollections[collectionIndex]
  const flavours = collection.flavours.map(findFlavour)
  const flavour = flavours[flavourIndex]


  function selectCollection(index: number) { setCollectionIndex(index); setFlavourIndex(0) }
  function selectFlavour(index: number) { setFlavourIndex(index); scrollSlide(flavourTrack.current, index) }
  function navigateKeys(event: KeyboardEvent<HTMLButtonElement>, index: number, total: number, select: (index: number) => void, elements: (HTMLButtonElement | null)[]) {
    const next = event.key === 'ArrowRight' ? (index + 1) % total : event.key === 'ArrowLeft' ? (index + total - 1) % total : event.key === 'Home' ? 0 : event.key === 'End' ? total - 1 : null
    if (next === null) return
    event.preventDefault(); select(next); elements[next]?.focus()
  }

  return <main className="page-shell page-shell--light stevia-story zingo-story">
    <section className="zing-hero"><div className="container zing-hero__layout">
      <div className="zing-hero__copy"><p className="eyebrow">Energy &amp; Hydration</p><h1>Zingo</h1><p className="zing-brand-line">Stir. Sip. Smile.</p><p>A bold powdered drink range bringing colour, flavour and fun to everyday refreshment.</p><div className="zing-hero__value"><span>1 Sachet</span><strong>Makes 2 Litres</strong><p>Great-value refreshment designed for families, friends and everyday sharing.</p></div></div>
      <div className="zing-hero__gallery-area"><div className="zing-hero__gallery" ref={heroTrack} aria-label="Zingo hero flavours" tabIndex={0} onScroll={(event) => closestSlide(event, setHeroIndex)} onKeyDown={(event) => { if (event.target !== event.currentTarget || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return; event.preventDefault(); scrollSlide(heroTrack.current, Math.max(0, Math.min(3, heroIndex + (event.key === 'ArrowRight' ? 1 : -1)))) }}>
        {heroFlavours.map((item, index) => <figure className="zing-hero__product" key={item.id}><ZingoImage flavour={item} sizes="(max-width: 700px) 85vw, (max-width: 1100px) 43vw, 25vw" eager={index < 2} priority={index === 0} /><figcaption>{item.name}</figcaption></figure>)}
      </div><div className="zing-hero__controls" role="group" aria-label="Hero flavour controls"><button type="button" aria-label="Previous hero flavour" disabled={heroIndex === 0} onClick={() => scrollSlide(heroTrack.current, heroIndex - 1)}><ArrowLeft size={20} aria-hidden="true" /></button><span aria-live="polite">{heroIndex + 1} / {heroFlavours.length}</span><button type="button" aria-label="Next hero flavour" disabled={heroIndex === 3} onClick={() => scrollSlide(heroTrack.current, heroIndex + 1)}><ArrowRight size={20} aria-hidden="true" /></button></div></div>
      <div className="zing-hero__actions cta-row"><a href="#flavours" className="button button--primary">Explore the flavours <ArrowRight size={18} aria-hidden="true" /></a><Link to="/contact" className="stevia-text-link">Request product details <ArrowRight size={17} aria-hidden="true" /></Link></div>
    </div></section>

    <section className="stevia-section stevia-section--compact zing-glance" aria-labelledby="zing-glance"><div className="container"><h2 className="eyebrow" id="zing-glance">Zingo at a Glance</h2><Cards items={zingoGlance} /></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="zing-overview"><div className="container stevia-split" data-stevia-reveal><div><p className="eyebrow">Flavour. Convenience. Everyday enjoyment.</p><h2 id="zing-overview">Refreshingly Simple.{' '}<br />Perfectly Delicious.</h2><p>Zingo is a colourful powdered drink range created around flavour, convenience, value and everyday enjoyment. Compact sachets are easy to carry, store and prepare, while the eight-flavour range gives families and consumers more ways to enjoy everyday refreshment.</p></div><figure className="zing-art zing-overview__image"><ZingoImage flavour={findFlavour('guava')} sizes="(max-width: 700px) 85vw, 350px" /></figure></div></section>

    <section className="stevia-section zing-experience" id="flavours" aria-labelledby="zing-flavours"><div className="container"><p className="eyebrow">The Zingo collection</p><h2 id="zing-flavours">Find Your Favourite</h2><p>Eight bold flavours across three colourful collections.</p>
      <div className="zing-collection-tabs" role="tablist" aria-label="Zingo flavour collections">{zingoCollections.map((item, index) => <button key={item.id} type="button" role="tab" id={`zing-tab-${item.id}`} aria-selected={collectionIndex === index} aria-controls="zing-collection-panel" tabIndex={collectionIndex === index ? 0 : -1} ref={(element) => { collectionTabs.current[index] = element }} onClick={() => selectCollection(index)} onKeyDown={(event) => navigateKeys(event, index, zingoCollections.length, selectCollection, collectionTabs.current)}>{item.title}</button>)}</div>
      <div className="zing-collection-panel" id="zing-collection-panel" role="tabpanel" aria-labelledby={`zing-tab-${collection.id}`} tabIndex={0} style={{ '--zing-accent': flavour.accent } as CSSProperties}>
        <div className="zing-flavour-feature" key={flavour.id}><figure className="zing-feature__image"><ZingoImage flavour={flavour} sizes="(max-width: 1100px) 43vw, 460px" /></figure><div><p className="eyebrow">{collection.title}</p><h3>{flavour.name}</h3><p>{flavour.description}</p><span className="zing-feature__value">1 Sachet Makes 2 Litres</span></div></div>
        <div className="zing-flavour-swipe" ref={flavourTrack} key={collection.id} onScroll={(event) => closestSlide(event, setFlavourIndex)} aria-label={`${collection.title} swipe gallery`} tabIndex={0} onKeyDown={(event) => { if (event.target !== event.currentTarget || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return; event.preventDefault(); selectFlavour(Math.max(0, Math.min(flavours.length - 1, flavourIndex + (event.key === 'ArrowRight' ? 1 : -1)))) }}>
          {flavours.map((item) => <article className="zing-mobile-flavour" key={item.id}><figure><ZingoImage flavour={item} sizes="85vw" /></figure><p className="eyebrow">{collection.title}</p><h3>{item.name}</h3><p>{item.description}</p></article>)}
        </div>
        <div className="zing-flavour-choices" role="group" aria-label={`${collection.title} flavours`}>{flavours.map((item, index) => <button type="button" key={item.id} aria-pressed={flavourIndex === index} aria-label={`Choose ${item.name}`} ref={(element) => { flavourButtons.current[index] = element }} onClick={() => selectFlavour(index)} onKeyDown={(event) => navigateKeys(event, index, flavours.length, selectFlavour, flavourButtons.current)}><span className="zing-choice__image"><ZingoImage flavour={item} sizes="100px" /></span><span>{item.name}</span></button>)}</div>
      </div>
    </div></section>

    <section className="stevia-section zing-big-value" aria-labelledby="zing-value"><div className="container stevia-split" data-stevia-reveal><div><p className="eyebrow">Big refreshment from a compact format</p><h2 id="zing-value">Small Sachet.{' '}<br />Big Refreshment.</h2><p className="zing-litre-display"><span>One Sachet Makes</span><strong>2 Litres</strong></p><p>Affordable refreshment designed for families, friends and everyday sharing.</p></div><figure className="zing-art zing-value__image"><ZingoImage flavour={findFlavour('orange')} sizes="(max-width: 700px) 85vw, 400px" /></figure></div></section>

    <section className="stevia-section" aria-labelledby="zing-benefits"><div className="container" data-stevia-reveal><p className="eyebrow">Everyday reasons to reach for Zingo</p><h2 id="zing-benefits">Unique Benefits</h2><Cards items={zingoBenefits} /></div></section>

    <section className="stevia-section stevia-section--white" aria-labelledby="zing-preparation"><div className="container" data-stevia-reveal><p className="eyebrow">Make it a moment</p><h2 id="zing-preparation">How to Enjoy Zingo</h2><ol className="zing-preparation">{zingoPreparation.map(({ title, text }, index) => <li className="stevia-card" key={title}><span className="zing-step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><p className="zing-preparation-note"><PackageCheck size={22} aria-hidden="true" />For sachet preparation, always follow the current pack instructions.</p></div></section>

    <section className="stevia-section zing-moments" aria-labelledby="zing-moments"><div className="container" data-stevia-reveal><p className="eyebrow">Families, friends &amp; everyday sharing</p><h2 id="zing-moments">Made for Every Moment</h2><Cards items={zingoMoments} /></div></section>

    <section className="stevia-section stevia-section--white zing-customise" aria-labelledby="zing-customise"><div className="container" data-stevia-reveal><p className="eyebrow">Your flavour. Your way.</p><h2 id="zing-customise">Make It Your Zingo</h2><Cards items={zingoCustomise} /></div></section>

    <section className="stevia-section zing-shelf" aria-labelledby="zing-shelf"><div className="container" data-stevia-reveal><div className="stevia-editorial"><div><p className="eyebrow">Built to stand out</p><h2 id="zing-shelf">Colour That Commands Attention.</h2></div><div><p>Zingo’s flavour-led packaging uses bold colour, recognisable characters and clear flavour differentiation to create a distinctive presence across the range.</p><ul className="stevia-checklist">{zingoShelfPoints.map((text) => <li key={text}><Check size={18} aria-hidden="true" /><span>{text}</span></li>)}</ul></div></div><div className="zing-shelf__gallery">{['cola', 'peach', 'pineapple'].map((id) => { const item = findFlavour(id); return <figure className="zing-art" key={id}><ZingoImage flavour={item} sizes="(max-width: 700px) 85vw, 350px" /><figcaption>{item.name}</figcaption></figure> })}</div></div></section>

    <section className="stevia-section zing-world" aria-labelledby="zing-world"><div className="container" data-stevia-reveal><p className="eyebrow">The Zingo brand world</p><h2 id="zing-world">More Than a Drink.</h2><p>Zingo brings together colour, flavour and playful design to turn everyday refreshment into something more memorable.</p><p className="zing-world__line">More Colour. More Flavour. More Moments.</p></div></section>

    <section className="stevia-section stevia-section--white stevia-related" aria-labelledby="zing-related"><div className="container"><p className="eyebrow">The wider Nature’s Nurture portfolio</p><h2 id="zing-related">Explore More from the Portfolio</h2><div className="stevia-related__grid">{related.map((product) => <div className="zing-related-item" key={product.id} data-stevia-reveal><ProductCard product={product} /></div>)}</div></div></section>

    <section className="stevia-section zing-trade" aria-labelledby="zing-trade"><div className="container stevia-editorial" data-stevia-reveal><div><p className="eyebrow">Retail, wholesale &amp; distribution</p><h2 id="zing-trade">Interested in stocking Zingo?</h2></div><div><p>Explore retail, wholesale and distribution opportunities with Nature’s Nurture.</p><div className="cta-row"><Link to="/retailers" className="button button--inverted">Retail &amp; wholesale enquiries <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/contact" className="button button--ghost">Contact us <ArrowRight size={18} aria-hidden="true" /></Link></div></div></div></section>
  </main>
}
