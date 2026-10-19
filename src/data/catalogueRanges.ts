import { catalogueProducts, getProductHref, type Product } from './products'

// Group existing catalogue records; product copy, assets and detail routes stay in products.ts.
const rangeDefinitions = [
  { id: 'sublingual', title: 'Sublingual Nutrition', category: 'Sublingual Nutrition' },
  { id: 'infant', title: 'Infant Formula', category: 'Infant Nutrition' },
  { id: 'cereal', title: 'Cereal & Meal Replacement', category: 'Cereal & Meal Replacement' },
  { id: 'sweeteners', title: 'Natural Sweeteners', category: 'Natural Sweeteners' },
  { id: 'protection', title: 'Family Protection', category: 'Family Protection' },
  { id: 'zingo', title: 'Energy & Hydration', category: 'Energy & Hydration' },
]

export const catalogueRanges = rangeDefinitions.map((range) => ({
  ...range,
  products: catalogueProducts.filter((product) => product.category === range.category),
}))

export function toProductSlide(product: Product, concise = false) {
  return {
    id: product.id,
    title: product.category === 'Family Protection' ? product.name : product.name.includes(' — ') ? product.name.split(' — ')[1] : product.name,
    category: product.category,
    image: product.image,
    imageAlt: product.name,
    placeholder: !product.image,
    accent: product.accent,
    highlights: product.category === 'Sublingual Nutrition' ? product.features : undefined,
    description: concise ? product.shortDescription ?? product.description : product.description,
    detail: concise ? undefined : product.category === 'Infant Nutrition' ? product.shortDescription : product.format,
    href: getProductHref(product),
    action: product.id === 'zingo-range' ? 'Explore Range' : 'Explore Product',
    actionLabel: `Explore ${product.name}`,
  }
}
