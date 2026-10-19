import { PageHero } from '../components/ui/PageHero'
import { ArrowRight, Box, ChartNoAxesColumnIncreasing, ClipboardCheck, MessageSquare, Settings, Store, Truck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const retailerImage = (name: string) => `${import.meta.env.BASE_URL}retailers/${name}.png`

const benefits = [
  { title: 'In-Demand Portfolio', description: 'Access wellness, nutrition and everyday-care products developed around practical consumer needs.', icon: Box },
  { title: 'Marketing Support', description: 'Product information, retail materials and campaign support to help bring ranges to life in-store.', icon: Users },
  { title: 'Reliable Supply', description: 'Scalable distribution support across retail, wholesale and export channels.', icon: Truck },
  { title: 'Category Growth', description: 'A multi-category portfolio designed to support broader wellness and nutrition opportunities.', icon: ChartNoAxesColumnIncreasing },
]

const support = [
  { title: 'Product Education', description: 'Product information, training resources and category guidance to support retail teams and customer conversations.', icon: ClipboardCheck },
  { title: 'Retail-Ready Tools', description: 'Product materials, shelf-ready information and marketing support for retail environments.', icon: Store },
  { title: 'Flexible Partnerships', description: 'Commercial options supporting independent retailers, pharmacy groups, wholesalers and larger chains.', icon: Settings },
  { title: 'Consistent Support', description: 'Ongoing communication, product guidance and support across the partnership.', icon: MessageSquare },
]

export function RetailersPage() {
  return (
    <main className="page-shell page-shell--light retailers-page">
      <PageHero backgroundImage={`${import.meta.env.BASE_URL}retailers/retailers-hero-background.png`} entryPlacement="bottom" className="retailers-hero" scrollLabel="Explore partnerships" scrollTarget="retail-partnership-benefits" labelledBy="retailers-heading">
        <div className="container retailers-hero__layout page-hero__layout">
          <div className="retailers-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--dark">Retail Partners</p>
            <h1 id="retailers-heading">Growing<br />everyday wellness<br />retail partnerships.</h1>
            <p>We partner with retailers, pharmacies, wholesalers and distributors to bring accessible wellness, nutrition and everyday-care products to more consumers across South Africa and broader African markets.</p>
            <div className="cta-row">
              <Link className="button retailers-button--outline" to="/products">Explore Our Products <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="retailers-section retailers-benefits" id="retail-partnership-benefits" aria-labelledby="retailers-benefits-heading" tabIndex={-1}>
        <div className="container">
          <div className="retailers-benefits__intro">
            <p className="eyebrow eyebrow--dark">Key Partner Benefits</p>
            <h2 id="retailers-benefits-heading">Built to support trusted demand and real shelf momentum.</h2>
            <p>Rainmaker FMCG works with retail and trade partners to support product availability, category relevance, merchandising and commercial growth across wellness and nutrition.</p>
          </div>
          <div className="retailers-card-grid">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article className="retailers-card" key={title}>
                <Icon size={31} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retailers-focus" aria-labelledby="retailers-focus-heading">
        <img className="retailers-focus__image" src={retailerImage('retailers-focus')} alt="An Everyday Wellness sign on a wooden counter in a leafy retail interior" width={1672} height={941} loading="lazy" />
        <div className="container">
          <div className="retailers-focus__copy">
            <p className="eyebrow">Our Focus</p>
            <h2 id="retailers-focus-heading">Wellness for<br />more shoppers.</h2>
            <p>We work with retail and distribution partners to make everyday wellness products more visible, relevant and accessible across different consumer channels.</p>
            <p>From nutrition and supplementation to family wellness and everyday-care categories, the portfolio is developed with both consumer needs and retail practicality in mind.</p>
            <Link className="button retailers-button--light" to="/contact">Partner With Us <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="retailers-section retailers-support" aria-labelledby="retailers-support-heading">
        <div className="container">
          <p className="eyebrow eyebrow--dark">Retail Support Model</p>
          <h2 id="retailers-support-heading">More than just a supplier.</h2>
          <div className="retailers-card-grid">
            {support.map(({ title, description, icon: Icon }) => (
              <article className="retailers-card" key={title}>
                <Icon size={31} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="retailers-support__portfolio">The portfolio spans Sublingual Nutrition, Infant Nutrition, Cereal &amp; Meal Replacement, Natural Sweeteners and Family Protection, with Energy &amp; Hydration represented by Zingo within the wider Rainmaker FMCG portfolio.</p>
        </div>
      </section>

      <section className="retailers-section retailers-reach" aria-labelledby="retailers-reach-heading">
        <div className="container retailers-reach__layout">
          <div className="retailers-reach__copy">
            <div>
              <p className="eyebrow eyebrow--dark">Our Reach</p>
              <h2 id="retailers-reach-heading">A Growing<br />Retail Footprint.</h2>
              <p>Rainmaker FMCG works across retail, wholesale, pharmacy and distribution channels, with a growing focus on South Africa, SADC and broader African markets.</p>
            </div>
            <div aria-labelledby="retailers-markets-heading">
              <p className="eyebrow eyebrow--dark">Our Markets</p>
              <h2 id="retailers-markets-heading">Expanding Together.</h2>
              <p>We are focused on building long-term retail and distribution partnerships across South Africa and wider African markets, while developing further international opportunities.</p>
            </div>
          </div>
          <figure className="retailers-reach__map">
            <img src={retailerImage('retailers-market-reach')} alt="Illustrative world map emphasising Africa and connections from South Africa" width={1672} height={941} loading="lazy" />
          </figure>
        </div>
      </section>

    </main>
  )
}
