export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: string
  description: string
  shortDescription?: string
  image: string
  gallery?: string[]
  size?: string
  format: string
  label: string
  benefits: string[]
  features?: string[]
  ingredients?: string[]
  nutrition?: Record<string, string>
  usage?: string
  certifications?: string[]
  tags?: string[]
  featured?: boolean
  source?: string
  accent?: string
}

export function createProductPlaceholder(label: string, primary: string, secondary: string) {
  const safeLabel = label.replace(/&/g, 'and')
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stop-color="${primary}"/>
          <stop offset="100%" stop-color="${secondary}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="900" fill="url(#g)"/>
      <rect x="145" y="120" width="510" height="660" rx="42" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)"/>
      <circle cx="400" cy="335" r="118" fill="rgba(255,255,255,0.18)"/>
      <text x="400" y="495" text-anchor="middle" font-family="Georgia, serif" font-size="62" fill="white" letter-spacing="2">${safeLabel}</text>
    </svg>
  `)}`
}

export const products: Product[] = [
  {
    id: 'zingo-orange-burst',
    slug: 'zingo-orange-burst',
    name: 'Zingo Orange Burst',
    brand: "Nature's Nurture",
    category: 'Hydration',
    description: 'Fruit-led hydration designed for active family routines and everyday refreshment.',
    shortDescription: 'Daily hydration support',
    image: createProductPlaceholder('Zingo', '#ef8d4d', '#f6d4aa'),
    format: '300ml',
    label: 'Best for hydration',
    benefits: ['Bright fruit profile', 'Convenient everyday refreshment', 'Family-friendly flavour'],
    featured: true,
    accent: '#ec8b4a',
  },
  {
    id: 'vitamin-b12-folate',
    slug: 'vitamin-b12-folate',
    name: 'Vitamin B12 + Folate',
    brand: "Nature's Nurture",
    category: 'Wellness Nutrition',
    description: 'Evidence-led daily nutrient support for energy, focus and everyday wellbeing.',
    shortDescription: 'Daily wellness support',
    image: createProductPlaceholder('B12', '#d7b7c8', '#f3e5ef'),
    format: '30 sprays',
    label: 'Supports daily wellness',
    benefits: ['Convenient oral support', 'Energy and vitality focus', 'Daily micronutrient routine'],
    featured: true,
    accent: '#d8b7c8',
  },
  // Client confirmation pending: "Iron + Yster" is retained as-is until the final bilingual brand naming is confirmed.
  {
    id: 'iron-yster',
    slug: 'iron-yster',
    name: 'Iron + Yster',
    brand: "Nature's Nurture",
    category: 'Daily Support',
    description: 'A practical iron-support formulation designed for modern routines and daily nutrition.',
    shortDescription: 'Formulated support',
    image: createProductPlaceholder('Iron', '#b7d3ad', '#eff6ea'),
    format: '30 capsules',
    label: 'Iron support formula',
    benefits: ['Daily nutritional support', 'Easy everyday use', 'Balanced wellness routine'],
    accent: '#b0d0a3',
  },
  {
    id: 'vitamin-d3-k2',
    slug: 'vitamin-d3-k2',
    name: 'Vitamin D3 + K2',
    brand: "Nature's Nurture",
    category: 'Wellness Nutrition',
    description: 'A targeted daily formula created to support normal wellness and everyday balance.',
    shortDescription: 'Essential daily support',
    image: createProductPlaceholder('D3 + K2', '#b79b66', '#efe4bb'),
    format: '30 softgels',
    label: 'Supports daily balance',
    benefits: ['Targeted nutrient support', 'Daily consistency', 'Trusted formulation'],
    featured: true,
    accent: '#b69b6d',
  },
  {
    id: 'infant-formula',
    slug: 'infant-formula',
    name: 'Infant Formula',
    brand: "Nature's Nurture",
    category: 'Child Nutrition',
    description: 'Gentle early-life nutrition built to help families support growth and everyday feeding confidence.',
    shortDescription: 'Early-life nutrition',
    image: createProductPlaceholder('Infant', '#e9c7ab', '#f8e5d8'),
    format: '800g tin',
    label: 'Family essentials',
    benefits: ['Nutritional support for early growth', 'Convenient daily feeding', 'Trusted formula profile'],
    accent: '#e7c6a8',
  },
  {
    id: 'cereal-meal-replacement',
    slug: 'cereal-meal-replacement',
    name: 'Cereal & Meal Replacement',
    brand: "Nature's Nurture",
    category: 'Family Nutrition',
    description: 'Practical nourishment for breakfast and busy family routines across the day.',
    shortDescription: 'Breakfast & nutrition',
    image: createProductPlaceholder('Cereal', '#8eb289', '#d9ead4'),
    format: '500g pack',
    label: 'Everyday nourishment',
    benefits: ['Convenient meal support', 'Balanced daily nutrition', 'Family-friendly formulation'],
    featured: true,
    accent: '#8db38b',
  },
]

export const featuredProducts = products.filter((product) => product.featured)
export const categories = ['All Products', ...new Set(products.map((product) => product.category))]
