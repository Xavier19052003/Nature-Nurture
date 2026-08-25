import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

export function NotFound() {
  return (
    <>
      <Navbar />
      <main className="placeholder-page">
        <Container>
          <p className="eyebrow">404 / Page not found</p>
          <h1>That page has moved on.</h1>
          <Link className="text-link" to="/">Return home</Link>
        </Container>
      </main>
      <Footer />
    </>
  )
}
