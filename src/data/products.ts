import { sublingualProducts } from './sublingual'
import { mosquitoBenefits, mosquitoPatchVariants } from './mosquitoPatches'

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
  { slug: 'zingo-mango-magic', name: 'Mango Magic', file: 'zingo-mango-product.webp', accent: '#9ac83a' },
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
  format: 'Available in 100-sachet and 50-sachet packs.',
  label: 'Zero calorie sweetness',
  benefits: ['Zero calories', 'Diabetic-friendly', 'Perfect for hot & cold beverages, baking, desserts, cereals & smoothies'],
  accent: '#7fae4a',
}

// Two approved variants share the same source-supported product positioning.
const mosquitoRepellentProducts: Product[] = mosquitoPatchVariants.map((variant) => ({
  id: variant.slug,
  slug: variant.slug,
  name: variant.name,
  brand: "Nature's Nurture",
  category: 'Family Protection',
  description: variant.hero,
  shortDescription: variant.shortDescription,
  image: `${import.meta.env.BASE_URL}products/mosquito-repellent/${variant.image}`,
  format: 'Peel-and-stick patches',
  label: 'Long-lasting protection',
  benefits: mosquitoBenefits.map((benefit) => benefit.title),
  accent: '#4a7a5e',
}))

export const products: Product[] = [
  ...zingoProducts,
  ...sublingualProducts,
  {
    id: 'infant-formula-stage-1',
    slug: 'infant-formula-stage-1',
    name: 'Infant Formula — Stage 1',
    brand: "Nature's Nurture",
    category: 'Child Nutrition',
    description: 'Gentle early-life nutrition built to help families support growth and everyday feeding confidence.',
    shortDescription: '0–6 months · Complete nutrition',
    image: '',
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
    image: '',
    format: '450g · 6–12 months',
    label: 'Family essentials',
    benefits: ['Supports active growth & development', 'Nutrient dense with key protein & choline', 'Supports digestive comfort'],
    accent: '#b7a8d9',
  },
  ...cerealProducts,
  steviaProduct,
  ...mosquitoRepellentProducts,
]

// Keep individual flavours as approved range assets, not separate catalogue entries.
export const zingoRange: Product = {
  ...zingoProducts[0],
  id: 'zingo-range',
  slug: 'zingo',
  name: 'Zingo Range',
  brand: 'Zingo',
  category: 'Energy & Hydration',
  image: `${zingoImageBase}/orange-boost.png`,
  shortDescription: 'Powdered fruit drink · 8 flavours',
  gallery: zingoProducts.map((product) => product.image),
  tags: zingoVariants.map((variant) => variant.name),
}

const catalogueCategoryByProductCategory: Record<string, string> = {
  'Wellness Nutrition': 'Sublingual Nutrition',
  'Daily Support': 'Sublingual Nutrition',
  'Child Nutrition': 'Infant Nutrition',
  'Family Nutrition': 'Cereal & Meal Replacement',
  'Everyday Wellness': 'Natural Sweeteners',
  'Family Protection': 'Family Protection',
}

export const catalogueProducts: Product[] = [
  ...products.filter((product) => !product.slug.startsWith('zingo-')).map((product) => ({
    ...product,
    category: catalogueCategoryByProductCategory[product.category] ?? product.category,
  })),
  zingoRange,
]

export const featuredProducts = [
  ...catalogueProducts.filter((product) => product.featured && product.id !== zingoRange.id),
  zingoRange,
]
export const categories = ['All Products', ...new Set(catalogueProducts.map((product) => product.category))]

export function getProductHref(product: Product) {
  if (cerealVariants.some((variant) => variant.slug === product.slug)) return '/products/cereal-meal-replacement'
  if (product.slug === 'infant-formula-stage-1' || product.slug === 'infant-formula-stage-2') return '/products/infant-formula'
  return product.slug === 'zingo' || zingoVariants.some((variant) => variant.slug === product.slug)
    ? '/brands/zingo'
    : `/products/${product.slug}`
}

export function getCategoryHref(category: string) {
  return `/products?${new URLSearchParams({ category })}#catalogue`
}
