import { ArrowRight, BadgeCheck, Baby, Droplets, FlaskConical, HandCoins, Leaf, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type ValueCard = {
  number: string
  title: string
  desc: string
  icon: LucideIcon
}

type TeamMember = {
  name: string
  title: string
  bio: string
  image: string
}

const values: ValueCard[] = [
  { number: '01', title: 'Wellness Innovation', desc: 'Wellness innovation.', icon: FlaskConical },
  { number: '02', title: 'Sustainability', desc: 'Sustainability.', icon: Leaf },
  { number: '03', title: 'Accessibility & Affordability', desc: 'Accessibility and affordability.', icon: HandCoins },
  { number: '04', title: 'Ethical Sourcing', desc: 'Ethical sourcing.', icon: BadgeCheck },
  { number: '05', title: 'Community Upliftment', desc: 'Community upliftment.', icon: Users },
]

const companyFacts = [
  { label: 'Headquarters', value: 'Durban, South Africa' },
  { label: 'Markets served', value: 'South Africa, SADC and Africa' },
  { label: 'Portfolio', value: 'Sublingual sprays, infant nutrition, functional beverages, cereals, natural sweeteners and family protection' },
  { label: 'Distribution', value: 'Retail, pharmacy, wholesale, e-commerce and export' },
  { label: 'Business model', value: 'B2B, retail, export, private label and co-manufacturing' },
  { label: 'Export capability', value: 'SADC, East Africa and West Africa' },
]

const capabilities = [
  {
    number: '01',
    title: 'Sublingual Nutrition',
    description: 'Micronutrient sprays and sublingual spray technology.',
    icon: FlaskConical,
  },
  {
    number: '02',
    title: 'Energy & Hydration',
    description: 'Functional powdered drinks for hydration, refreshment and everyday vitality.',
    icon: Droplets,
  },
  {
    number: '03',
    title: 'Infant & Family Nutrition',
    description: 'Trusted infant formulas and cereals for family nutrition.',
    icon: Baby,
  },
  {
    number: '04',
    title: 'Natural & Lifestyle',
    description: 'Natural sweeteners and family protection products.',
    icon: Leaf,
  },
]

const managementTeam: TeamMember[] = [
  {
    name: 'Dr. Aman Maharaj',
    title: 'Commercial Director & Shareholder',
    bio: 'An engineer, economist and businessman with a B.Sc. in Civil Engineering, an MBA and a PhD in Development Studies. He brings 30 years of experience across government, banking, manufacturing, FMCG, management consulting and private equity financing.',
    image: `${import.meta.env.BASE_URL}images/_extracted/our-brand-portfolio-5-page-06-image-01.jpeg`,
  },
  {
    name: 'Veer Singh',
    title: 'Marketing Director & Shareholder',
    bio: 'He holds a Master of Development Studies and brings experience in marketing research and strategy, as well as cross-cultural communication.',
    image: `${import.meta.env.BASE_URL}images/_extracted/our-brand-portfolio-5-page-06-image-02.jpeg`,
  },
  {
    name: 'Bhavesh Ranka',
    title: 'Non-Executive Director',
    bio: 'Bhavesh Ranka holds a B.Com qualification and brings over 28 years of business experience. His expertise spans exports, banking, manufacturing, marketing, logistics and international business operations.',
    image: `${import.meta.env.BASE_URL}images/_extracted/our-brand-portfolio-5-page-07-image-01.jpeg`,
  },
  {
    name: 'Ian Naicker',
    title: 'Pharmacist',
    bio: 'A registered pharmacist, clinical trialist and pharmaceutical specialist, he holds a Master’s degree in public health medicine and is completing a PhD in pharmaceutical policy. He has held medical and commercial leadership roles in multinational pharma.',
    image: `${import.meta.env.BASE_URL}images/_extracted/our-brand-portfolio-5-page-07-image-02.jpeg`,
  },
  {
    name: 'Karina Christy',
    title: 'Vice Executive Officer',
    bio: 'Karina Christy holds a Psychology Honours degree and MBA, with 24 years of pharmaceutical industry experience across South Africa and the UK. Her expertise spans sales management, key account management and marketing leadership.',
    image: `${import.meta.env.BASE_URL}images/_extracted/our-brand-portfolio-5-page-06-image-04.jpeg`,
  },
  {
    name: 'Akanksha Singh',
    title: 'Chief Financial Officer',
    bio: 'Akanksha Singh is a Chartered Accountant (SA) with extensive experience across multinational FMCG, consumer, healthcare and professional services sectors. Her strategic focus spans governance, risk management, operational excellence and sustainable growth across Africa.',
    image: `${import.meta.env.BASE_URL}images/_extracted/our-brand-portfolio-5-page-06-image-05.jpeg`,
  },
]

const compliance = [
  'GMP-compliant',
  'HACCP',
  'ISO-aligned',
  'SAHPRA-aligned',
  'Codex-compliant',
]

export function AboutPage() {
  return (
    <main className="page-shell page-shell--light about-page">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <p className="eyebrow eyebrow--dark">RainmakerFMCG • company overview</p>
            <h1>Accessible wellness, built for everyday Africa.</h1>
            <span className="about-hero__divider" aria-hidden="true" />
            <p className="about-hero__lead">
              RainmakerFMCG is an innovative FMCG and wellness company driving affordable, high-quality health and nutrition solutions across the continent. We combine international standards with practical, accessible wellness for families, communities and retailers.
            </p>
            <div className="cta-row">
              <a className="button button--primary" href="#about-values">Our story <ArrowRight size={16} /></a>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__frame">
              <img
                src={`${import.meta.env.BASE_URL}images/_pages/our-brand-portfolio-5-page-05.png`}
                alt="RainmakerFMCG manufacturing and wellness production"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-company section">
        <div className="container about-company__grid">
          <div className="about-company__heading">
            <p className="eyebrow eyebrow--dark">About RainmakerFMCG</p>
            <h2>Health, nutrition and everyday wellbeing.</h2>
          </div>
          <div className="about-company__copy">
            <p>
              RainmakerFMCG is an innovative FMCG and wellness company on a mission to deliver affordable, high-quality health and nutrition products throughout Africa.
            </p>
            <p>
              The company’s portfolio is developed to address the needs of African consumers and families, with an emphasis on accessible wellness and international standards.
            </p>
          </div>
        </div>
      </section>

      <section className="about-at-a-glance section">
        <div className="container about-at-a-glance__inner">
          <div>
            <p className="eyebrow eyebrow--dark">Company overview</p>
            <h2>RainmakerFMCG at a glance.</h2>
          </div>
          <dl className="about-facts">
            {companyFacts.map(({ label, value }) => (
              <div key={label} className="about-fact">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="about-capabilities section">
        <div className="container">
          <div className="about-section-heading about-section-heading--split">
            <div>
              <p className="eyebrow eyebrow--dark">Portfolio capabilities</p>
              <h2>Four complementary areas of wellness.</h2>
            </div>
            <p className="about-section-heading__copy">
              The portfolio spans nutritional support, functional beverages, infant and family nutrition, and natural lifestyle products.
            </p>
          </div>
          <div className="about-capabilities__grid">
            {capabilities.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="about-capability">
                <span className="about-capability__icon"><Icon size={18} aria-hidden="true" /></span>
                <span className="reason-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values section" id="about-values">
        <div className="container about-values__intro">
          <div className="about-section-heading">
            <p className="eyebrow eyebrow--dark">Our core values</p>
            <h2>Five principles guide our work.</h2>
          </div>
          <p className="about-values__copy">
            Wellness Innovation, Sustainability, Accessibility &amp; Affordability, Ethical Sourcing and Community Upliftment are the values identified by RainmakerFMCG.
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
            <p className="eyebrow eyebrow--dark">Leadership &amp; governance</p>
            <h2>Our Management Team</h2>
          </div>
          <p className="about-section-heading__copy">
            A group of experienced professionals helping guide product innovation, business growth, financial performance and practical market delivery across the portfolio.
          </p>
        </div>
        <div className="container">
          <div className="about-team__grid about-team__grid--six">
            {managementTeam.map((person) => (
              <article key={person.name} className="about-team-card">
                <div className="about-team-card__portrait">
                  <img src={person.image} alt={person.name} loading="lazy" />
                </div>
                <div className="about-team-card__meta">
                  <h3>{person.name}</h3>
                  <p>{person.title}</p>
                  <span className="about-team-card__divider" aria-hidden="true" />
                </div>
                <p className="about-team-card__bio">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-compliance section">
        <div className="container about-section-heading about-section-heading--split">
          <div>
            <p className="eyebrow eyebrow--dark">Quality &amp; standards</p>
            <h2>International standards, without compromise.</h2>
          </div>
          <p className="about-section-heading__copy">
            The company overview describes products engineered to meet international standards and lists GMP, HACCP and ISO-aligned manufacturing standards.
          </p>
        </div>
        <div className="container">
          <div className="about-compliance__grid">
            {compliance.map((item) => (
              <div key={item} className="about-compliance__pill">
                <BadgeCheck size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container about-cta cta-panel cta-panel--green">
        <div className="about-cta__copy">
          <p className="eyebrow eyebrow--alt">Built for African communities</p>
          <h3>We are growing a wellness portfolio rooted in quality, trust and practical innovation.</h3>
        </div>
        <Link className="button button--inverted" to="/contact">Contact our team <ArrowRight size={16} /></Link>
      </section>
    </main>
  )
}
