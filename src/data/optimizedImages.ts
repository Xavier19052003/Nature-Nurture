import inventory from './imageAssets.json'

type ImageAsset = { width: number; height: number; variants: { width: number; src: string }[] }
const assets: Record<string, ImageAsset> = Object.fromEntries(Object.entries(inventory).flatMap(([src, asset]) => [
  [src, asset],
  [asset.variants[asset.variants.length - 1].src, asset],
]))
const base = import.meta.env.BASE_URL
export const lookupImage = (src: string) => assets[src.startsWith(base) ? src.slice(base.length) : src]

/** Static local assets only; no image processing or remote service runs in the client. */
export function optimizedImageUrl(src: string) {
  const asset = lookupImage(src)
  return asset ? `${base}${asset.variants[asset.variants.length - 1].src}` : src
}
