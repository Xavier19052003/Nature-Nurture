// Client-supplied cereal brief. Values retain their stated serving basis.
// Do not add comparative claims or unresolved magnesium/molybdenum quantities.
export const cerealFlavours = [
  { name: 'Pineapple Paradise', slug: 'cereal-pineapple-paradise', image: 'pineapple-paradise.png', description: 'Tropical and refreshing taste.', accent: '#f7efce' },
  { name: 'Banana Bliss', slug: 'cereal-banana-bliss', image: 'banana-bliss.png', description: 'Creamy and comforting flavour.', accent: '#f7efd9' },
  { name: 'Strawberry Sunrise', slug: 'cereal-strawberry-sunrise', image: 'strawberry-sunrise.png', description: 'Sweet and vibrant flavour.', accent: '#f7e9e7' },
  { name: 'Chocolate Crave', slug: 'cereal-chocolate-crave', image: 'chocolate-crave.png', description: 'Rich, decadent chocolate flavour.', accent: '#eee5df' },
  { name: 'Custard Dream', slug: 'cereal-custard-dream', image: 'custard-dream.png', description: 'Creamy, comforting custard flavour.', accent: '#f5ebd4' },
] as const

export const cerealOverview = [
  { title: 'Quick & Easy', text: 'Ready in seconds and designed for busy lifestyles.' },
  { title: 'Nutrient-Rich', text: 'Packed with protein, fibre, vitamins and minerals.' },
  { title: 'Five Flavours', text: 'A varied flavour portfolio for different everyday preferences.' },
  { title: 'Versatile', text: 'Suitable for breakfast, meal replacement, snacks and recipe applications.' },
]
export const cerealBenefits = [
  { title: 'Quick & Easy', text: 'Designed for simple preparation and busy lifestyles.' },
  { title: 'Nutrient-Rich', text: 'Contains protein, fibre, vitamins and minerals.' },
  { title: 'Balanced Macronutrient Profile', text: 'The supplied material provides defined protein, carbohydrate and fat values per serving.' },
  { title: 'Whole-Grain Meal-Replacement Positioning', text: 'The range is described as an instant meal-replacement mix containing whole grains.' },
  { title: 'Protein & Fibre', text: 'Both are prominently positioned within the product’s nutritional profile.' },
  { title: 'Five-Flavour Range', text: 'Pineapple Paradise, Banana Bliss, Strawberry Sunrise, Chocolate Crave and Custard Dream.' },
  { title: 'Versatile Everyday Use', text: 'Suitable for breakfast, meal replacement, snacks and recipe applications.' },
  { title: 'Convenient Preparation', text: 'The supplied product material supports preparation with milk, water, or both.' },
]
export const cerealNutrition = [
  { title: 'Energy', serving: '794 kJ', hundred: '1,587 kJ' },
  { title: 'Protein', serving: '9.5 g', hundred: '19 g', nrv: '18%' },
  { title: 'Carbohydrates', serving: '27.7 g', hundred: '55.5 g', nrv: '11%' },
  { title: 'Total Fat', serving: '1.95 g', hundred: '3.9 g' },
  { title: 'Omega-3', serving: '95.9 mg', hundred: '191.8 mg', nrv: '2%' },
] as const
export const cerealVitamins = [
  { title: 'Vitamin A', value: '270 µg', nrv: '30%' },
  { title: 'Vitamin B12', value: '2.4 µg', nrv: '100%' },
  { title: 'Vitamin C', value: '90 mg', nrv: '100%' },
  { title: 'Calcium', value: '76.5 mg', nrv: '6%' },
]
export const cerealProtein = [
  { title: 'Sustained Energy', text: 'Packed with protein and fibre for sustained energy.' },
  { title: 'Muscle Growth', text: 'The supplied material associates protein with muscle growth and repair.' },
  { title: 'Aids Digestion', text: 'The supplied material associates fibre with digestion and satiety.' },
]
export const cerealUses = [
  { title: 'Breakfast Delight', text: 'A quick and easy way to start the day.' },
  { title: 'Meal Replacement', text: 'A convenient alternative for busy schedules.' },
  { title: 'Snack Option', text: 'Suitable for use as an anytime snack.' },
  { title: 'Recipe Application', text: 'Can be added to smoothies, yoghurt or baked goods.' },
]
export const cerealLifestyle = [
  { title: 'Busy Mornings', text: 'Quick and easy meal.' },
  { title: 'Post-Workout', text: 'A convenient snack option.' },
  { title: 'Anytime', text: 'Flexible meal-replacement positioning.' },
]
export const cerealImportant = [
  'Five flavours are currently represented in the supplied product material.',
  'Preparation guidance should follow the current product packaging.',
  'Nutritional values shown are based on the supplied product information.',
  'Final pack specifications and certification details should be checked against current approved packaging and documentation.',
]
