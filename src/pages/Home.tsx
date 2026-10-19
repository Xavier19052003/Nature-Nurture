import { PageHero } from '../components/ui/PageHero'
import type { CSSProperties } from 'react'
import { ArrowRight, ClipboardCheck, Factory, FlaskConical, Handshake, Globe2, PackageCheck, ShieldCheck, Store, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCollection } from '../components/ui/ProductCollection'
import { useHomeHeroFit } from '../components/ui/useHomeHeroFit'

const presenceIndicators = [
  { title: 'SADC', text: 'Regional Market Reach', icon: Globe2 },
  { title: 'East & West Africa', text: 'Export Capability', icon: Truck },
  { title: 'Multi-Channel', text: 'Retail · Pharmacy · Wholesale · Export', icon: Store },
  { title: 'International', text: 'Trade-Ready', icon: Handshake },
]

const capabilities = [
  { title: 'Nutritional Products', text: 'Science-backed formulations across vitamins, minerals and functional nutrition.', icon: FlaskConical },
  { title: 'Scalable Distribution', text: 'Multi-channel reach across retail, pharmacy, wholesale and export.', icon: Store },
  { title: 'African Market Expansion', text: 'Active growth strategy targeting SADC and broader pan-African trade corridors.', icon: Globe2 },
]

const companyFacts = [
  { label: 'Headquarters', value: 'Durban, South Africa' },
  { label: 'Industry', value: 'FMCG / Wellness / Nutrition / Consumer Health' },
  { label: 'Markets Served', value: 'South Africa, SADC, Africa' },
  { label: 'Distribution Channels', value: 'Retail, Pharmacy, Wholesale, E-Commerce, Export' },
  { label: 'Business Model', value: 'B2B, Retail, Export, Private Label, Co-Manufacturing' },
  { label: 'Export Capability', value: 'SADC, East Africa, West Africa, International Trade-Ready' },
]

const foundations = [
  { title: 'Batch Traceability', text: 'End-to-end traceability supports product accountability from raw material intake through to dispatch.', icon: ClipboardCheck },
  { title: 'Commercial Product Development', text: 'Product development shaped around consumer needs, modern retail and commercially relevant FMCG categories.', icon: FlaskConical },
  { title: 'Third-Party Testing', text: 'Independent microbiological and safety testing supports product quality prior to market release.', icon: ShieldCheck },
  { title: 'Scalable Distribution', text: 'Multi-channel reach across retail, pharmacy, wholesale, e-commerce and export.', icon: Truck },
  { title: 'Partner-Centric Solutions', text: 'Flexible solutions designed around partner requirements, packaging, pricing and collaboration models.', icon: Handshake },
  { title: 'Export Readiness', text: 'Production and documentation aligned with international regulatory and import requirements.', icon: Globe2 },
]

const manufacturing = [
  { title: 'GMP & HACCP', text: 'Manufacturing operates in alignment with Good Manufacturing Practice and HACCP protocols.', icon: ShieldCheck },
  { title: 'Batch Traceability', text: 'End-to-end systems support accountability from raw material intake to dispatch.', icon: ClipboardCheck },
  { title: 'Third-Party Testing', text: 'Independent microbiological and safety testing supports market release.', icon: FlaskConical },
  { title: 'Export Readiness', text: 'Production documentation is aligned with international regulatory and import requirements.', icon: Globe2 },
]

const tradeCapabilities = [
  { title: 'Retail', text: 'FMCG and consumer retail channels', icon: Store },
  { title: 'Pharmacy', text: 'Health and wellness distribution', icon: FlaskConical },
  { title: 'Wholesale', text: 'Multi-channel wholesale capability', icon: Truck },
  { title: 'Private Label', text: 'Commercially flexible product development', icon: PackageCheck },
  { title: 'Co-Manufacturing', text: 'Partner-oriented production models', icon: Factory },
  { title: 'Export', text: 'SADC, East Africa, West Africa and international trade readiness', icon: Globe2 },
]

const compliance = ['GMP-Compliant', 'HACCP', 'SAHPRA-Aligned', 'Codex-Compliant', 'ISO-Aligned']

