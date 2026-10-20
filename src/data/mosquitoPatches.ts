// Fly-related naming and general positioning follow client feedback dated 2026-10-20.
// The source PDF does not establish fly-specific efficacy or duration.
// Client-supplied patch brief: shared technology, distinct everyday-use contexts.
// Do not infer ingredients, age suitability or disease claims from the pack artwork.
export const mosquitoBenefits = [
  { id: 'lasting', title: 'Long-lasting protection', description: 'The deck consistently markets the product around extended protection and fewer applications compared with traditional spray-style formats.' },
  { id: 'clothing', title: 'No direct skin application', description: 'One of the strongest practical differentiators. The patch is placed on clothing or nearby objects instead of directly onto the skin.' },
  { id: 'deet', title: 'DEET-free', description: 'The product is repeatedly positioned as a DEET-free alternative.' },
  { id: 'application', title: 'Easy peel-and-stick application', description: 'No creams, aerosols or complicated routines. The user simply removes the patch and attaches it where needed.' },
  { id: 'portable', title: 'Portable protection', description: 'Easy to use on clothing, backpacks, strollers, bags, beds and nearby surfaces.' },
  { id: 'equipment', title: 'No additional equipment required', description: 'Unlike coils or nets, the patch does not require fuel, installation or extra accessories.' },
  { id: 'outdoors', title: 'Practical for outdoor life', description: 'The PDF explicitly positions the patches for camping, hiking, school, play, seaside activities, outdoor work, riverside activities and evening gatherings.' },
  { id: 'family', title: 'Family-oriented design', description: 'The deck repeatedly frames the product around family protection.' },
  { id: 'value', title: 'Cost-conscious everyday format', description: 'Designed as a practical, cost-conscious option for everyday mosquito protection.' },
] as const

export const mosquitoDirections = [
  { number: '01', title: 'PEEL OFF ONE PATCH', description: 'Remove the patch from the packaging.' },
  { number: '02', title: 'STICK ONTO CLOTHING OR A NEARBY OBJECT', description: 'Apply to clothing or nearby objects such as strollers, bags, beds or tables.' },
  { number: '03', title: 'DO NOT APPLY DIRECTLY TO SKIN', description: 'Place on fabric or surfaces near the protected area.' },
] as const

export const mosquitoMechanism = [
  'The patch format is designed to release its repellent aroma gradually while worn on clothing or positioned on a nearby object.',
  'This allows the user to carry the protection with them without needing direct skin application.',
] as const

export const mosquitoComparison = [
  { spray: 'Frequent reapplication', patch: 'Up to 24-hour protection' },
  { spray: 'Strong chemical smell', patch: 'Gentle plant-based aroma' },
  { spray: 'Can touch skin directly', patch: 'Worn on clothing' },
  { spray: 'Messy application', patch: 'Peel, stick, protect' },
] as const

export const mosquitoTraditionalMethods = [
  { title: 'Sprays', points: ['Frequent reapplication'] },
  { title: 'Coils', points: ['Require continuous purchase of fuel'] },
  { title: 'Nets', points: ['Limit mobility during work'] },
  { title: 'Nature’s Nurture Patches', points: ['No additional fuel or accessories needed', 'Portable', 'Peel-and-stick application', 'Used on clothing or nearby objects'] },
] as const

export const mosquitoValue = {
  description: 'Designed as a practical, cost-conscious option for everyday mosquito protection.',
  points: ['Low cost per patch', 'No extra fuel/accessories', 'Bulk purchasing potential', 'Reduced need for repeated reapplication', 'Practical for community programmes', 'Positioned as a lower-cost alternative to some traditional repellent methods'],
} as const

export const mosquitoCommunity = {
  description: 'The supplied product material positions the patches as practical for settings where portability, ease of use and affordability matter.',
  contexts: ['Rural communities', 'Riverside environments', 'Wetland environments', 'Outdoor work', 'Family gatherings', 'Evening activities'],
} as const

export const mosquitoUsage = [
  'Peel patch from packaging.',
  'Apply to clothing or nearby objects.',
  'Do not apply directly to skin.',
  'Use on fabric or surfaces near the protected area.',
  'Follow packaging instructions.',
] as const

export const mosquitoPatchVariants = [
  {
    audience: 'Kids',
    slug: 'mosquito-repellent-patches-kids',
    name: 'Flies and Mosquito Patches — Kids',
    image: 'mosquito-repellent-patches-kids.png',
    hero: 'Portable mosquito protection for children during everyday outdoor activities.',
    supporting: 'A peel-and-stick format for everyday routines around flies and mosquitoes. Apply to clothing or nearby objects, with no direct skin application.',
    shortDescription: 'Portable mosquito protection for school, outdoor play and family travel.',
    overview: 'Nature’s Nurture Flies and Mosquito Patches for Kids are designed as an easy-to-use, portable mosquito-protection format for school, outdoor play, family outings and travel. The patch is applied to clothing or nearby objects rather than directly to skin.',
    benefits: ['application', 'clothing', 'portable', 'deet', 'lasting', 'family', 'equipment', 'outdoors', 'value'],
    useCases: [
      { title: 'Camping & Hiking', description: 'Positioned as practical outdoor protection for family adventures.', icon: 'tent' },
      { title: 'Beach & Water Activities', description: 'For outdoor/seaside settings.', icon: 'waves' },
      { title: 'School & Play', description: 'Particularly relevant to the Kids variant.', icon: 'school' },
      { title: 'Travel', description: 'Practical use on clothing, bags, backpacks and strollers.', icon: 'luggage' },
    ],
  },
  {
    audience: 'Adults',
    slug: 'mosquito-repellent-patches-adults',
    name: 'Flies and Mosquito Patches — Adults',
    image: 'mosquito-repellent-patches-adults.png',
    hero: 'Portable mosquito protection for travel, work, outdoor activities and everyday life.',
    supporting: 'A convenient patch format for outdoor routines around flies and mosquitoes, designed for use on clothing or nearby objects.',
    shortDescription: 'Portable mosquito protection for outdoor work, travel and active lifestyles.',
    overview: 'Nature’s Nurture Flies and Mosquito Patches for Adults provide a convenient, portable mosquito-protection format for work, travel, camping, hiking and outdoor activities. The patch is designed for use on clothing or nearby objects rather than directly on skin.',
    benefits: ['portable', 'application', 'clothing', 'equipment', 'lasting', 'outdoors', 'deet', 'family', 'value'],
    useCases: [
      { title: 'Camping & Hiking', icon: 'tent' },
      { title: 'Outdoor Work', icon: 'briefcase' },
      { title: 'Riverside Activities', icon: 'waves' },
      { title: 'Beach / Waterside Environments', icon: 'sun' },
      { title: 'Evening Outdoor Activities', icon: 'moon' },
      { title: 'Travel', icon: 'luggage' },
    ],
  },
] as const

export type MosquitoPatchVariant = typeof mosquitoPatchVariants[number]
