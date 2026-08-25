import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

const routerBase = import.meta.env.PROD ? '/Nature-Nurture' : '/'

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
