import { ArrowRight, Mail, MapPin, MapPinned, Phone, Users2 } from 'lucide-react'
import { useState } from 'react'
import { contactDetails } from '../data/contact'

type FormState = {
  name: string
  email: string
  company: string
  phone: string
  message: string
  website: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  website: '',
}

function validateFieldValues(values: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    const nextForm = { ...form, [name]: value }
    setForm(nextForm)

    if (errors[name as keyof FormState]) {
      const nextErrors = { ...errors }
      delete nextErrors[name as keyof FormState]
      setErrors(nextErrors)
    }

    if (status !== 'idle') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateFieldValues(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please correct the highlighted fields and try again.')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: '',
        }),
      })

      const payload = await response.json().catch(() => ({ message: 'Unable to send your enquiry right now.' }))

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send your enquiry right now.')
      }

      setForm(initialForm)
      setStatus('success')
      setStatusMessage('Thank you. Your enquiry has been received and our team will be in touch shortly.')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to send your enquiry right now.'
      setStatus('error')
      setStatusMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="page-shell page-shell--light">
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div className="contact-hero__copy">
            <p className="eyebrow eyebrow--dark">Contact</p>
            <h1>Speak with the Nature&apos;s Nurture team.</h1>
            <span className="about-hero__divider" aria-hidden="true" />
            <p>
              We’re here to support product enquiries, retail conversations and wellness partnerships across the region.
            </p>
          </div>

          <div className="contact-hero__panel">
            <div className="contact-hero__item">
              <MapPinned size={16} />
              <div>
                <span>Location</span>
                <strong>{contactDetails.address}</strong>
              </div>
            </div>
            <div className="contact-hero__item">
              <Phone size={16} />
              <div>
                <span>Phone</span>
                <strong>{contactDetails.phone}</strong>
              </div>
            </div>
            <div className="contact-hero__item">
              <Mail size={16} />
              <div>
                <span>Email</span>
                <strong>{contactDetails.email}</strong>
              </div>
            </div>
            <div className="contact-hero__item contact-hero__item--subtle">
              <Users2 size={16} />
              <div>
                <span>Business enquiries</span>
                <strong>Retail, wholesale &amp; partnerships</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container contact-layout">
        <div className="contact-card contact-card--primary">
          <h3>Get in touch</h3>
          <ul>
            <li><Mail size={16} /> {contactDetails.email}</li>
            <li><Phone size={16} /> {contactDetails.phone}</li>
            <li><MapPin size={16} /> {contactDetails.address}</li>
          </ul>
        </div>

        <form className="contact-form-box" onSubmit={handleSubmit} noValidate>
          <h3>Send a message</h3>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <small className="field-error">{errors.name}</small>}
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <small className="field-error">{errors.email}</small>}
            </label>

            <label className="full-width">
              <span>Company</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Business or retailer name"
              />
            </label>

            <label className="full-width">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+27 00 000 0000"
              />
            </label>

            <label className="full-width">
              <span>Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your enquiry"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <small className="field-error">{errors.message}</small>}
            </label>

            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          {statusMessage && (
            <div className={`form-status form-status--${status}`} aria-live="polite">
              {statusMessage}
            </div>
          )}

          <button className="button button--primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'} <ArrowRight size={16} />
          </button>
        </form>
      </section>

    </main>
  )
}
