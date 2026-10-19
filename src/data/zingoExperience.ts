// Approved client copy. Keep flavour positioning separate from unverified nutrition claims.
export const zingoFlavours = [
  { id: 'berry', name: 'Berry Burst', description: 'A juicy blend of berry flavours delivering vibrant refreshment and irresistible taste.', accent: '#f7dfeb', alt: 'Zingo Berry flavoured powdered drink sachet with berries and a prepared drink' },
  { id: 'cola', name: 'Cola Classic', description: 'The familiar cola experience transformed into an affordable family refreshment.', accent: '#eee2d9', alt: 'Zingo Cola flavoured powdered drink sachet with ice and a prepared drink' },
  { id: 'guava', name: 'Guava Glow', description: 'Tropical sweetness and vibrant flavour inspired by one of Africa’s favourite fruits.', accent: '#f9e0e9', alt: 'Zingo Guava flavoured powdered drink sachet with guava fruit and a prepared drink' },
  { id: 'lemon', name: 'Lemon Zest', description: 'Bright citrus flavour delivering vibrant everyday refreshment.', accent: '#f6efbd', alt: 'Zingo Lemon flavoured powdered drink sachet with lemons and a prepared drink' },
  { id: 'orange', name: 'Orange Boost', description: 'Classic orange refreshment with bold citrus flavour.', accent: '#fae6d0', alt: 'Zingo Orange flavoured powdered drink sachet with orange fruit and a prepared drink' },
  { id: 'mango', name: 'Mango Magic', description: 'Sweet tropical mango flavour with a bright, refreshing finish.', accent: '#edf0c8', alt: 'Zingo Mango flavoured powdered drink sachet with mango fruit and a prepared drink' },
  { id: 'peach', name: 'Peach Delight', description: 'Juicy peach flavour offering a smooth and refreshing fruit drink.', accent: '#f9e1d7', alt: 'Zingo Peach flavoured powdered drink sachet with peaches and a prepared drink' },
  { id: 'pineapple', name: 'Pineapple Power', description: 'Tangy pineapple flavour with a bright tropical character.', accent: '#f7ecc9', alt: 'Zingo Pineapple flavoured powdered drink sachet with pineapple fruit and a prepared drink' },
] as const
export type ZingoFlavour = typeof zingoFlavours[number]
export const zingoCollections = [
  { id: 'core', title: 'Core Collection', flavours: ['berry', 'cola', 'guava'] },
  { id: 'citrus', title: 'Citrus Energy', flavours: ['lemon', 'orange', 'mango'] },
  { id: 'tropical', title: 'Tropical Refresh', flavours: ['peach', 'pineapple'] },
] as const
export const zingoGlance = [
  { title: '8 Flavours', text: 'Three flavour collections' },
  { title: '1 Sachet Makes 2 Litres', text: 'Big refreshment from a compact format' },
  { title: 'Easy to Prepare', text: 'Simply add water' },
  { title: 'Made for Sharing', text: 'Designed for everyday family and group occasions' },
]
export const zingoBenefits = [
  { title: 'Affordable Refreshment', text: 'One sachet makes 2 litres.' },
  { title: 'Eight Flavours', text: 'Three collections and eight distinctive tastes.' },
  { title: 'Super Convenient', text: 'Compact sachets are easy to carry, store and prepare.' },
  { title: 'Easy Preparation', text: 'Simply add water.' },
  { title: 'Made for Sharing', text: 'Suitable for families, gatherings and everyday occasions.' },
  { title: 'Still or Sparkling', text: 'The supplied preparation material allows for either still or sparkling water.' },
  { title: 'Customisable', text: 'Add ice or adjust flavour intensity to suit your preference.' },
  { title: 'Colourful Experience', text: 'Bold flavour identities and playful packaging bring energy to everyday refreshment.' },
]
export const zingoPreparation = [
  { title: 'Measure Your Powder', text: 'One scoop per glass for perfect flavour intensity.' },
  { title: 'Add Water', text: 'Still or sparkling — your choice for different experiences.' },
  { title: 'Mix & Watch', text: 'Stir gently and watch the magic happen as colours swirl.' },
  { title: 'Customise', text: 'Add ice, adjust sweetness, or mix flavours for unique creations.' },
]
export const zingoMoments = [
  { title: 'Lunchbox Hero', text: 'Perfect for school lunches.' },
  { title: 'Picnic Ready', text: 'Easy to pack and prepare.' },
  { title: 'Family & Community Gatherings', text: 'Designed for sharing and everyday occasions.' },
  { title: 'Party Favourite', text: 'Colourful fun for celebrations.' },
]
export const zingoCustomise = [
  { title: 'Still or Sparkling', text: 'Choose the water style you prefer.' },
  { title: 'Add Ice', text: 'Serve chilled for a refreshing experience.' },
  { title: 'Adjust the Flavour', text: 'Change intensity to your preference.' },
  { title: 'Mix Your Favourites', text: 'Combine flavours for something different.' },
]
export const zingoShelfPoints = ['Distinctive Flavour Colours', 'Recognisable Zingo Identity', 'Clear Flavour Differentiation', 'Compact Sachet Format', 'Eight-Flavour Range']
