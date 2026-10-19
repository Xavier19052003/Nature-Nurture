import { useLayoutEffect, useRef, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, type Location } from 'react-router-dom'
import { useMotionReveals } from './components/ui/MotionReveals'
import { SectionNavigation } from './components/ui/SectionNavigation'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutPage } from './pages/About'
import { BrandDetailPage } from './pages/BrandDetail'
import { CertificationsPage } from './pages/Brands'
import { ContactPage } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProductDetailPage } from './pages/ProductDetail'
import { ProductsPage } from './pages/Products'
import { RetailersPage } from './pages/Retailers'

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function ScrollToTop({ location }: { location: Location }) {
  const previousPath = useRef<string | null>(null)

  useLayoutEffect(() => {
    const routeChanged = previousPath.current !== location.pathname
    previousPath.current = location.pathname
    if (!routeChanged && !location.hash) return

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const resetScroll = () => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Layout effects run after the new route mounts but before it is painted.
    // A single instant reset avoids interrupting a subsequent user scroll.
    resetScroll()
  }, [location.pathname, location.hash])

  return null
}

function RouteContent() {
  const requested = useLocation()
  const [displayed, setDisplayed] = useState(requested)
  const scope = useRef<HTMLDivElement>(null)
  const exiting = requested.pathname !== displayed.pathname
  // Hashes and search filters stay immediate; only a pathname change fades out.
  const location = exiting ? displayed : requested
  useMotionReveals(scope, location.pathname)

  useLayoutEffect(() => {
    if (!exiting) {
      if (displayed !== requested) setDisplayed(requested)
      return
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    // Read the same CSS token used by the outgoing transition, once per route.
    const duration = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion-fast')) || 180
    const finish = () => setDisplayed(requested)
    if (media.matches) { finish(); return }
    const timer = window.setTimeout(finish, duration)
    const motionChanged = () => { if (media.matches) { window.clearTimeout(timer); finish() } }
    media.addEventListener('change', motionChanged)
    return () => { window.clearTimeout(timer); media.removeEventListener('change', motionChanged) }
  }, [requested, displayed, exiting])

  return (
    <div ref={scope} className="route-content" key={location.pathname} data-exiting={exiting}>
      <ScrollToTop location={location} />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/brands" element={<Navigate to="/certifications" replace />} />
        <Route path="/brands/:slug" element={<BrandDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/retailers" element={<RetailersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={routerBase}>
      <SectionNavigation />
      <Navbar />
      <RouteContent />
      <Footer />
    </BrowserRouter>
  )
}
