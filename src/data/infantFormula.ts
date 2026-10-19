// Client-supplied formula brief. Verify nutrition against current production panels before launch.
// Do not infer stage applicability, preparation ratios or approvals from packaging artwork.
export const formulaStages = [
  { number: '1', age: '0–6 Months', title: 'Infant Starter Formula', positioning: 'Gentle nutrition for life’s first moments.', image: 'stage-1.png', alt: 'Nature’s Nurture Stage 1 Infant Starter Formula', copy: 'Stage 1 is the Nature’s Nurture Infant Starter Formula for babies aged 0–6 months. The supplied product material positions the formula around balanced nutrition, gentle digestion, essential nutrients and support for early growth and development.' },
  { number: '2', age: '6–12 Months', title: 'Follow-On Formula', image: 'stage-2.png', alt: 'Nature’s Nurture Stage 2 Follow-On Formula', copy: 'Stage 2 is the Nature’s Nurture Follow-On Formula for babies aged 6–12 months. The supplied material positions it around continued nourishment as babies grow, with protein, essential fatty acids, vitamins and minerals forming part of the nutritional profile.' },
] as const

export const stageOnePositioning = [
  { title: 'High Energy Support', text: 'Supports active infants growth phases.' },
  { title: 'Nutrient Dense Formula', text: 'Designed for optimal nourishment.' },
  { title: 'Growth Focused Nutrition', text: 'Supports developmental milestones.' },
  { title: 'Trusted Daily Feeding', text: 'Suitable for everyday nutritional support.' },
]

export const formulaNutrition = [
  [{ title: 'Energy', value: '88', unit: 'kcal / 100 ml' }, { title: 'Protein', value: '1.6', unit: 'g / 100 ml' }, { title: 'Minerals · Sodium', value: '42', unit: 'mg / 100 ml' }],
  [{ title: 'Energy', value: '73.6', unit: 'kcal / 100 ml prepared formula' }, { title: 'Protein', value: '2.1', unit: 'g / 100 ml' }],
] as const

export const formulaBenefits = [
  { title: 'Balanced Nutritional Profile', text: 'The supplied formula information includes proteins, essential fatty acids, vitamins and minerals for age-specific infant nutrition.' },
  { title: 'Protein Blend', text: 'The source identifies whey, casein and soy protein isolate within the formula’s protein composition.' },
  { title: 'Omega-3 & Omega-6 Fatty Acids', text: 'The material specifically identifies alpha-linolenic acid and linoleic acid.' },
  { title: 'Complete Vitamin Support', text: 'The supplied profile includes Vitamins A, C, D3, E, K and B-complex vitamins.' },
  { title: 'Essential Mineral Support', text: 'The material identifies calcium, phosphorus, iron, zinc, magnesium, potassium and iodine.' },
  { title: 'Gentle Formula', text: 'Positioned as carefully designed around infant nutritional needs and easy digestion.' },
  { title: 'Stage-Specific Nutrition', text: 'Stage 1 is intended for 0–6 months and Stage 2 for 6–12 months.' },
  { title: 'Quality-Controlled Manufacturing', text: 'The supplied process includes raw-material inspection, batch testing, supplier verification, bacterial-safety testing and production monitoring.' },
]

export const balancedNutrition = [
  { title: 'Protein Blend', text: 'Optimal balance of whey and casein proteins for gentle digestion and sustained nourishment.' },
  { title: 'Omega Fatty Acids', text: 'Essential fats supporting brain and nervous system development.' },
  { title: 'Complete Profile', text: 'Every essential vitamin and mineral babies need for healthy development.' },
  { title: 'Gentle Formula', text: 'Carefully designed for infant nutritional needs with easy digestion.' },
]

export const formulaProteins = [
  { value: '40%', title: 'Whey Protein', text: 'Rapid absorption for immediate nourishment.' },
  { value: '44%', title: 'Casein Protein', text: 'Sustained release for lasting energy.' },
  { value: '16%', title: 'Soy Protein Isolate', text: 'Complete amino acid profile.' },
]

