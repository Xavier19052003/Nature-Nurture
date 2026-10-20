import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

export const AUTOPLAY_INTERVAL_MS = 3000

/** One lifecycle-owned timer. Manual input resets its full three-second interval. */
export function useAutoplay(onAdvance: () => void, enabled = true, root?: RefObject<HTMLElement>, mediaQuery?: string) {
  const advance = useRef(onAdvance)
  const [version, setVersion] = useState(0)
  const [available, setAvailable] = useState(false)
  const [visible, setVisible] = useState(!root)
  const reset = useCallback(() => setVersion((value) => value + 1), [])

  useEffect(() => { advance.current = onAdvance }, [onAdvance])
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const viewport = mediaQuery ? window.matchMedia(mediaQuery) : null
    const update = () => setAvailable(!document.hidden && !motion.matches && (!viewport || viewport.matches))
    update()
    motion.addEventListener('change', update)
    viewport?.addEventListener('change', update)
    document.addEventListener('visibilitychange', update)
    return () => {
      motion.removeEventListener('change', update)
      viewport?.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', update)
    }
  }, [mediaQuery])
  useEffect(() => {
    const element = root?.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [root])
  const playing = enabled && available && visible
  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => advance.current(), AUTOPLAY_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [playing, version])
  return { reset, playing }
}
