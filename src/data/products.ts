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

const zingoImageBase = `${import.meta.env.BASE_URL}products/zingo`

const zingoVariants: { slug: string; name: string; file: string; accent: string }[] = [
  { slug: 'zingo-berry-burst', name: 'Berry Burst', file: 'berry-burst.png', accent: '#c23a6b' },
  { slug: 'zingo-cola-classic', name: 'Cola Classic', file: 'cola-classic.png', accent: '#7a4a26' },
  { slug: 'zingo-guava-glow', name: 'Guava Glow', file: 'guava-glow.png', accent: '#e0568a' },
  { slug: 'zingo-lemon-zest', name: 'Lemon Zest', file: 'lemon-zest.png', accent: '#c7c832' },
  { slug: 'zingo-orange-boost', name: 'Orange Boost', file: 'orange-boost.png', accent: '#ec8b4a' },
  { slug: 'zingo-mango-magic', name: 'Mango Magic', file: 'mango-magic.png', accent: '#9ac83a' },
  { slug: 'zingo-peach-delight', name: 'Peach Delight', file: 'peach-delight.png', accent: '#e8734f' },
  { slug: 'zingo-pineapple-power', name: 'Pineapple Power', file: 'pineapple-power.png', accent: '#e8c22a' },
]


const zingoProducts: Product[] = zingoVariants.map((variant) => ({
  id: variant.slug,
  slug: variant.slug,
  name: `Zingo ${variant.name}`,
  brand: "Nature's Nurture",
  category: 'Hydration',
  description: 'Fruit-led hydration designed for active family routines and everyday refreshment.',
  shortDescription: 'Daily hydration support',
  image: `${zingoImageBase}/${variant.file}`,
  format: '5g sachet · makes 2 litres',
  label: 'Best for hydration',
  benefits: ['Bright fruit profile', 'Convenient everyday refreshment', 'Family-friendly flavour'],
  featured: variant.slug === 'zingo-orange-boost',
  accent: variant.accent,
}))

const cerealImageBase = `${import.meta.env.BASE_URL}products/cereal`

const cerealVariants: { slug: string; name: string; file: string; accent: string }[] = [
  { slug: 'cereal-banana-bliss', name: 'Banana Bliss', file: 'banana-bliss.png', accent: '#e8b74a' },
  { slug: 'cereal-pineapple-paradise', name: 'Pineapple Paradise', file: 'pineapple-paradise.png', accent: '#e8c22a' },
  { slug: 'cereal-strawberry-sunrise', name: 'Strawberry Sunrise', file: 'strawberry-sunrise.png', accent: '#e05a5a' },
  { slug: 'cereal-chocolate-crave', name: 'Chocolate Crave', file: 'chocolate-crave.png', accent: '#7a4a26' },
  { slug: 'cereal-custard-dream', name: 'Custard Dream', file: 'custard-dream.png', accent: '#e8a94a' },
]

const cerealProducts: Product[] = cerealVariants.map((variant) => ({
  id: variant.slug,
  slug: variant.slug,
  name: `Cereal & Meal Replacement — ${variant.name}`,
  brand: "Nature's Nurture",
  category: 'Family Nutrition',
  description: 'Practical nourishment for breakfast and busy family routines across the day.',
  shortDescription: 'Instant meal replacement mix',
  image: `${cerealImageBase}/${variant.file}`,
  format: '33.3g sachet',
  label: 'Everyday nourishment',
  benefits: ['High in fibre', 'Rich in iron', 'Vitamins & minerals', 'Contains prebiotics'],
  featured: variant.slug === 'cereal-banana-bliss',
  accent: variant.accent,
}))

// Confirmed final production asset: public-production/products/stevia/stevia-sachets.png
const steviaProduct: Product = {
  id: 'stevia-sachets',
  slug: 'stevia-sachets',
  name: 'Stevia Sachets',
  brand: "Nature's Nurture",
  category: 'Everyday Wellness',
  description: 'A concentrated stevia powder format perfect for baking, cooking and precise measurement, offering sweetness without the sugar.',
  shortDescription: 'Naturally sweet, naturally better',
  image: `${import.meta.env.BASE_URL}products/stevia/stevia-sachets.png`,
  format: 'Sachet',
  label: 'Zero calorie sweetness',
  benefits: ['Zero calories', 'Diabetic-friendly', 'Perfect for hot & cold beverages, baking, desserts, cereals & smoothies'],
  accent: '#7fae4a',
}

