import { useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutPage } from './pages/About'
import { BrandDetailPage } from './pages/BrandDetail'
import { BrandsPage } from './pages/Brands'
import { ContactPage } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProductDetailPage } from './pages/ProductDetail'
import { ProductsPage } from './pages/Products'
import { RetailersPage } from './pages/Retailers'

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    resetScroll()
    const frame = window.requestAnimationFrame(resetScroll)
    const timeout = window.setTimeout(resetScroll, 50)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [location.pathname])

  return null
}

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={routerBase}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppShell><Home /></AppShell>} />
        <Route path="/products" element={<AppShell><ProductsPage /></AppShell>} />
        <Route path="/products/:slug" element={<AppShell><ProductDetailPage /></AppShell>} />
        <Route path="/brands" element={<AppShell><BrandsPage /></AppShell>} />
        <Route path="/brands/:slug" element={<AppShell><BrandDetailPage /></AppShell>} />
        <Route path="/about" element={<AppShell><AboutPage /></AppShell>} />
        <Route path="/retailers" element={<AppShell><RetailersPage /></AppShell>} />
        <Route path="/contact" element={<AppShell><ContactPage /></AppShell>} />
        <Route path="*" element={<AppShell><NotFound /></AppShell>} />
      </Routes>
    </BrowserRouter>
  )
}
