import type { Product } from './products'

type Benefit = { title: string; text: string }
export type SublingualContent = {
  slug: string
  name: string
  description: string
  overview: string
  accent: string
  image: string
  highlights: string[]
  benefits: Benefit[]
  nutrientHeading: string
  nutrientIntro?: string
  nutrients: { title: string; form: string; points?: string[] }[]
}

// Client-approved website brief. Preserve existing primary imagery; final packaging will follow.
const primaryImage = (file: string) => `${import.meta.env.BASE_URL}products/sublingual/${file}`
export const sublingualRange: SublingualContent[] = [
  {
    slug: 'vitamin-b12-folate', image: primaryImage('b12-folate.png'), name: 'Vitamin B12 + Folate', accent: '#f2e5d2',
    description: 'Daily sublingual nutrient support combining Vitamin B12 and Folate for energy production, cognitive function, nerve health and healthy red blood cell formation.',
    overview: 'Vitamin B12 and Folate bring complementary roles to one daily formula. Vitamin B12 supports energy production and healthy nerve function, while Folate contributes to normal cell growth, development and blood cell formation.',
    highlights: ['Vitamin B12 + Folate', 'Energy production', 'Nerve & blood cell support'],
    benefits: [
      { title: 'Energy Production', text: 'Vitamin B12 supports energy production by helping the body convert food into usable energy.' },
      { title: 'Cognitive Support', text: 'Supports mental clarity, focus and normal cognitive function.' },
      { title: 'Nerve Health', text: 'Vitamin B12 supports healthy nerve function.' },
      { title: 'Red Blood Cell Formation', text: 'Vitamin B12 and Folate support normal red blood cell formation.' },
      { title: 'DNA & Cellular Function', text: 'Vitamin B12 contributes to DNA synthesis while Folate supports normal cell growth and development.' },
      { title: 'B12 + Folate Combination', text: 'A combined daily format bringing together two complementary essential nutrients.' },
      { title: 'Convenient Sublingual Delivery', text: 'An easy spray format designed for everyday nutrient support.' },
    ],
    nutrientHeading: 'Two Essential Nutrients. One Daily Formula.',
    nutrients: [
      { title: 'Vitamin B12', form: 'Methylcobalamin · Cobalamin', points: ['Energy production', 'Healthy nerve function', 'Cognitive support', 'Red blood cell formation', 'DNA synthesis', 'Myelin sheath support'] },
      { title: 'Folate / Vitamin B9', form: 'Folate', points: ['Cell growth', 'Cellular development', 'DNA-related processes', 'Normal blood cell formation'] },
    ],
  },
  {
    slug: 'iron', image: primaryImage('iron.png'), name: 'Iron', accent: '#f1e0e2',
    description: 'Daily sublingual iron support for healthy red blood cell production, oxygen transport, energy and cognitive function.',
    overview: 'Iron plays an essential role in red blood cells and the transport of oxygen throughout the body. This daily spray formula uses Ferrous Bisglycinate, which the supplied product material positions as a gentler iron format.',
    highlights: ['Ferrous Bisglycinate', 'Oxygen transport', 'Red blood cell support'],
    benefits: [
      { title: 'Red Blood Cell Production', text: 'Iron plays an essential role in healthy red blood cell production.' },
      { title: 'Oxygen Transport', text: 'Iron supports the transport of oxygen throughout the body through its role in red blood cells.' },
      { title: 'Energy Support', text: 'Supports normal energy production and everyday vitality.' },
      { title: 'Cognitive Function', text: 'Supports normal cognitive function, focus and mental clarity.' },
      { title: 'Immune Support', text: 'The supplied product material positions Iron as contributing to normal immune function.' },
      { title: 'Ferrous Bisglycinate', text: 'The formula uses Ferrous Bisglycinate, which the supplied material positions as a gentler iron format.' },
      { title: 'Sublingual Convenience', text: 'An easy spray format requiring no tablet swallowing.' },
    ],
    nutrientHeading: 'Iron. Thoughtfully Formulated.',
    nutrients: [{ title: 'Iron', form: 'Ferrous Bisglycinate', points: ['Healthy red blood cell production', 'Oxygen transport', 'Normal energy production', 'Normal cognitive function'] }],
  },
  {
    slug: 'vitamin-d3-k2', image: primaryImage('d3-k2.png'), name: 'Vitamin D3 + K2', accent: '#e0eaf0',
    description: 'A combined Vitamin D3 and K2 sublingual formula developed around bone health, calcium utilisation, immune function and cardiovascular wellness.',
    overview: 'Vitamin D3 and Vitamin K2 are presented as complementary nutrients within one daily formula. Vitamin D3 supports normal calcium absorption, bone health and immune function; the supplied material positions Vitamin K2 around calcium utilisation and cardiovascular wellness.',
    highlights: ['Vitamin D3 + K2', 'Bone health', 'Calcium utilisation'],
    benefits: [
      { title: 'Bone Health', text: 'Supports normal bone health.' },
      { title: 'Calcium Absorption', text: 'Vitamin D3 supports normal calcium absorption.' },
      { title: 'Immune Support', text: 'Vitamin D3 contributes to normal immune function.' },
      { title: 'D3 + K2 Combination', text: 'Combines Vitamin D3 and Vitamin K2 in one convenient spray format.' },
      { title: 'Calcium Utilisation', text: 'The supplied material describes Vitamin K2 as helping direct calcium towards bones.' },
      { title: 'Cardiovascular Support', text: 'The supplied product material positions Vitamin K2 around cardiovascular wellness.' },
      { title: 'Convenient Sublingual Delivery', text: 'A compact spray format designed for easy everyday use.' },
    ],
    nutrientHeading: 'Better Together.',
    nutrientIntro: 'The supplied product material presents Vitamin D3 and Vitamin K2 as complementary nutrients within the same daily formula.',
    nutrients: [
      { title: 'Vitamin D3', form: 'Cholecalciferol', points: ['Calcium absorption', 'Bone health', 'Immune support'] },
      { title: 'Vitamin K2', form: 'Menaquinone-7 / MK-7', points: ['Calcium utilisation', 'Bone-related positioning', 'Cardiovascular positioning'] },
    ],
  },
  {
    slug: 'vitamin-b-complex', image: primaryImage('calm-complex.png'), name: 'Vitamin B Complex', accent: '#e3eadc',
    description: 'A comprehensive blend of eight essential B vitamins for normal energy production, nutrient metabolism, nervous-system function and everyday nutritional support.',
    overview: 'Vitamin B Complex brings together B1, B2, B3, B5, B6, B7, B9 and B12 in a convenient daily spray. B vitamins are water-soluble nutrients, and the supplied material highlights the importance of regular replenishment.',
    highlights: ['8 Essential B Vitamins', 'Energy & metabolism', 'Nervous-system support'],
    benefits: [
      { title: 'Energy', text: 'Supports normal energy production and everyday vitality.' },
      { title: 'Metabolism', text: 'Supports nutrient processing and normal energy metabolism.' },
      { title: 'Nervous System', text: 'Supports healthy nervous-system function.' },
      { title: 'Cognitive Support', text: 'The supplied material positions the blend around focus, memory, clarity and normal brain function.' },
      { title: 'Skin & Hair', text: 'The supplied product material positions the B-vitamin blend as supporting healthy skin and hair.' },
      { title: 'Daily Wellbeing', text: 'A comprehensive blend of eight essential B vitamins for everyday nutritional support.' },
      { title: 'Regular Replenishment', text: 'B vitamins are water-soluble nutrients and the supplied material highlights the importance of regular replenishment.' },
    ],
    nutrientHeading: '8 Essential B Vitamins. One Daily Blend.',
    nutrients: [
      { title: 'B1', form: 'Thiamine' }, { title: 'B2', form: 'Riboflavin' },
      { title: 'B3', form: 'Niacin' }, { title: 'B5', form: 'Pantothenic Acid' },
      { title: 'B6', form: 'Pyridoxine' }, { title: 'B7', form: 'Biotin' },
      { title: 'B9', form: 'Folate' }, { title: 'B12', form: 'Cobalamin' },
    ],
  },
]

