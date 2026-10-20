export type SublingualStoryImage = {
  file: string
  alt: string
  width: number
  height: number
}

type ProductStory = {
  hero?: SublingualStoryImage
  overview: SublingualStoryImage
  delivery?: SublingualStoryImage
  routine?: SublingualStoryImage
}

const image = (file: string, alt: string, width = 1122, height = 1402): SublingualStoryImage => ({ file, alt, width, height })
const b12Alt = 'Nature’s Nurture Vitamin B12 + Folate oral spray and packaging'
const ironAlt = 'Nature’s Nurture Iron sublingual oral spray and packaging'
const d3Alt = 'Nature’s Nurture Vitamin D3 + K2 oral spray and packaging'
const lifestyleAlt = 'Nature’s Nurture oral spray shown in everyday use'

// Detail-page photography only. Catalogue and related-product assets stay in sublingual.ts.
export const sublingualStoryImages: Record<string, ProductStory | undefined> = {
  'vitamin-b12-folate': {
    hero: image('b12-folate/b12-folate-product-01', b12Alt),
    overview: image('b12-folate/b12-folate-product-02', b12Alt),
  },
  iron: {
    hero: image('iron/iron-sublingual-botanical', ironAlt),
    overview: image('iron/iron-sublingual-science', ironAlt, 1149, 1369),
    routine: image('iron/iron-sublingual-lifestyle', lifestyleAlt),
  },
  'vitamin-d3-k2': {
    overview: image('d3-k2/d3-k2-botanical', d3Alt),
    delivery: image('d3-k2/d3-k2-product-display', d3Alt),
    routine: image('d3-k2/d3-k2-lifestyle', lifestyleAlt),
  },
  'vitamin-b-complex': {
    overview: image('vitamin-b-complex/vitamin-b-complex-product-display', 'Nature’s Nurture Vitamin B Complex spray displayed with botanical styling'),
    delivery: image('vitamin-b-complex/vitamin-b-complex-botanical', 'Nature’s Nurture Vitamin B Complex oral spray and packaging in botanical setting'),
    routine: image('vitamin-b-complex/vitamin-b-complex-premium', 'Nature’s Nurture Vitamin B Complex oral spray and packaging'),
  },
}