export const formulaVitamins = [
  { title: 'Vitamin A', text: 'Associated in the supplied material with vision development and immune-system health.' },
  { title: 'Vitamin C', text: 'Associated with antioxidant activity and immune-support positioning.' },
  { title: 'Vitamin D3', text: 'Associated with calcium absorption and bone development.' },
  { title: 'Vitamin E', text: 'Associated with antioxidant action.' },
  { title: 'Vitamin K', text: 'Associated with normal blood-clotting and circulatory-system positioning in the supplied material.' },
  { title: 'B-Complex Vitamins', text: 'Associated with energy metabolism and brain-development positioning.' },
]

export const nurtureNutrients = [
  { title: 'Brain & Nerve Development', points: ['DHA', 'Vitamin B12', 'Iron'] },
  { title: 'Strong Bones & Teeth', points: ['Vitamin D3', 'Calcium', 'Phosphorus'] },
  { title: 'Immunity', points: ['Vitamin C', 'Zinc', 'Vitamin A'] },
  { title: 'Energy & Growth', points: ['Protein', 'B Vitamins'] },
]

export const formulaMinerals = [
  { title: 'Calcium & Phosphorus', text: 'The source associates these with bones and teeth. The supplied material mentions a 1.2 ratio for absorption.' },
  { title: 'Iron', text: 'The supplied material associates iron with blood development and oxygen transport.' },
  { title: 'Zinc', text: 'Associated in the supplied source with immune support and wound healing.' },
  { title: 'Magnesium & Potassium', text: 'Associated with metabolic balance and nerve-function regulation.' },
  { title: 'Iodine', text: 'Associated with brain development and thyroid function.' },
]

export const formulaIngredients = [
  { title: 'Lactose & Milk Components', points: ['Lactose is identified as the primary carbohydrate', 'Whey powder from cow’s milk', 'Skimmed milk powder'] },
  { title: 'Vegetable Oils', points: ['Palm oil', 'Sunflower-seed oil', 'Flaxseed oil'] },
  { title: 'Soy Protein Isolate', points: ['Identified as a protein source in the supplied formula material.'] },
  { title: 'Vitamins & Minerals', points: ['Essential micronutrients are included in the supplied formulation material.'] },
]

export const parentPriorities = [
  { title: 'Nutrition', question: 'Will my baby get all the essential nutrients needed for healthy development?', text: 'Nature’s Nurture provides complete & balanced nutrition for growing infants.' },
  { title: 'Digestion', question: 'How will my baby’s sensitive tummy handle the formula?', text: 'Gentle, easy-to-digest formula designed to support delicate tummies.' },
  { title: 'Safety', question: 'Can I trust the ingredients and manufacturing process?', text: 'Made with carefully selected ingredients and manufactured to the highest safety standards.' },
  { title: 'Affordability', question: 'Must I choose between quality and budget constraints?', text: 'Premium nutrition at a price that makes quality care affordable.' },
]

export const formulaSafety = [
  { title: 'Raw Material Inspection', text: 'Every ingredient is tested before production begins.' },
  { title: 'Batch Testing', text: 'Key nutrients verified in every production batch.' },
  { title: 'Supplier Verification', text: 'Trusted partners meeting strict quality standards.' },
  { title: 'Bacterial Safety Testing', text: 'Comprehensive pathogen screening procedures.' },
  { title: 'Production Monitoring', text: 'Continuous oversight throughout manufacturing.' },
]

export const formulaImportant = [
  'Stage 1 is intended for 0–6 months.',
  'Stage 2 is intended for 6–12 months.',
  'Contains Cow’s Milk and Soy.',
  'Always follow preparation guidelines on packaging.',
  'Final packaging specifications and nutritional information should be checked against the current product label.',
]
