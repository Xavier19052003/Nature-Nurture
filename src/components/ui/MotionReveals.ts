import { useLayoutEffect, type RefObject } from 'react'

const chapters = '.home-platform, .home-presence, .home-commitment, .home-retail, .about-design-story, .about-design-mission, .quality-co-manufacturing, .about-design-accessibility, .retailers-focus, .quality-process'
const safety = '.stevia-information, .cereal-information, .formula-safety, .formula-information, [aria-labelledby="patch-usage-heading"]'
const cards = 'article, .home-info-card, .home-presence__indicator, .quality-logo-tile, .quality-framework-grid > li, .about-design-purpose dl > div, .formula-summary > div, .formula-nutrition > div, .cereal-nutrition > div, .patch-directions > li, .zing-preparation > li'
type Reveal = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in' | 'image' | 'map' | 'benefit'

/** One progressively enhanced, route-scoped reveal system. Finished heroes are excluded. */
export function useMotionReveals(scope: RefObject<HTMLDivElement>, route: string) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root || !('IntersectionObserver' in window)) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 1024px)')
    const targets = new Set<HTMLElement>()
    const sections = Array.from(root.querySelectorAll<HTMLElement>('main > section:not(.page-hero)'))
    const chapterSections = sections.filter((section) => section.matches(chapters))
    const groups = new Map<Element, number>()
    const reveal = (element: HTMLElement) => {
      element.dataset.revealState = 'revealed'
      observer.unobserve(element)
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        // A tall comparison/form block must not require an impossible visible ratio.
        const threshold = Math.min(0.18, (entry.rootBounds?.height || window.innerHeight) * 0.18 / Math.max(1, entry.boundingClientRect.height))
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) reveal(entry.target as HTMLElement)
      }
    }, { rootMargin: '64px 0px 48px 0px', threshold: [0, 0.05, 0.1, 0.18, 0.25] })
    const register = (element: HTMLElement, variant: Reveal = 'fade-up', phase = 0, stagger = false) => {
      if (targets.has(element) || element.closest('.page-hero, [aria-hidden="true"]')) return
      if (element.parentElement?.closest('[data-motion-reveal]') || element.querySelector('[data-motion-reveal]')) return
      const parent = element.parentElement || root
      const order = stagger ? groups.get(parent) || 0 : 0
      if (stagger) groups.set(parent, order + 1)
      targets.add(element)
      element.dataset.motionReveal = variant
      element.style.setProperty('--reveal-order', String(Math.min(order, 3)))
      element.style.setProperty('--reveal-phase', `${phase}ms`)
      element.dataset.revealState = reduced.matches ? 'revealed' : 'pending'
      if (!reduced.matches) observer.observe(element)
    }
    for (const section of sections) {
      section.dataset.immersiveSection = section.querySelector('form, table, .formula-nutrition, .cereal-nutrition') ? 'dense' : 'story'
      if (section.matches(safety)) continue
      if (section.id === 'catalogue') {
        section.querySelectorAll<HTMLElement>('.catalogue-browser__heading, .product-filters, .mobile-category-picker').forEach((element) => register(element, 'fade-in'))
        section.querySelectorAll<HTMLElement>('.catalogue-ranges > *').forEach((element) => register(element))
        continue
      }
      const benefits = /benefits/.test(section.getAttribute('aria-labelledby') || '')
      section.querySelectorAll<HTMLElement>('form, .sublingual-table, .patch-comparison').forEach((element) => register(element, 'fade-in', 100))
      section.querySelectorAll<HTMLElement>(cards).forEach((element) => register(element, benefits ? 'benefit' : 'fade-up', 80, true))
      section.querySelectorAll<HTMLElement>('figure, .home-manufacturing__visual, .quality-process__image, .quality-co-manufacturing__image').forEach((element) => register(element, element.matches('.about-design-map, .retailers-reach__map') ? 'map' : 'image', 100))
      section.querySelectorAll<HTMLElement>('h1, h2, h3, p, .cta-row, .inline-link, .stevia-text-link, .button, .cereal-tabs, .zing-collection-tabs, ul.stevia-checklist, .sublingual-use-panel, .formula-snapshot').forEach((element) => {
        const phase = element.matches('.eyebrow') ? 0 : element.matches('.cta-row, a, button') ? 200 : element.matches('h1, h2, h3') ? 80 : 140
        const variant: Reveal = element.matches('.zing-litre-display') ? 'scale-in' : element.matches('.stevia-text-link, .inline-link') ? 'fade-in' : element.matches('.quality-process__copy > p, .quality-co-manufacturing__copy > p') ? 'fade-right' : element.matches('.retailers-focus__copy > p') ? 'fade-left' : 'fade-up'
        register(element, variant, phase)
      })
    }
    const footer = document.querySelector<HTMLElement>('.site-footer')
    if (footer) register(footer, 'fade-in')
    // Only catalogue block mounts are observed; carousel slide changes are ignored.
    const catalogue = root.querySelector('.catalogue-ranges')
    const mutations = catalogue ? new MutationObserver((records) => {
      for (const record of records) for (const node of record.addedNodes) {
        if (node instanceof HTMLElement) register(node)
      }
    }) : null
    if (catalogue) mutations?.observe(catalogue, { childList: true })
    const chapterObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) (entry.target as HTMLElement).dataset.chapterState = entry.boundingClientRect.top < 0 && entry.intersectionRatio < 0.15 ? 'passed' : 'active'
    }, { rootMargin: '-64px 0px -8% 0px', threshold: [0, 0.15, 0.4, 0.75] })
    const refreshChapters = () => {
      chapterObserver.disconnect()
      let snapping = false
      const available = window.innerHeight - (document.querySelector<HTMLElement>('.site-header')?.offsetHeight || 0)
      for (const section of chapterSections) {
        section.dataset.chapterState = 'active'
        // Explicit deep links take precedence over optional chapter snapping.
        const enabled = desktop.matches && !reduced.matches && !window.location.hash
        const fits = section.offsetHeight >= 320 && section.offsetHeight <= available * 1.15
        section.dataset.chapterSnap = String(enabled && fits)
        if (enabled) chapterObserver.observe(section)
        if (enabled && fits) snapping = true
      }
      if (snapping) document.documentElement.dataset.immersiveSnap = ''
      else delete document.documentElement.dataset.immersiveSnap
    }
    const releaseAll = () => {
      if (reduced.matches) targets.forEach(reveal)
      refreshChapters()
    }
    const focused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const parent = event.target.closest<HTMLElement>('[data-motion-reveal]')
      if (parent) reveal(parent)
      const section = event.target.closest<HTMLElement>('[data-immersive-section]')
      section?.querySelectorAll<HTMLElement>('[data-motion-reveal]').forEach(reveal)
      if (section) section.dataset.chapterState = 'active'
    }
    refreshChapters()
    reduced.addEventListener('change', releaseAll)
    desktop.addEventListener('change', refreshChapters)
    window.addEventListener('resize', refreshChapters)
    window.addEventListener('hashchange', refreshChapters)
    root.addEventListener('load', refreshChapters, true)
    document.addEventListener('focusin', focused)
    return () => {
      observer.disconnect()
      chapterObserver.disconnect()
      mutations?.disconnect()
      reduced.removeEventListener('change', releaseAll)
      desktop.removeEventListener('change', refreshChapters)
      window.removeEventListener('resize', refreshChapters)
      window.removeEventListener('hashchange', refreshChapters)
      root.removeEventListener('load', refreshChapters, true)
      document.removeEventListener('focusin', focused)
      delete document.documentElement.dataset.immersiveSnap
      for (const target of targets) {
        delete target.dataset.motionReveal
        delete target.dataset.revealState
        target.style.removeProperty('--reveal-order')
        target.style.removeProperty('--reveal-phase')
      }
      for (const section of sections) {
        delete section.dataset.immersiveSection
        delete section.dataset.chapterState
        delete section.dataset.chapterSnap
      }
    }
  }, [scope, route])
}
