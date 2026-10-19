let cancelCurrent: (() => void) | undefined

export function cancelSectionScroll() { cancelCurrent?.() }

/** One user-triggered scroll, with no React updates or per-frame measurements. */
export function scrollToSection(target: HTMLElement) {
  cancelSectionScroll()
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  document.documentElement.dataset.sectionScrolling = ''
  const start = window.scrollY
  const offset = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || document.querySelector('.site-header')?.getBoundingClientRect().height || 0
  const end = Math.max(0, Math.min(start + target.getBoundingClientRect().top - offset, document.documentElement.scrollHeight - window.innerHeight))
  const distance = end - start

  if (!target.hasAttribute('tabindex') && target.tabIndex < 0) {
    target.setAttribute('tabindex', '-1')
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true })
  }
  target.focus({ preventScroll: true })
  if (media.matches || Math.abs(distance) < 1) {
    window.scrollTo({ top: end, behavior: 'instant' })
    delete document.documentElement.dataset.sectionScrolling
    return
  }

  const timing = getComputedStyle(document.documentElement).getPropertyValue('--motion-section-scroll').trim()
  const timingValue = Number.parseFloat(timing)
  const base = timingValue > 0 ? timingValue * (timing.endsWith('ms') ? 1 : 1000) : 900
  const duration = base * Math.min(1, Math.max(0.6, Math.abs(distance) / window.innerHeight))
  const started = performance.now()
  let frame = 0
  const stop = () => {
    window.cancelAnimationFrame(frame)
    delete document.documentElement.dataset.sectionScrolling
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
    window.removeEventListener('pointerdown', stop)
    window.removeEventListener('resize', stop)
    window.removeEventListener('keydown', keydown)
    media.removeEventListener('change', motionChanged)
    cancelCurrent = undefined
  }
  const keydown = (event: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Escape'].includes(event.key)) stop()
  }
  const motionChanged = () => {
    if (media.matches) { stop(); window.scrollTo({ top: end, behavior: 'instant' }) }
  }
  const tick = (now: number) => {
    const t = Math.min(1, (now - started) / duration)
    // Smootherstep starts and finishes with zero velocity and acceleration.
    const eased = t * t * t * (t * (t * 6 - 15) + 10)
    window.scrollTo({ top: start + distance * eased, behavior: 'instant' })
    if (t < 1) frame = window.requestAnimationFrame(tick)
    else stop()
  }
  cancelCurrent = stop
  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })
  window.addEventListener('pointerdown', stop, { passive: true })
  window.addEventListener('resize', stop)
  window.addEventListener('keydown', keydown)
  media.addEventListener('change', motionChanged)
  frame = window.requestAnimationFrame(tick)
}
