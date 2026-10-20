import { OptimizedImage } from '../components/ui/OptimizedImage'
import { PageHero } from '../components/ui/PageHero'
import { ArrowRight, Baby, Factory, BadgeCheck, Droplets, FlaskConical, HandCoins, Leaf, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'

const aboutImage = (name: string) => `${import.meta.env.BASE_URL}about/${name}.png`

const values = [
  { title: 'Wellness Innovation', description: 'Developing practical and relevant approaches to everyday wellness.', icon: FlaskConical },
  { title: 'Sustainability', description: 'Building more considered choices into product development and the wider business.', icon: Leaf },
  { title: 'Accessibility & Affordability', description: 'Working to make quality wellness and nutrition accessible to a broader range of consumers.', icon: HandCoins },
  { title: 'Ethical Sourcing', description: 'Supporting responsible supplier relationships and thoughtful ingredient sourcing.', icon: BadgeCheck },
  { title: 'Community Upliftment', description: 'Recognising the wider role business can play in the communities and markets it serves.', icon: Users },
]

const pillars = [
  { title: 'Sublingual Nutrition', description: 'Micronutrient sprays and practical alternative nutrient-delivery formats.', image: 'sublingual-nutrition', icon: FlaskConical, accent: '#3e6b3f', tint: '#e6eddf', alt: 'Fresh green leaves with water droplets' },
  { title: 'Energy & Hydration', description: 'Functional powdered drinks developed around hydration, refreshment and everyday vitality.', image: 'energy-hydration', icon: Droplets, accent: '#286779', tint: '#e3eff1', alt: 'Water ripples with fresh lemon and green leaves' },
  { title: 'Infant & Family Nutrition', description: 'Formula, cereals and nutritional products designed around different life stages and family needs.', image: 'infant-family-nutrition', icon: Baby, accent: '#996334', tint: '#f4e9d9', alt: 'Oats, grains and milk in a warm natural setting' },
  { title: 'Natural & Lifestyle', description: 'Natural sweeteners and family-protection / everyday wellness formats.', image: 'natural-lifestyle', icon: Leaf, accent: '#727336', tint: '#ececd9', alt: 'Coconut, seeds and botanical ingredients' },
]


const principles = [
  { title: 'Premium', description: 'Elevated formulations and refined product presentation.' },
  { title: 'Scientific', description: 'Evidence-led ingredients and delivery systems, with quality, safety and functional relevance in mind.' },
  { title: 'International', description: 'Considered for different markets, regulatory environments and retail channels.' },
  { title: 'Wellness-Led', description: 'Meaningful roles in everyday wellness routines.' },
]

// Replace these illustrative slots with client-approved manufacturing photography.
function ManufacturingMediaSlot({ title }: { title: string }) {
  return <div className="about-manufacturing-slot" role="img" aria-label={`${title} — manufacturing illustration`}><Factory size={64} strokeWidth={1} aria-hidden="true" /><span>{title}</span></div>
}

export function AboutPage() {
  return (
    <main className="page-shell page-shell--light about-page about-page--editorial">
      <PageHero backgroundImage={`${import.meta.env.BASE_URL}about/about-hero.png`} entryPlacement="bottom" className="about-design-hero" scrollLabel="Discover our story" scrollTarget="about-company" labelledBy="about-heading">
        <div className="container about-design-hero__layout page-hero__layout">
          <div className="about-design-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--dark">About Nature’s Nurture</p>
            <h1 id="about-heading">Wellness, Nutrition<br />&amp; Everyday Care.</h1>
            <p>Nature’s Nurture is a multi-category wellness, nutrition and everyday-care brand within the Rainmaker FMCG portfolio, developed around real consumer needs, practical formats and accessible everyday wellness.</p>
            <p>Behind the brand is Rainmaker FMCG, a South Africa-based diversified FMCG company serving retail, pharmacy, wholesale and export markets across South Africa and the broader African continent.</p>

          </div>
        </div>
      </PageHero>

      <section className="about-design-section about-design-story" id="about-company" tabIndex={-1} aria-labelledby="about-company-heading">
        <div className="container">
          <div className="about-design-story__layout">
            <div>
              <p className="eyebrow eyebrow--dark">Our Story</p>
              <h2 id="about-company-heading">A Diversified African<br />FMCG Platform</h2>
            </div>
            <div>
              <p>Rainmaker FMCG is a South Africa-based diversified FMCG company operating across wellness, nutrition and consumer health categories. The business serves retail, pharmacy, wholesale and export markets across South Africa and the wider African continent.</p>
              <p>Built on a foundation of compliant manufacturing, scalable distribution and commercially focused product development, Rainmaker FMCG is positioned to meet growing demand for accessible, evidence-based wellness solutions across African markets.</p>
              <a className="button button--primary" href="https://rainmakerfmcg.co.za/" target="_blank" rel="noopener noreferrer">Visit Rainmaker FMCG <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="about-design-brands" aria-labelledby="about-brands-heading">
            <h2 className="about-design-label" id="about-brands-heading">One Platform. Purposeful Brands.</h2>
            <p className="about-design-brands__intro">Rainmaker FMCG is the wider platform behind product development, manufacturing and co-manufacturing, distribution and commercial growth.</p>
            <div className="about-design-brands__cards">
              <article><OptimizedImage className="about-design-brand-logo" src={`${import.meta.env.BASE_URL}branding/natures-nurture-logo.png`} alt="Nature’s Nurture logo" width={2048} height={2064} loading="lazy" decoding="async" /><h3>Nature’s Nurture</h3><p>A multi-category wellness, nutrition and everyday-care brand developed around practical consumer needs and accessible everyday wellness.</p></article>
              <article><OptimizedImage className="about-design-brand-logo" src={`${import.meta.env.BASE_URL}branding/zingo-logo-384.webp`} alt="Zingo logo" width={384} height={288} loading="lazy" decoding="async" /><h3>Zingo</h3><p>A distinct Energy &amp; Hydration proposition within the wider Rainmaker FMCG portfolio, centred on convenient powdered refreshment.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-design-band about-design-mission" aria-labelledby="about-mission-heading">
        <OptimizedImage className="about-design-band__image" src={aboutImage('about-hero-africa')} alt="" aria-hidden="true" width={1672} height={941} loading="lazy" />
        <div className="container about-design-band__layout">
          <div><p className="eyebrow">Our Mission</p><h2 id="about-mission-heading">Making Quality Wellness<br />More Accessible.</h2></div>
          <p>Rainmaker FMCG is built on the belief that exceptional wellness should be accessible to everyday households. The business develops health, nutrition and everyday-care products with accessibility, quality and practical use in mind.</p>
        </div>
      </section>

      <section className="about-design-section about-design-values" id="about-values" aria-labelledby="about-values-heading">
        <div className="container">
          <h2 className="about-design-label" id="about-values-heading">Our Core Values</h2>
          <div className="about-design-values__grid">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title}><Icon size={29} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-design-section about-manufacturing-section" aria-label="Manufacturing environment"><div className="container" data-stevia-reveal><ManufacturingMediaSlot title="Inside the Manufacturing Environment" /></div></section>

      <section className="about-design-section about-design-portfolio" aria-labelledby="about-portfolio-heading">
        <div className="container">
          <h2 className="about-design-label" id="about-portfolio-heading">Four Pillars of the Portfolio</h2>
          <div className="about-design-pillars">
            {pillars.map(({ title, description, image, alt, icon: Icon, accent, tint }) => (
              <article key={title} style={{ '--pillar-accent': accent, '--pillar-tint': tint } as CSSProperties}>
                <OptimizedImage src={aboutImage(image)} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 25vw" alt={alt} width={1448} height={1086} loading="lazy" />
                <div className="about-design-pillar__body"><span className="about-design-pillar__icon"><Icon size={24} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
          <p className="about-design-portfolio__families">Nature’s Nurture spans Sublingual Nutrition, Infant Nutrition, Cereal &amp; Meal Replacement, Natural Sweeteners and Family Protection. Zingo sits separately within the wider Rainmaker FMCG Energy &amp; Hydration portfolio.</p>
          <div className="about-design-purpose" aria-labelledby="about-purpose-heading">
            <h3 id="about-purpose-heading">Built on Purpose</h3>
            <dl>{principles.map(({ title, description }, index) => <div key={title}><dt><span className="about-design-purpose__number" aria-hidden="true">0{index + 1}</span>{title}</dt><dd>{description}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      <section className="about-design-band about-design-accessibility" aria-labelledby="about-accessibility-heading">
        <OptimizedImage className="about-design-band__image" src={aboutImage('ethical-sourcing')} alt="" aria-hidden="true" width={2172} height={724} loading="lazy" />
        <div className="container about-design-band__layout">
          <h2 id="about-accessibility-heading">Premium Thinking.<br />Everyday Accessibility.</h2>
          <p>Accessibility &amp; Affordability sits at the heart of the Rainmaker FMCG value system. The business aims to make thoughtfully developed wellness and nutrition products available to a broader range of consumers across African markets.</p>
        </div>
      </section>

      <section className="about-design-section about-design-retail" aria-labelledby="about-retail-heading">
        <div className="container about-design-retail__layout">
          <div>
            <h2 id="about-retail-heading">Created for Consumers.<br />Designed for Retail.</h2>
            <p>Product development considers consumer relevance alongside commercial practicality — from formulation and format to packaging, presentation and channel suitability.</p>
            <p className="about-design-retail__note">Consumer relevance · Packaging · Retail readiness · Multiple channels · Commercial scalability</p>
            <p className="about-design-retail__note">Retail, pharmacy, wholesale, e-commerce, export, B2B, private label and co-manufacturing form part of the wider commercial platform.</p>
          </div>
          <div aria-labelledby="about-impact-heading">
            <h2 id="about-impact-heading">Sustainability, Ethical Sourcing<br />&amp; Community Upliftment</h2>
            <p>Sustainability means more considered choices across product development and the wider business. Ethical sourcing centres on responsible supplier relationships and thoughtful ingredient sourcing.</p>
            <p>Rainmaker FMCG identifies community upliftment as a core value, reflecting an ambition for its products and business to contribute meaningfully to the markets and communities it serves.</p>
          </div>
        </div>
      </section>

      <section className="about-design-section about-manufacturing-section" aria-label="Production and quality"><div className="container" data-stevia-reveal><ManufacturingMediaSlot title="Production & Quality in Focus" /></div></section>

      <section className="about-design-section about-design-reach" aria-labelledby="about-africa-heading">
        <div className="container about-design-reach__layout">
          <figure className="about-design-map">
            <OptimizedImage src={aboutImage('africa-market-map')} alt="Illustrative world map with Africa emphasised in forest green" width={1896} height={829} loading="lazy" />
          </figure>
          <div className="about-design-reach__copy">
            <div>
              <h2 id="about-africa-heading">Rooted in South Africa.<br />Built for African Markets.</h2>
              <p>With South Africa as its operational base, Rainmaker FMCG is focused on serving African consumers and commercial partners while building scalable regional distribution and export capability.</p>
              <p className="about-design-reach__markets">African market focus and export capability: South Africa, SADC, East Africa, West Africa and broader pan-African trade corridors.</p>
            </div>
            <div>
              <h2>Expanding Our Reach</h2>
              <p>Building on its African foundation, Rainmaker FMCG is developing opportunities in international markets including Australia, New Zealand, Indonesia and South America.</p>
              <p className="about-design-reach__markets">Developing opportunities: Australia · New Zealand · Indonesia / Bali · South America</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-design-section about-design-closing" aria-labelledby="about-closing-heading">
        <div className="container about-design-closing__layout">
          <div><p className="eyebrow eyebrow--dark">Let’s Connect</p><h2 id="about-closing-heading">Nourishing Lives.<br />Enriching Futures.</h2></div>
          <div>
            <p>Nature’s Nurture brings together wellness, nutrition and everyday-care products designed around practical consumer needs, while Rainmaker FMCG supports broader retail, distribution and commercial growth.</p>
            <div className="cta-row"><Link className="button button--primary" to="/products">Explore Products <ArrowRight size={16} aria-hidden="true" /></Link><Link className="button button--outline" to="/contact">Contact Our Team <ArrowRight size={16} aria-hidden="true" /></Link></div>
            <Link className="inline-link about-design-closing__retail" to="/retailers">For Retailers &amp; Wholesalers <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
