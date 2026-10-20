import { optimizedImageUrl } from '../data/optimizedImages'
import { OptimizedImage } from '../components/ui/OptimizedImage'
import { PageHero } from '../components/ui/PageHero'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardCheck, Factory, FlaskConical, Globe2, Handshake, ShieldCheck, Sprout, PackageCheck, FileCheck2, Users2, Truck, ArrowRight } from 'lucide-react'

const asset = (path: string) => optimizedImageUrl(`${import.meta.env.BASE_URL}${path}`)

const productAccreditations = [
  { name: 'World Health Organization', image: 'world-health-organization' },
  { name: 'ISO', image: 'iso' },
  { name: 'GMP Certified', image: 'gmp-certified' },
  { name: 'Vegan 100%', image: 'vegan-100' },
  { name: 'HACCP', image: 'haccp' },
  { name: 'FDA', image: 'fda' },
  { name: 'SAHPRA', image: 'sahpra' },
  { name: 'FSSAI', image: 'fssai' },
  { name: 'Proudly South African', image: 'proudly-south-african' },
]

const regulatoryAccreditations = [
  { name: 'SAHPRA', type: 'Licence number', number: 'DL02-e70d5f', image: 'sahpra' },
  { name: 'South African Department of Health', type: 'Licence number', number: 'KZN00067W', image: 'department-of-health' },
  { name: 'South African Pharmacy Council', type: 'Registration number', number: 'Y61844', image: 'south-african-pharmacy-council' },
]

const frameworks = [
  { label: 'GMP-Compliant', icon: ShieldCheck },
  { label: 'HACCP', icon: ClipboardCheck },
  { label: 'ISO-Aligned', icon: Globe2 },
  { label: 'SAHPRA-Aligned', icon: FileCheck2 },
  { label: 'Codex-Compliant', icon: PackageCheck },
]

const manufacturing = [
  { title: 'GMP & HACCP', text: 'Manufacturing operates in alignment with Good Manufacturing Practice and HACCP protocols.', icon: Factory },
  { title: 'Batch Traceability', text: 'Complete traceability supports transparency across the supply chain, from raw material intake through to finished product dispatch.', icon: ClipboardCheck },
  { title: 'Third-Party Testing', text: 'Independent microbiological and safety testing supports market release.', icon: FlaskConical },
  { title: 'Export Readiness', text: 'Production and documentation are aligned with international regulatory and import requirements.', icon: Globe2 },
  { title: 'Partner-Centric Solutions', text: 'Flexible solutions designed around partner requirements, packaging, pricing and collaboration models.', icon: Handshake },
  { title: 'BEE Compliance', text: 'Broad-Based Black Economic Empowerment (B-BBEE) compliant, supporting inclusive growth and economic transformation in South Africa.', icon: Users2 },
]

const capabilities = [
  { title: 'Product Development', description: 'Commercially focused concepts for real consumer needs.', icon: FlaskConical },
  { title: 'Manufacturing & Co-Manufacturing', description: 'Flexible production capability supporting branded and partner opportunities.', icon: Factory },
  { title: 'Multi-Channel Distribution', description: 'Retail, pharmacy, wholesale, e-commerce and export.', icon: Truck },
  { title: 'Private Label & Partnerships', description: 'Commercial collaboration models for B2B partners.', icon: Handshake },
]

const ongoingCommitments = [
  { title: 'Ingredient Sourcing', text: 'Ethical sourcing guides our wellness and nutrition portfolio.', icon: Sprout },
  { title: 'Product Integrity', text: 'Product development, testing and release align with applicable regulatory frameworks.', icon: ShieldCheck },
]

