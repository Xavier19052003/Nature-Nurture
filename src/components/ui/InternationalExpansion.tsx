import { Globe2 } from 'lucide-react'

export function InternationalExpansion() {
  return (
    <section className="section international-expansion" aria-labelledby="expansion-heading">
      <div className="container international-expansion__inner">
        <div>
          <Globe2 size={32} aria-hidden="true" />
          <p className="eyebrow eyebrow--dark">International expansion</p>
          <h2 id="expansion-heading">Expanding Our Reach</h2>
        </div>
        <p>As Rainmaker FMCG continues to grow, the business is expanding its reach into new international markets, including Australia, New Zealand, South America and Indonesia, with opportunities developing in Bali as part of this broader expansion strategy.</p>
      </div>
    </section>
  )
}