// Confirmed final production asset: public-production/products/mosquito-repellent/mosquito-repellent-patches.png
const mosquitoRepellentProduct: Product = {
  id: 'mosquito-repellent-patches',
  slug: 'mosquito-repellent-patches',
  name: 'Mosquito Repellent Patches',
  brand: "Nature's Nurture",
  category: 'Family Protection',
  description: 'Affordable, non-toxic, 24-hour protection for your family. DEET-free with plant-based ingredients, simply stick onto clothing or skin.',
  shortDescription: '24-hour non-toxic protection',
  image: `${import.meta.env.BASE_URL}products/mosquito-repellent/mosquito-repellent-patches.png`,
  format: 'Patch',
  label: 'Family-friendly protection',
  benefits: ['24-hour protection per patch', 'Non-toxic, DEET-free formula', 'Active ingredient: Oil of Lemon Eucalyptus', 'Safe for children and adults of all ages'],
  accent: '#4a7a5e',
}

export const products: Product[] = [
  ...zingoProducts,
  {
    id: 'vitamin-b12-folate',
    slug: 'vitamin-b12-folate',
    name: 'B12 + Folate',
    brand: "Nature's Nurture",
    category: 'Wellness Nutrition',
    description: 'Evidence-led daily nutrient support for energy, focus and everyday wellbeing.',
    shortDescription: 'B6 + Folic Acid · Daily Spray Food Supplement',
    image: `${import.meta.env.BASE_URL}products/sublingual/b12-folate.png`,
    format: '30 ml',
    label: 'Supports daily wellness',
    benefits: ['Supports energy', 'Red blood cells', 'Immune function'],
    featured: true,
    accent: '#d8b7c8',
  },
  {
    id: 'iron',
    slug: 'iron',
    name: 'Iron',
    brand: "Nature's Nurture",
    category: 'Daily Support',
    description: 'A practical iron-support formulation designed for modern routines and daily nutrition.',
    shortDescription: 'Daily Spray Food Supplement',
    image: `${import.meta.env.BASE_URL}products/sublingual/iron.png`,
    format: '30 ml',
    label: 'Iron support formula',
    benefits: ['Supports energy', 'Supports red blood cells'],
    accent: '#b0d0a3',
  },
  {
    id: 'vitamin-d3-k2',
    slug: 'vitamin-d3-k2',
    name: 'D3 + K2',
    brand: "Nature's Nurture",
    category: 'Wellness Nutrition',
    description: 'A targeted daily formula created to support normal wellness and everyday balance.',
    shortDescription: 'Daily Spray Food Supplement',
    image: `${import.meta.env.BASE_URL}products/sublingual/d3-k2.png`,
    format: '30 ml',
    label: 'Supports daily balance',
    benefits: ['Supports bone health', 'Supports immune health'],
    featured: true,
    accent: '#b69b6d',
  },
  {
    id: 'calm-complex',
    slug: 'calm-complex',
    name: 'Calm Complex',
    brand: "Nature's Nurture",
    category: 'Wellness Nutrition',
    description: 'A calming daily formula created to support focus and emotional balance as part of an everyday wellness routine.',
    shortDescription: 'Daily Spray Food Supplement',
    image: `${import.meta.env.BASE_URL}products/sublingual/calm-complex.png`,
    format: '30 ml',
    label: 'Supports calm & focus',
    benefits: ['Supports calm', 'Supports focus', 'Supports emotional balance'],
    accent: '#7a9b6d',
  },
  {
    id: 'infant-formula-stage-1',
    slug: 'infant-formula-stage-1',
    name: 'Infant Formula — Stage 1',
    brand: "Nature's Nurture",
    category: 'Child Nutrition',
    description: 'Gentle early-life nutrition built to help families support growth and everyday feeding confidence.',
    shortDescription: '0–6 months · Complete nutrition',
    image: `${import.meta.env.BASE_URL}products/infant-formula/stage-1.png`,
    format: '450g · 0–6 months',
    label: 'Family essentials',
    benefits: ['Nutrient dense to support healthy growth', 'Supports brain development & immune function', 'Gentle on tiny tummies'],
    accent: '#e7c6a8',
  },
  {
    id: 'infant-formula-stage-2',
    slug: 'infant-formula-stage-2',
    name: 'Infant Formula — Stage 2',
    brand: "Nature's Nurture",
    category: 'Child Nutrition',
    description: 'Follow-on nutrition designed to support active growth and development from six months.',
    shortDescription: '6–12 months · Complete nutrition',
    image: `${import.meta.env.BASE_URL}products/infant-formula/stage-2.png`,
    format: '450g · 6–12 months',
    label: 'Family essentials',
    benefits: ['Supports active growth & development', 'Nutrient dense with key protein & choline', 'Supports digestive comfort'],
    accent: '#b7a8d9',
  },
  ...cerealProducts,
  steviaProduct,
  mosquitoRepellentProduct,
]

export const featuredProducts = products.filter((product) => product.featured)
export const categories = ['All Products', ...new Set(products.map((product) => product.category))]
