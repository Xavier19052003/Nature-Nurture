import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { title: 'Science-led mucosal delivery', desc: 'Designed to support efficient nutrient delivery and modern health routines.' },
  { title: 'Quality-focused manufacturing', desc: 'Built around robust processes and trusted production standards.' },
  { title: 'Formulated for modern Africa', desc: 'The practical realities of everyday life, nutrition and wellness in Africa.' },
  { title: 'Retail-ready multi-category FMCG', desc: 'Scalable distribution support for brands, supply chains and retail partners.' },
]

const compliance = ['SAHPRA aligned', 'Department of Health SA', 'SA Pharmacy Council', 'GMP Certified', 'HACCP certified', 'ISO 22000']

export function AboutPage() {
  return (
    <main className="page-shell page-shell--light">
      <section className="page-header">
        <div className="container page-header__inner page-header__inner--stacked">
          <div>
            <p className="eyebrow eyebrow--dark">Company &amp; brand foundation</p>
            <h1>Hallmark of Holistic Health Across Africa.</h1>
          </div>
          <div className="page-header__copy">
            <p>Nature&apos;s Nurture is a science-led wellness platform delivering practical nutrition and trusted daily health support across Africa.</p>
          </div>
        </div>
      </section>

      <section className="container values-grid">
        <div className="section-heading section-heading--left">
          <p className="eyebrow eyebrow--dark">Our core values</p>
          <h2>Evidence-based everyday health.</h2>
        </div>
        <div className="values-list">
          {values.map((value, index) => (
            <article key={value.title} className="value-card">
              <span className="reason-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container management-shell">
        <div className="section-header section-header--spaced">
          <div>
            <p className="eyebrow eyebrow--dark">Leadership &amp; operations</p>
            <h2>Our Management Team</h2>
          </div>
        </div>
        <div className="team-grid">
          {['Dr. Anusha Mabuza', 'Mr. Vee Singh', 'Mrs. Shaliza K. Pather', 'Mr. Zane Roberts'].map((person) => (
            <div key={person} className="team-card">
              <div className="avatar">{person.charAt(0)}</div>
              <h3>{person}</h3>
              <p>Leadership</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container compliance-shell">
        <div className="section-header section-header--spaced">
          <div>
            <p className="eyebrow eyebrow--dark">Official regulatory accreditations</p>
            <h2>Official Regulatory Accreditations</h2>
          </div>
        </div>
        <div className="compliance-grid">
          {compliance.map((item) => (
            <div key={item} className="compliance-item">
              <ShieldCheck size={15} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container cta-panel cta-panel--green">
        <div>
          <p className="eyebrow eyebrow--alt">Corporate foundation</p>
          <h3>Nature&apos;s Nurture is built on quality, trust and practical innovation.</h3>
        </div>
        <Link className="button button--inverted" to="/contact">Contact our team <ArrowRight size={16} /></Link>
      </section>
    </main>
  )
}
