import type { ReactNode } from 'react'
import { scrollToSection } from './sectionScroll'

/** Keep same-page scrolling separate from route-change scroll restoration. */
export function SectionLink({ targetId, children, className, ariaLabel }: { targetId: string; children: ReactNode; className?: string; ariaLabel?: string }) {
  return <a href={`#${targetId}`} className={className} aria-label={ariaLabel} onClick={(event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
    const target = document.getElementById(targetId)
    if (!target) return
    event.preventDefault()
    scrollToSection(target)
  }}>{children}</a>
}
