import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Droplet,
  Globe2,
  FlaskConical,
  Sparkles,
  Target,
} from 'lucide-react'
import { products, type Product } from './products'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type NNPillar = {
  title: string
  description: string
  icon: LucideIcon
}

export type NNPortfolioArea = {
  number: string
  title: string
  description: string
}

// The four sublingual sprays currently approved and in production —
// mirrors the real catalogue rather than the PDF's generic "B Complex" label,
// since the actual approved product in the range is "Calm Complex".
const sublingualSlugs = ['vitamin-b12-folate', 'iron', 'vitamin-d3-k2', 'calm-complex']
const cerealSlugs = [
  'cereal-banana-bliss',
  'cereal-pineapple-paradise',
  'cereal-strawberry-sunrise',
  'cereal-chocolate-crave',
  'cereal-custard-dream',
]
const infantSlugs = ['infant-formula-stage-1', 'infant-formula-stage-2']

function findProducts(slugs: string[]): Product[] {
  return slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product))
}

export const naturesNurtureContent = {
  slug: 'natures-nurture',
  name: "Nature's Nurture",

  hero: {
    eyebrow: "Nature's Nurture",
    headline: 'Wellness, Reimagined for Everyday Life',
    lead: "Nature's Nurture brings together convenient nutrition, everyday wellness and family-focused essentials — from fast-absorbing sublingual sprays to infant formula, cereals and natural, protective products for daily life.",
    images: [
      asset('products/sublingual/b12-folate.png'),
      asset('products/infant-formula/stage-1.png'),
      asset('products/cereal/banana-bliss.png'),
      asset('products/stevia/stevia-sachets.png'),
    ],
  },

  intro: {
    eyebrow: "What is Nature's Nurture?",
    headline: 'Everyday nutrition. Thoughtfully delivered.',
    copy: "Nature's Nurture is a science-led wellness brand built around practical, everyday products for the whole family — spanning sublingual micronutrient sprays, infant nutrition, cereals, natural sweeteners and family protection essentials.",
  },

  sublingual: {
    eyebrow: 'Hero Collection',
    headline: 'Sublingual Nutrition',
    lead: 'At the heart of the Nature\u2019s Nurture portfolio sits the sublingual micronutrient spray range.',
    products: findProducts(sublingualSlugs),
  },

  whySublingual: {
    headline: 'Why sublingual?',
    points: [
      { title: 'Direct delivery', description: 'Designed to bypass the digestive system for direct, rapid delivery.', icon: Sparkles },
      { title: 'No water required', description: 'A quick spray, anywhere, anytime — no mixing or measuring cups needed.', icon: Droplet },
      { title: 'Precise dosing', description: 'Each spray is formulated for consistent, precise everyday dosing.', icon: Target },
      { title: 'Everyday convenience', description: 'A fast, simple addition to any daily wellness routine.', icon: FlaskConical },
    ] as NNPillar[],
  },

  transition: {
    headline: 'More ways to nurture everyday life',
    lead: "Nature's Nurture is more than the spray range — the portfolio extends into everyday family nutrition and lifestyle essentials.",
    areas: [
      { number: '01', title: 'Sublingual Nutrition', description: 'Fast-absorbing micronutrient sprays.' },
      { number: '02', title: 'Infant & Family Nutrition', description: 'Formula designed for the earliest stages of life.' },
      { number: '03', title: 'Cereal & Meal Replacement', description: 'Convenient nutrition for busy family routines.' },
      { number: '04', title: 'Natural Sweeteners', description: 'Plant-based sweetness for everyday use.' },
      { number: '05', title: 'Family Protection', description: 'Practical, protective everyday essentials.' },
    ] as NNPortfolioArea[],
  },

  infant: {
    eyebrow: 'Infant & Family Nutrition',
    headline: "A foundation for your baby's future",
    lead: 'Nutrient-packed formulas designed for the crucial first year.',
    products: findProducts(infantSlugs),
  },

  cereal: {
    eyebrow: 'Cereal & Meal Replacement',
    headline: 'Convenient nutrition for busy lifestyles',
    products: findProducts(cerealSlugs),
  },

  stevia: {
    eyebrow: 'Natural Sweetness',
    headline: 'Sweetness, naturally',
    product: products.find((product) => product.slug === 'stevia-sachets'),
    points: ['Natural, plant-based sweetness', 'Zero calories', 'Supports everyday sugar reduction', 'For everyday hot & cold use'],
  },

  mosquito: {
    eyebrow: 'Family Protection',
    headline: 'Everyday protection for the whole family',
    product: products.find((product) => product.slug === 'mosquito-repellent-patches'),
    points: [
      '24-hour protection per patch',
      'DEET-free, plant-based ingredients',
      'Apply to clothing or nearby objects — do not apply directly to skin',
      'Ideal for camping & hiking, beach & water activities, school & play',
    ],
  },

  pillars: {
    eyebrow: 'The Portfolio',
    headline: 'Four complementary areas of wellness',
    areas: [
      { number: '01', title: 'Sublingual Nutrition', description: 'Fast-absorbing sprays delivering micronutrients directly into the bloodstream.' },
      { number: '02', title: 'Energy & Hydration', description: 'Functional powdered drinks engineered for hydration, refreshment and everyday vitality.' },
      { number: '03', title: 'Infant & Family Nutrition', description: 'Trusted formulas and cereals designed to nourish from the earliest stages of life.' },
      { number: '04', title: 'Natural & Lifestyle', description: 'Botanical sweeteners and protective wellness patches for clean, conscious living.' },
    ] as NNPortfolioArea[],
  },

  principles: {
    headline: 'What Nature\u2019s Nurture stands for',
    items: [
      { title: 'Premium', description: 'Considered formulation and packaging across the range.', icon: Award },
      { title: 'Scientific', description: 'Evidence-led products built around trusted ingredients.', icon: FlaskConical },
      { title: 'International', description: 'A portfolio built for retail and export distribution.', icon: Globe2 },
      { title: 'Wellness-Led', description: 'Practical products for everyday family wellbeing.', icon: Sparkles },
    ] as NNPillar[],
  },

  cta: {
    headline: 'Nourishing everyday life, naturally.',
    copy: "Nature's Nurture brings together nutrition, wellness and family-focused products designed for real, everyday routines.",
  },
}
