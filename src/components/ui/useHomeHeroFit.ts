import { useLayoutEffect } from 'react'

/** Only constrained phones split the category grid around a first-screen cue. */
export function useHomeHeroFit() {
  useLayoutEffect(() => {
    const hero = document.getElementById('home-heading')?.closest<HTMLElement>('.home-landing')
    const copy = hero?.querySelector<HTMLElement>('.hero-copy')
    const panel = hero?.querySelector<HTMLElement>('.hero-visual--home')
    const heading = panel?.querySelector<HTMLElement>('.home-category-heading')
    const grid = panel?.querySelector<HTMLElement>('.home-category-grid')
    const cue = hero?.querySelector<HTMLElement>('.hero-entry')
    if (!hero || !copy || !panel || !heading || !grid || !cue) return

    let frame = 0
    const number = (value: string) => Number.parseFloat(value) || 0
    const topWithinHero = (element: HTMLElement) => {
      let top = 0
      for (let node: HTMLElement | null = element; node && node !== hero; node = node.offsetParent as HTMLElement | null) top += node.offsetTop
      return top
    }
    const clear = () => {
      delete hero.dataset.homeOverflow
      grid.style.removeProperty('--home-cue-spacer-row')
      grid.style.removeProperty('--home-cue-spacer-height')
    }
    const measure = () => {
      if (window.innerWidth > 700) { clear(); return }
      const available = window.innerHeight - (document.querySelector<HTMLElement>('.site-header')?.offsetHeight || 0)
      const rowGap = number(getComputedStyle(grid).rowGap)
      const cards = Array.from(grid.children) as HTMLElement[]
      const rows = [0, 2, 4].map((i) => Math.max(cards[i]?.offsetHeight || 0, cards[i + 1]?.offsetHeight || 0))
      const gridTop = topWithinHero(grid)
      const panelStyle = getComputedStyle(panel)
      const cueBottom = number(getComputedStyle(cue.parentElement!).paddingBottom)
      const fullHeight = gridTop + rows.reduce((sum, row) => sum + row, 0) + rowGap * 2
        + number(panelStyle.paddingBottom) + number(panelStyle.borderBottomWidth) + cue.offsetHeight + cueBottom + 16
      if (fullHeight <= available + 1) { clear(); return }

      const cueTop = available - cueBottom - cue.offsetHeight
      let previewRows = 0
      let spacerTop = gridTop
      while (previewRows < 2 && spacerTop + rows[previewRows] <= cueTop - 12) {
        spacerTop += rows[previewRows] + rowGap
        previewRows += 1
      }
      // Auto-placed cards flow around this explicit, full-width grid row.
      const spacerHeight = Math.max(0, available - spacerTop - rowGap)
      const rowValue = String(previewRows + 1)
      const heightValue = `${spacerHeight.toFixed(2)}px`
      if (grid.style.getPropertyValue('--home-cue-spacer-row') !== rowValue) grid.style.setProperty('--home-cue-spacer-row', rowValue)
      if (grid.style.getPropertyValue('--home-cue-spacer-height') !== heightValue) grid.style.setProperty('--home-cue-spacer-height', heightValue)
      hero.dataset.homeOverflow = ''
    }
    const schedule = () => { window.cancelAnimationFrame(frame); frame = window.requestAnimationFrame(measure) }
    measure()
    const observer = new ResizeObserver(schedule)
    for (const element of [copy, heading, grid]) observer.observe(element)
    window.addEventListener('resize', schedule)
    window.visualViewport?.addEventListener('resize', schedule)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', schedule)
      window.visualViewport?.removeEventListener('resize', schedule)
      clear()
    }
  }, [])
}
