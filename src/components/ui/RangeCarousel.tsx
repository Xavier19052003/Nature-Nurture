import { OptimizedImage } from './OptimizedImage'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { ProductImagePlaceholder } from './ProductImagePlaceholder'
import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAutoplay } from './useAutoplay'

type RangeSlide = {
  id: string
  title: string
  category: string
  image: string
  imageAlt: string
  placeholder?: boolean
  accent?: string
  highlights?: string[]
  description: string
  detail?: string
  href: string
  action: string
  actionLabel: string
}

type RangeCarouselProps = {
  label: string
  slides: RangeSlide[]
  initialSlideId?: string
  autoplay?: boolean
  variant?: 'feature' | 'range' | 'single'
}

export function RangeCarousel({ label, slides, initialSlideId, autoplay = true, variant = 'range' }: RangeCarouselProps) {
  const id = useId()
  const root = useRef<HTMLElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const [{ active, previous, direction, visited }, setSlide] = useState(() => {
    const initial = Math.max(0, slides.findIndex((slide) => slide.id === initialSlideId))
    return { active: initial, previous: -1, direction: 1, visited: [initial] }
  })
  const multiple = slides.length > 1
  const { reset, playing: rotating } = useAutoplay(() => setSlide((current) => {
    const next = (current.active + 1) % slides.length
    return { active: next, previous: current.active, direction: 1, visited: current.visited.includes(next) ? current.visited : [...current.visited, next] }
  }), multiple && autoplay, root)

  const selectSlide = (index: number, movement = index < active ? -1 : 1) => {
    const next = (index + slides.length) % slides.length
    setSlide((current) => next === current.active ? current : ({ active: next, previous: current.active, direction: movement, visited: current.visited.includes(next) ? current.visited : [...current.visited, next] }))
    reset()
  }

  const ProductHeading = variant === 'single' ? 'h3' : 'h4'

  return (
    <section ref={root} className={`range-carousel range-carousel--${variant}`} aria-label={label}
      aria-roledescription={multiple ? 'carousel' : undefined} data-rotating={rotating} data-direction={direction < 0 ? 'previous' : 'next'}
      tabIndex={multiple ? 0 : undefined}
      onKeyDown={(event) => {
        if (!multiple || event.ctrlKey || event.metaKey || event.altKey || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
        event.preventDefault()
        selectSlide(event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : active + (event.key === 'ArrowRight' ? 1 : -1), event.key === 'ArrowLeft' || event.key === 'Home' ? -1 : 1)
      }}
      onTouchStart={(event) => {
        const touch = event.changedTouches[0]
        touchStart.current = { x: touch.clientX, y: touch.clientY }
      }} onTouchEnd={(event) => {
        const start = touchStart.current
        touchStart.current = null
        if (!start || !multiple) return
        const touch = event.changedTouches[0]
        const dx = touch.clientX - start.x
        const dy = touch.clientY - start.y
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) selectSlide(active + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1)
      }}>
      {variant !== 'single' && <header className="range-carousel__header">
        <p className="range-carousel__eyebrow">Our range · Featured</p>
        <h3>{label}</h3>
      </header>}
      <div className="range-carousel__slides" id={`${id}-slides`} aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`range-carousel__slide${active === index ? ' is-active' : previous === index ? ' is-leaving' : ''}`}
            role={multiple ? 'group' : undefined} aria-roledescription={multiple ? 'slide' : undefined}
            aria-label={multiple ? `${index + 1} of ${slides.length}: ${slide.title}` : undefined} aria-hidden={active !== index}>
            <div className="range-carousel__image">
              {(visited.includes(index) || index === (active + 1) % slides.length) && (slide.highlights ? <Link to={slide.href} className="range-carousel__image-link" tabIndex={active === index ? 0 : -1} aria-label={slide.actionLabel}>{slide.placeholder ? <ProductImagePlaceholder name={slide.title} accent={slide.accent} compact /> : <OptimizedImage src={slide.image} alt={slide.imageAlt} loading={rotating && (index === active || index === (active + 1) % slides.length) ? 'eager' : 'lazy'} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 400px" width={640} height={480} />}</Link> : <OptimizedImage src={slide.image} alt={slide.imageAlt} loading={rotating && (index === active || index === (active + 1) % slides.length) ? 'eager' : 'lazy'} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 400px" width={640} height={480} />)}
            </div>
            <div className="range-carousel__copy">
              <p className="range-carousel__category">{slide.category}</p>
              <ProductHeading>{slide.highlights ? <Link to={slide.href} tabIndex={active === index ? 0 : -1}>{slide.title}</Link> : slide.title}</ProductHeading>
              {slide.detail && <p className="range-carousel__detail">{slide.detail}</p>}
              <p className="range-carousel__description">{slide.description}</p>
              {slide.highlights && <ul className="range-carousel__highlights" aria-label={`${slide.title} highlights`}>{slide.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
              <Link className="button button--primary" to={slide.href} tabIndex={active === index ? 0 : -1} aria-label={slide.actionLabel}>
                {slide.action} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {multiple && <div className="range-carousel__controls" role="group" aria-label={`${label} controls`}>
        <span className="range-carousel__count" aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
        <button type="button" aria-label={`Previous ${label} slide`} aria-controls={`${id}-slides`} onClick={() => selectSlide(active - 1, -1)}><ArrowLeft size={18} aria-hidden="true" /></button>
        <button type="button" aria-label={`Next ${label} slide`} aria-controls={`${id}-slides`} onClick={() => selectSlide(active + 1, 1)}><ArrowRight size={18} aria-hidden="true" /></button>
        <div className="range-carousel__dots">
          {slides.map((slide, index) => <button type="button" key={slide.id} aria-label={`Show ${slide.title}`} aria-current={active === index ? 'true' : undefined}
            aria-controls={`${id}-slides`} onClick={() => selectSlide(index)}><span /></button>)}
        </div>
      </div>}
    </section>
  )
}
