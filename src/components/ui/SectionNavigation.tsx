import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { cancelSectionScroll, scrollToSection } from './sectionScroll'

/** Give ordinary in-page anchors the same motion as shared SectionLinks. */
export function SectionNavigation() {
  const { pathname } = useLocation()
  useLayoutEffect(() => { cancelSectionScroll() }, [pathname])
  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return
      let id: string
      try { id = decodeURIComponent(link.getAttribute('href')!.slice(1)) } catch { return }
      const target = id ? document.getElementById(id) : null
      if (!target) return
      event.preventDefault()
      scrollToSection(target)
    }
    document.addEventListener('click', navigate)
    return () => { document.removeEventListener('click', navigate); cancelSectionScroll() }
  }, [])
  return null
}
