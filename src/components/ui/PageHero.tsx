import { ArrowDown } from 'lucide-react'
import { createContext, useContext, type CSSProperties, type ReactNode } from 'react'
import { SectionLink } from './SectionLink'

type Entry = { scrollLabel: string; scrollTarget: string; scrollAriaLabel?: string }
const EntryContext = createContext<Entry | null>(null)

export function HeroEntry({ bottom = false }: { bottom?: boolean }) {
  const entry = useContext(EntryContext)
  if (!entry) throw new Error('HeroEntry must be rendered inside PageHero')
  return <div className={`page-hero__entry${bottom ? '' : ' page-hero__entry--inline'}`}>
    <SectionLink targetId={entry.scrollTarget} className="hero-entry" ariaLabel={entry.scrollAriaLabel}>
      <span className="hero-entry__icon"><ArrowDown size={24} aria-hidden="true" /></span>
      <span>{entry.scrollLabel}</span>
    </SectionLink>
  </div>
}

/** Shared opening behaviour; page-specific copy, imagery and actions stay in slots. */
export function PageHero({ children, className, labelledBy, style, scrollLabel, scrollTarget, scrollAriaLabel, entryPlacement = 'bottom', backgroundImage }: Entry & {
  children: ReactNode
  className: string
  labelledBy?: string
  style?: CSSProperties
  entryPlacement?: 'inline' | 'bottom'
  backgroundImage?: string
}) {
  return <EntryContext.Provider value={{ scrollLabel, scrollTarget, scrollAriaLabel }}><section className={`page-hero ${className}${backgroundImage ? ' page-hero--background' : ''}`} aria-labelledby={labelledBy} style={style}>
    {backgroundImage && <div className="page-hero__background" aria-hidden="true"><img src={backgroundImage} alt="" width={1672} height={941} fetchPriority="high" /></div>}
    {children}
    {entryPlacement === 'bottom' && <HeroEntry bottom />}
  </section></EntryContext.Provider>
}