// Keep the existing primary assets, including the legacy B Complex filename.
// Replace individual image URLs only when updated approved packaging photography is supplied.
export const sublingualProducts: Product[] = sublingualRange.map((item, index) => ({
  id: item.slug, slug: item.slug, name: item.name, brand: "Nature's Nurture",
  category: 'Sublingual Nutrition', description: item.description,
  shortDescription: item.highlights.join(' · '), image: item.image, format: 'Sublingual spray',
  label: item.highlights[0], benefits: item.benefits.map(({ title }) => title),
  features: item.highlights, accent: item.accent, featured: index === 0 || index === 2,
  usage: 'Apply the spray under the tongue according to the directions on the current product label.',
}))

export const whySublingual: Benefit[] = [
  { title: 'Rapid Absorption', text: 'Designed for absorption through the oral mucosa, reducing reliance on normal digestive processing.' },
  { title: 'Effortless Convenience', text: 'Simple spray application — no pills, no swallowing and no water required.' },
  { title: 'Controlled Dosing', text: 'Spray delivery is designed around accurate, consistent dosing.' },
  { title: 'On-the-Go Daily Use', text: 'A compact format designed for convenient everyday supplementation.' },
]
export const sublingualComparison = [
  { factor: 'Delivery Route', pills: 'Processed through the digestive system', spray: 'Delivered through the oral mucosa' },
  { factor: 'Swallowing', pills: 'Tablet or capsule must be swallowed', spray: 'Spray format — no tablet swallowing' },
  { factor: 'Water', pills: 'Water may be required', spray: 'No water required for spray application' },
  { factor: 'Convenience', pills: 'Traditional tablet/capsule routine', spray: 'Compact spray format for everyday use' },
  { factor: 'Dosing Format', pills: 'Fixed tablet or capsule format', spray: 'Controlled spray delivery' },
  { factor: 'Digestive Processing', pills: 'Passes through normal digestive processing', spray: 'Designed to reduce reliance on digestive processing' },
]
export const sublingualDifference: Benefit[] = [
  { title: 'No Pills', text: 'No conventional tablet or capsule required.' },
  { title: 'No Water', text: 'Use without needing a glass of water.' },
  { title: 'Easy Daily Routine', text: 'Compact spray format designed for everyday convenience.' },
  { title: 'Controlled Spray Delivery', text: 'Designed around accurate and consistent spray application.' },
]
export const ironFormat = [
  { title: 'Traditional Iron Tablets', points: [
    { title: 'Digestive Processing', text: 'Traditional tablets pass through the digestive system before absorption.' },
    { title: 'Swallowing', text: 'Tablet formats require swallowing.' },
    { title: 'Taste', text: 'Some conventional iron formats may have a metallic taste.' },
    { title: 'Digestive Comfort', text: 'The supplied material identifies stomach upset, nausea and constipation as common concerns associated with traditional iron supplementation.' },
  ] },
  { title: 'Sublingual Iron', points: [
    { title: 'Spray Format', text: 'Simple spray application.' },
    { title: 'No Tablet Swallowing', text: 'No conventional tablet or capsule is required.' },
    { title: 'Convenient Use', text: 'Designed for easy everyday supplementation.' },
    { title: 'Ferrous Bisglycinate', text: 'The source positions the chosen iron form as gentler on the stomach.' },
  ] },
]
