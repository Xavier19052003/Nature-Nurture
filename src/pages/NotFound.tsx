import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="page-shell page-shell--light">
      <section className="container section">
        <p className="eyebrow eyebrow--dark">404 / Page not found</p>
        <h1>That page has moved on.</h1>
        <Link className="inline-link inline-link--dark" to="/">Return home</Link>
      </section>
    </main>
  )
}
