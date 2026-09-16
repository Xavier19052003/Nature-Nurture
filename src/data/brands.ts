import type { LucideIcon } from 'lucide-react'
import {
  Droplets,
  Layers,
  Palette,
  PartyPopper,
  Sparkles,
  Store,
  Timer,
  Users2,
  Wallet,
} from 'lucide-react'
import { products, type Product } from './products'

export type BrandPillar = {
  title: string
  description: string
  icon: LucideIcon
}

export type BrandStep = {
  title: string
  description: string
}

export type BrandFlavourGroup = {
  title: string
  slugs: string[]
}

export type BrandContent = {
  slug: string
  name: string
  tagline: string
  accent: string
  heroEyebrow: string
  heroHeadline: string
  heroLead: string
  heroImage: string
  heroStat: string
  whatIsTitle: string
  whatIsLead: string
  whatIsCopy: string
  pillars: BrandPillar[]
  opportunityEyebrow: string
  opportunityTitle: string
  opportunityCopy: string
  opportunityContrast: [string, string]
  valueHeadline: string
  valueCopy: string
  valueStat: { top: string; bottom: string }
  reasons: { title: string; icon: LucideIcon }[]
  flavourGroups: BrandFlavourGroup[]
  steps: BrandStep[]
  shelfTitle: string
  shelfCopy: string
  worldTitle: string
  worldCopy: string
  growthTitle: string
  growthCopy: string
  growthPoints: string[]
  ctaHeadline: string
  ctaCopy: string
}

const zingoImage = (file: string) => `${import.meta.env.BASE_URL}products/zingo/${file}`

export const zingoBrand: BrandContent = {
  slug: 'zingo',
  name: 'Zingo',
  tagline: "Zingo's World of Colour & Fun",
  accent: '#d8752b',
  heroEyebrow: 'Zingo · Fruit-led hydration',
  heroHeadline: "Zingo's World of Colour & Fun",
  heroLead: 'A vibrant powdered fruit drink experience built around flavour, colour and everyday fun — turning ordinary hydration into something families look forward to.',
  heroImage: zingoImage('orange-boost.png'),
  heroStat: '8 flavours',
  whatIsTitle: 'What is Zingo?',
  whatIsLead: 'A powdered fruit drink that transforms water into a burst of flavour and colour.',
  whatIsCopy: 'Zingo is a fruit-flavoured powdered drink designed for kids, families and everyday refreshment. One sachet mixes into a full jug of colourful, flavour-packed hydration — practical, affordable and made for real family routines.',
  pillars: [
    { title: 'Flavour', description: 'Bright, fruit-forward recipes built for instant recognition and repeat enjoyment.', icon: Sparkles },
    { title: 'Design', description: 'Eye-catching, high-contrast packaging that stands out on shelf and at home.', icon: Palette },
    { title: 'Experience', description: 'A playful, colourful moment that turns hydration into something to enjoy.', icon: PartyPopper },
    { title: 'Recognition', description: 'Distinctive shelf impact that helps Zingo get noticed and chosen.', icon: Store },
  ],
  opportunityEyebrow: 'The Zingo opportunity',
  opportunityTitle: 'Children want excitement. Parents want quality.',
  opportunityCopy: 'Consumers are looking for affordable beverage alternatives, and children are drawn to visually engaging brands. As shelf competition grows, Zingo is built to create the emotional connection that turns a glance into a purchase — and a purchase into a habit.',
  opportunityContrast: ['Children want excitement.', 'Parents want quality.'],
  valueHeadline: 'Value-for-money hydration for every family',
  valueCopy: 'Zingo is positioned as an affordable, everyday powdered drink for families, students and budget-conscious consumers. One compact sachet goes a long way.',
  valueStat: { top: '1 sachet', bottom: '2 litres' },
  reasons: [
    { title: 'Affordable refreshment', icon: Wallet },
    { title: 'Multiple servings', icon: Layers },
    { title: 'Fruity flavours', icon: Droplets },
    { title: 'Everyday convenience', icon: Timer },
    { title: 'For homes, schools & events', icon: Users2 },
  ],
  flavourGroups: [
    { title: 'Core Collection', slugs: ['zingo-berry-burst', 'zingo-cola-classic', 'zingo-guava-glow'] },
    { title: 'Citrus Energy', slugs: ['zingo-lemon-zest', 'zingo-orange-boost', 'zingo-mango-magic'] },
    { title: 'Tropical Refresh', slugs: ['zingo-peach-delight', 'zingo-pineapple-power'] },
  ],
  steps: [
    { title: 'Choose your flavour', description: 'Pick from eight vibrant Zingo flavours.' },
    { title: 'Measure & mix', description: 'Add one sachet to water for a full jug of Zingo.' },
    { title: 'Stir & enjoy', description: 'Stir until the colour and flavour come alive.' },
    { title: 'Customise', description: 'Serve chilled, over ice, or however your family enjoys it most.' },
  ],
  shelfTitle: 'Built for shelf visibility',
  shelfCopy: 'High-contrast packaging, strong colour blocking and distinctive character design give Zingo instant flavour recognition on shelf — supporting trial, repeat purchase and long-term retail partnership value.',
  worldTitle: 'The Zingo World',
  worldCopy: 'Zingo extends beyond the drink itself — a wider brand universe of characters, seasonal campaigns and community engagement that keeps the experience fresh for families.',
  growthTitle: 'Built for growth',
  growthCopy: 'The Zingo platform is designed with room to expand alongside retail partners and communities.',
  growthPoints: ['New flavours', 'Seasonal editions', 'School campaigns', 'Retail partnerships'],
  ctaHeadline: 'Stir. Sip. Smile.',
  ctaCopy: 'Experience Zingo — vibrant, affordable hydration for every family moment.',
}

export const brandContentBySlug: Record<string, BrandContent> = {
  zingo: zingoBrand,
}

export function getBrandProducts(content: BrandContent): Product[] {
  const slugs = content.flavourGroups.flatMap((group) => group.slugs)
  if (slugs.length === 0) return []
  return slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product))
}
