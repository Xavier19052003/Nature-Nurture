import type { ImgHTMLAttributes } from 'react'
import { lookupImage, optimizedImageUrl } from '../../data/optimizedImages'
const base = import.meta.env.BASE_URL

export function OptimizedImage({ src = '', srcSet, sizes, loading, fetchPriority, decoding = 'async', width, height, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const asset = lookupImage(src)
  const responsive = asset && !srcSet
  return <img {...props} src={responsive ? optimizedImageUrl(src) : src}
    srcSet={srcSet ?? (asset ? asset.variants.map((item) => `${base}${item.src} ${item.width}w`).join(', ') : undefined)}
    sizes={sizes ?? (responsive ? '(max-width: 700px) 100vw, 50vw' : undefined)}
    width={width ?? asset?.width} height={height ?? asset?.height}
    loading={loading ?? (fetchPriority === 'high' ? 'eager' : 'lazy')} fetchPriority={fetchPriority} decoding={decoding} />
}
