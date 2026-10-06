export function ProductCollection() {
  const base = import.meta.env.BASE_URL

  return (
    <div className="hero-visual" aria-label="Featured Nature's Nurture products">
      <div className="product-stack product-stack--one">
        <div className="mini-product mini-product--rose">
          <img src={`${base}products/sublingual/b12-folate.png`} alt="Vitamin B12 + Folate" />
          <span className="mini-badge">B12</span>
          <h4>Vitamin B12 + Folate</h4>
        </div>
      </div>
      <div className="product-stack product-stack--two">
        <div className="mini-product mini-product--green">
          <img src={`${base}products/zingo/orange-boost.png`} alt="Zingo Orange Boost" />
          <span className="mini-badge">Zingo</span>
          <h4>Zingo</h4>
        </div>
      </div>
      <div className="product-stack product-stack--three">
        <div className="mini-product mini-product--gold">
          <img src={`${base}products/cereal/banana-bliss.png`} alt="Cereal Banana Bliss" />
          <span className="mini-badge">Cereal</span>
          <h4>Cereal</h4>
        </div>
      </div>
    </div>
  )
}
