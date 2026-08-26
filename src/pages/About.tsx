import { ArrowRight, FlaskConical, Globe2, ShieldCheck, Store, Leaf } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type ValueCard = {
  number: string
  title: string
  desc: string
  icon: LucideIcon
}

const values: ValueCard[] = [
  { number: '01', title: 'Science-led mucosal delivery', desc: 'Designed to support efficient nutrient delivery and modern health routines.', icon: FlaskConical },
  { number: '02', title: 'Quality-focused manufacturing', desc: 'Built around robust processes and trusted production standards.', icon: Leaf },
  { number: '03', title: 'Formulated for modern Africa', desc: 'The practical realities of everyday life, nutrition and wellness in Africa.', icon: Globe2 },
  { number: '04', title: 'Retail-ready multi-category FMCG', desc: 'Scalable distribution support for brands, supply chains and retail partners.', icon: Store },
]

const team = [
  'Dr. Anusha Mabuza',
  'Mr. Vee Singh',
  'Mrs. Shaliza K. Pather',
  'Mr. Zane Roberts',
]

const compliance = [
  'SAHPRA aligned',
  'Department of Health SA',
  'SA Pharmacy Council',
  'GMP Certified',
  'HACCP certified',
  'ISO 22000',
]

export function AboutPage() {
  return (
    <main className="page-shell page-shell--light about-page">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <p className="eyebrow eyebrow--dark">Company &amp; brand foundation</p>
            <h1>Hallmark of Holistic Health Across Africa.</h1>
            <span className="about-hero__divider" aria-hidden="true" />
            <p className="about-hero__lead">
              Nature&apos;s Nurture is a science-led wellness platform delivering practical nutrition and trusted daily health support across Africa.
            </p>
            <div className="cta-row">
              <a className="button button--primary" href="#about-values">Our story <ArrowRight size={16} /></a>
            </div>
          </div>

          <div className="about-hero__visual" aria-hidden="true">
            <div className="about-hero__frame">
              <span className="about-hero__leaf about-hero__leaf--one" />
              <span className="about-hero__leaf about-hero__leaf--two" />
              <span className="about-hero__leaf about-hero__leaf--three" />
              <span className="about-hero__stem" />
              <div className="about-hero__vessel">
                <span className="about-hero__vessel-rim" />
              </div>
              <div className="about-hero__bottle">
                <span className="about-hero__bottle-cap" />
                <span className="about-hero__bottle-label">Nature&apos;s Nurture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section" id="about-values">
        <div className="container about-values__intro">
          <div className="about-section-heading">
            <p className="eyebrow eyebrow--dark">Our core values</p>
            <h2>Evidence-based everyday health.</h2>
          </div>
          <p className="about-values__copy">
            Premium nutrition should feel practical. Our products combine natural ingredients, functional formulation and everyday relevance for real families across Africa.
          </p>
        </div>
        <div className="container">
          <div className="about-values__grid">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <article key={value.title} className="about-value-card">
                  <span className="about-value-card__icon">
                    <Icon size={18} />
                  </span>
                  <span className="reason-number">{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container about-section-heading about-section-heading--split">
          <div>
            <p className="eyebrow eyebrow--dark">Leadership &amp; operations</p>
            <h2>Our Management Team</h2>
          </div>
          <p className="about-section-heading__copy">
            Stewarding the business with practical experience across wellness, manufacturing and growth.
          </p>
        </div>
        <div className="container">
          <div className="about-team__grid">
            {team.map((person) => (
              <article key={person} className="about-team-card">
                <div className="about-team-card__avatar">{person.charAt(0)}</div>
                <h3>{person}</h3>
                <p>Leadership</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-compliance section">
        <div className="container about-section-heading about-section-heading--split">
          <div>
            <p className="eyebrow eyebrow--dark">Official regulatory accreditations</p>
            <h2>Official Regulatory Accreditations</h2>
          </div>
          <p className="about-section-heading__copy">
            Existing accreditation information presented as clean, compact pills for quick scanning.
          </p>
        </div>
        <div className="container">
          <div className="about-compliance__grid">
            {compliance.map((item) => (
              <div key={item} className="about-compliance__pill">
                <ShieldCheck size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container about-cta cta-panel cta-panel--green">
        <div className="about-cta__copy">
          <p className="eyebrow eyebrow--alt">Corporate foundation</p>
          <h3>Nature&apos;s Nurture is built on quality, trust and practical innovation.</h3>
        </div>
        <Link className="button button--inverted" to="/contact">Contact our team <ArrowRight size={16} /></Link>
      </section>
    </main>
  )
}