export function CertificationsPage() {
  return (
    <main className="page-shell page-shell--light quality-page" style={{ '--quality-botanical-bg': `url("${asset('quality/quality-botanical-background.png')}")` } as CSSProperties}>
      <PageHero backgroundImage={`${import.meta.env.BASE_URL}quality/quality-standards-hero.png`} entryPlacement="bottom" className="quality-hero" scrollLabel="Explore our standards" scrollTarget="product-accreditations" labelledBy="quality-title">
        <div className="container quality-hero__layout page-hero__layout">
          <div className="quality-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--dark">Our commitment to a higher standard</p>
            <h1 id="quality-title">Certifications &amp; Quality Standards</h1>
            <p className="quality-lead">At Nature’s Nurture, quality, compliance and regulatory alignment are built into every stage of product development and manufacturing. Our standards reflect a commitment to consumer safety, market readiness and trusted everyday wellness.</p>

          </div>
        </div>
      </PageHero>

      <section className="quality-section quality-products" id="product-accreditations" aria-labelledby="product-accreditations-heading" tabIndex={-1}>
        <div className="container">
          <div className="quality-heading">
            <p className="eyebrow eyebrow--dark">Globally recognized</p>
            <h2 id="product-accreditations-heading">Product Accreditations</h2>
            <p>Our products have the following accreditations, <strong>where relevant</strong>:</p>
          </div>
          <div className="quality-logo-grid">
            {productAccreditations.map(({ name, image }) => (
              <figure key={name} className="quality-logo-tile">
                <OptimizedImage src={asset(`quality/accreditations/${image}.png`)} alt={`${name} accreditation logo`} loading="lazy" />
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-section quality-regulatory" aria-labelledby="regulatory-accreditations">
        <div className="container">
          <div className="quality-heading">
            <p className="eyebrow eyebrow--dark">Regulatory compliance worldwide</p>
            <h2 id="regulatory-accreditations">Regulatory Accreditations</h2>
            <p>We operate in line with national and international regulatory requirements.</p>
          </div>
          <div className="quality-regulatory-grid">
            {regulatoryAccreditations.map(({ name, type, number, image }) => (
              <article key={name} className="quality-card quality-regulatory-card">
                <OptimizedImage src={asset(`quality/accreditations/${image}.png`)} alt={`${name} logo`} loading="lazy" />
                <h3>{name}</h3>
                <dl><dt>{type}</dt><dd>{number}</dd></dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-section quality-framework" aria-labelledby="quality-framework">
        <div className="container">
          <div className="quality-heading">
            <p className="eyebrow eyebrow--dark">Built on systems. Driven by trust.</p>
            <h2 id="quality-framework">Quality &amp; Compliance Framework</h2>
            <p>We follow a rigorous, fully documented quality management approach aligned with recognised national and international standards.</p>
          </div>
          <ul className="quality-framework-grid">
            {frameworks.map(({ label, icon: Icon }) => <li key={label}><Icon size={28} aria-hidden="true" /><span>{label}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="quality-section quality-process" aria-labelledby="compliance-first">
        <div className="container quality-process__layout">
          <div className="quality-process__copy">
            <p className="eyebrow">Compliance in every batch</p>
            <h2 id="compliance-first">Compliance-First Manufacturing</h2>
            <p>RainmakerFMCG operates under a compliance-first manufacturing philosophy, with products developed, tested and released in alignment with applicable national and international regulatory frameworks.</p>
            <p>This approach supports consumer safety, market access and export readiness.</p>
          </div>
          <div className="quality-process__image">
            <OptimizedImage src={asset('home/manufacturing-quality-control.png')} alt="Quality control worker inspecting a product bottle on a production line" width={1168} height={1347} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="quality-section quality-development" aria-labelledby="quality-needs-heading">
        <div className="container quality-development__layout" data-stevia-reveal>
          <div>
            <p className="eyebrow eyebrow--dark">Our Approach</p>
            <h2 id="quality-needs-heading">Developed Around Real Consumer Needs</h2>
            <p>Nature’s Nurture begins with practical consumer needs — nutrition, convenience, wellness and everyday care — and develops products and formats intended to meet those needs in modern lifestyles and retail environments.</p>
          </div>
          <div aria-labelledby="quality-capabilities-heading">
            <h2 className="quality-development__label" id="quality-capabilities-heading">What We Do</h2>
            <div className="quality-capabilities">
              {capabilities.map(({ title, description, icon: Icon }) => <article key={title}><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="quality-co-manufacturing" aria-labelledby="quality-co-manufacturing-heading">
        <div className="quality-co-manufacturing__image"><OptimizedImage src={asset('about/manufacturing-facility.png')} sizes="100vw" alt="Stainless-steel processing tanks and pipework, illustrating manufacturing capability" width={2172} height={724} loading="lazy" /></div>
        <div className="container quality-co-manufacturing__copy" data-stevia-reveal>
          <div>
          <p className="eyebrow eyebrow--dark">From Product Development to Market</p>
          <h2 id="quality-co-manufacturing-heading">Manufacturing &amp; Co-Manufacturing</h2>
          <p>Rainmaker FMCG supports branded and partner-led product opportunities through manufacturing and co-manufacturing capability, commercially focused product development and flexible collaboration models.</p>
          <p>Capabilities span product development, formulation, quality testing, regulatory consideration, packaging and multi-channel distribution. Relevant stages and checks vary by product category and market.</p>
          <Link className="button button--primary" to="/retailers">Learn More <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="quality-from-start">
            <h3>Quality from the Start</h3>
            <p>A compliance-first approach considers relevant raw-material inspection, batch testing, supplier verification, microbiological safety testing and production monitoring. Applicable checks depend on the product category.</p>
            <a className="inline-link" href="#quality-framework">Explore our quality framework <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="quality-section quality-manufacturing" aria-labelledby="manufacturing-excellence">
        <div className="container">
          <div className="quality-heading">
            <p className="eyebrow eyebrow--dark">Innovation meets responsibility</p>
            <h2 id="manufacturing-excellence">Manufacturing Excellence</h2>
          </div>
          <div className="quality-manufacturing-grid">
            {manufacturing.map(({ title, text, icon: Icon }) => (
              <article key={title} className="quality-card">
                <Icon size={26} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="quality-ongoing" aria-labelledby="ongoing-commitment">
            <h3 className="eyebrow eyebrow--dark" id="ongoing-commitment">Our ongoing commitment</h3>
            <div className="quality-commitment-grid">
              {ongoingCommitments.map(({ title, text, icon: Icon }) => (
                <article key={title} className="quality-card quality-commitment-card">
                  <Icon size={28} aria-hidden="true" />
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quality-statement">
        <div className="container"><p>Every product. Every batch. Every standard.</p></div>
      </section>

    </main>
  )
}