export function Home() {
  useHomeHeroFit()
  return (
    <>
      <main>
        <PageHero entryPlacement="bottom" className="hero-shell home-landing" scrollLabel="Scroll to explore" scrollTarget="home-company" labelledBy="home-heading" scrollAriaLabel="Scroll to explore our company overview" style={{
          '--home-bg-desktop': `url("${import.meta.env.BASE_URL}home/hero-bg-desktop.webp")`,
          '--home-bg-mobile': `url("${import.meta.env.BASE_URL}home/hero-bg-mobile.webp")`,
        } as CSSProperties}>
          <div className="container hero-grid page-hero__layout">
            <div className="hero-copy page-hero__copy">
              <p className="eyebrow">Nature&apos;s Nurture • Rainmaker FMCG</p>
              <h1 id="home-heading" className="display-heading">
                Better<span className="home-headline-break"><br /></span>{' '}
                choices.<br />
                <span>Naturally.</span>
              </h1>
              <p className="lead">
                Nature&apos;s Nurture crafts evidence-based wellness solutions to support everyday confidence, family health and modern nutrition across Africa.
              </p>
              <div className="cta-row">
                <Link className="button button--primary" to="/products">Explore products <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link className="button button--secondary" to="/retailers">For retailers &amp; wholesalers <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>

            <ProductCollection homepage />
          </div>
</PageHero>

        <section className="home-lower-section home-platform" id="home-company" tabIndex={-1}>
          <div className="container">
            <div className="home-lower-split home-platform__intro">
              <div className="home-lower-heading">
                <p className="eyebrow">Our Platform</p>
                <h2>A Diversified African<br className="home-desktop-break" /> FMCG Platform</h2>
              </div>
              <div className="home-lower-copy">
                <p>RainmakerFMCG is a South Africa-based diversified FMCG company operating across wellness, nutrition and consumer health categories. The business serves retail, pharmacy, wholesale and export markets across South Africa and the broader African continent.</p>
                <p>Built on a foundation of compliant manufacturing, scalable distribution and commercially focused product development, RainmakerFMCG is positioned to meet growing demand for accessible, evidence-based wellness solutions across African markets.</p>
              </div>
            </div>
            <div className="home-platform__cards">
              {capabilities.map(({ title, text, icon: Icon }) => (
                <article key={title} className="home-info-card home-platform-card">
                  <span className="home-info-card__icon" aria-hidden="true"><Icon size={24} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-lower-section home-presence" id="home-philosophy">
          <div className="home-presence__art" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}about/about-hero.png`} alt="" loading="lazy" />
          </div>
          <div className="container">
            <div className="home-lower-split">
              <div className="home-lower-heading">
                <p className="eyebrow">Our Presence</p>
                <h2>Nurturing better choices for everyday life across Africa, Asia, Oceania and South America.</h2>
              </div>
              <div className="home-lower-copy home-presence__copy">
                <p>Rooted in Africa and built for international trade, RainmakerFMCG continues to develop opportunities across African and global markets through scalable distribution, export readiness and commercially focused partnerships.</p>
                <p>Expansion opportunities span Africa, Asia, Oceania and South America.</p>
              </div>
            </div>
            <div className="home-presence__indicators">
              {presenceIndicators.map(({ title, text, icon: Icon }) => (
                <div key={title} className="home-presence__indicator">
                  <Icon size={28} aria-hidden="true" />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-lower-section home-snapshot">
          <div className="container">
            <div className="home-lower-heading">
              <p className="eyebrow">Company Overview</p>
              <h2>Company at a Glance</h2>
            </div>
            <dl className="home-snapshot__grid">
              {companyFacts.map(({ label, value }) => (
                <div key={label} className="home-info-card">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="home-lower-section home-commitment">
          <div className="home-commitment__art" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}about/about-hero.png`} alt="" loading="lazy" />
          </div>
          <div className="container home-lower-split">
            <div className="home-lower-heading">
              <p className="eyebrow">Our Commitment</p>
              <h2>Nurturing life through science, nature &amp; reputable practices.</h2>
            </div>
            <div className="home-lower-copy">
              <p>RainmakerFMCG operates under a compliance-first manufacturing philosophy, with products developed, tested and released in alignment with applicable national and international regulatory frameworks.</p>
              <p>This approach supports consumer safety, market access and export readiness across the company’s wellness, nutrition and consumer health portfolio.</p>
              <Link className="button button--inverted home-lower-button" to="/about">Our Approach <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="home-lower-section home-foundations">
          <div className="container home-lower-split home-foundations__layout">
            <div className="home-lower-heading">
              <p className="eyebrow">Our Capabilities</p>
              <h2><span>Built on</span>{' '}<span>Strong</span>{' '}<span>Foundations</span></h2>
            </div>
            <div className="home-foundations__grid">
              {foundations.map(({ title, text, icon: Icon }) => (
                <article key={title} className="home-info-card">
                  <span className="home-info-card__icon" aria-hidden="true"><Icon size={24} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-lower-section home-manufacturing">
          <div className="container home-manufacturing__layout">
            <div className="home-lower-heading">
              <p className="eyebrow">Our Manufacturing</p>
              <h2>Manufacturing Excellence</h2>
            </div>
            <div className="home-manufacturing__grid">
              {manufacturing.map(({ title, text, icon: Icon }) => (
                <article key={title} className="home-info-card">
                  <span className="home-info-card__icon" aria-hidden="true"><Icon size={22} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="home-manufacturing__visual">
              <img
                src={`${import.meta.env.BASE_URL}home/manufacturing-quality-control.png`}
                alt="Quality control worker inspecting a product bottle on a production line"
                width={1168}
                height={1347}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="home-lower-section home-retail">
          <div className="container home-lower-split home-retail__layout">
            <div className="home-lower-heading home-lower-copy">
              <p className="eyebrow">Retailers &amp; Wholesalers</p>
              <h2>Built for retail. Backed by quality.</h2>
              <p>RainmakerFMCG combines commercially focused product development, scalable distribution and compliance-led manufacturing to support retail, pharmacy, wholesale and export channels.</p>
              <p>Flexible business models support B2B, retail, export, private-label and co-manufacturing opportunities.</p>
            </div>
            <div>
              <div className="home-retail__grid">
                {tradeCapabilities.map(({ title, text, icon: Icon }) => (
                  <article key={title} className="home-info-card">
                    <span className="home-info-card__icon" aria-hidden="true"><Icon size={24} /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <ul className="home-retail__standards" aria-label="Quality and compliance standards">
                {compliance.map((item) => <li key={item}><ShieldCheck size={15} aria-hidden="true" />{item}</li>)}
              </ul>
              <Link className="button button--inverted home-lower-button" to="/retailers">View Retailer Information <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
