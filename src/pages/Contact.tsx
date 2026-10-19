import { PageHero } from '../components/ui/PageHero'
import { ArrowRight, Box, ChevronDown, Handshake, Mail, MapPin, MessageCircle, Phone, ShoppingCart, Users2 } from 'lucide-react'
import { useState } from 'react'
import { contactDetails } from '../data/contact'

type FormState = {
  name: string
  email: string
  company: string
  phone: string
  enquiryType: string
  message: string
  website: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  enquiryType: '',
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

  if (!values.enquiryType.trim()) {
    errors.enquiryType = 'Please select an enquiry type.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

const enquiryTypes = ['Product Information', 'Retail Partnership', 'Wholesale & Distribution', 'Export Opportunity', 'General Enquiry']

const helpCategories = [
  { title: 'Retail Partnerships', description: 'Product information, listings and support.', icon: ShoppingCart },
  { title: 'Wholesale & Distribution', description: 'Supply, pricing and availability.', icon: Box },
  { title: 'Export Opportunities', description: 'Partnerships across Africa and international markets.', icon: Handshake },
  { title: 'General Enquiries', description: 'Product questions, media and other enquiries.', icon: MessageCircle },
]

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    if (import.meta.env.PROD) {
      const emailBody = [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        form.company.trim() ? `Company: ${form.company.trim()}` : '',
        form.phone.trim() ? `Phone: ${form.phone.trim()}` : '',
        form.enquiryType?.trim() ? `Enquiry type: ${form.enquiryType.trim()}` : '',
        '',
        'Message:',
        form.message.trim(),
      ].filter(Boolean).join('\n')
      const subject = `Website enquiry from ${form.name.trim()}`
      const mailto = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

      window.location.href = mailto
      setStatus('success')
      setStatusMessage('Your email app should open with your enquiry details. Review and send the message there.')
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

  const [street, ...region] = contactDetails.address.split(',')

  return (
    <main className="page-shell page-shell--light contact-page">
      <PageHero backgroundImage={`${import.meta.env.BASE_URL}contact/contact-hero-background.png`} entryPlacement="bottom" className="contact-design-hero" scrollLabel="Get in touch" scrollTarget="contact-information" labelledBy="contact-heading">
        <div className="container contact-design-hero__layout page-hero__layout">
          <div className="contact-design-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--dark">Get in touch</p>
            <h1 id="contact-heading">Let’s grow<br />wellness<br />together.</h1>
            <p>We’re here to support product enquiries, retail conversations and wellness partnerships across South Africa and beyond.</p>

          </div>
        </div>
      </PageHero>

      <section className="contact-design-section" id="contact-information" tabIndex={-1} aria-label="Contact information and enquiry form">
        <div className="container contact-design-layout">
          <div className="contact-design-information" aria-labelledby="contact-information-heading">
            <h2 id="contact-information-heading">Contact information</h2>
            <p>Get in touch with our team directly or use the form and we’ll get back to you.</p>
            <div className="contact-design-details">
              <article><MapPin size={32} strokeWidth={1.6} aria-hidden="true" /><div><h3>Head Office</h3><address>{street}<br />{region.join(',').trim()}</address></div></article>
              <article><Phone size={31} strokeWidth={1.6} aria-hidden="true" /><div><h3>Phone</h3><a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a></div></article>
              <article><Mail size={32} strokeWidth={1.6} aria-hidden="true" /><div><h3>Email</h3><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></div></article>
              <article><Users2 size={32} strokeWidth={1.6} aria-hidden="true" /><div><h3>Business Enquiries</h3><p>Retail, wholesale &amp; partnerships</p></div></article>
            </div>
          </div>

          <form id="contact-form" className="contact-design-form" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-heading" tabIndex={-1}>
            <h2 id="contact-form-heading">Send us a message</h2>
            <p>Fill in your details and our team will get back to you shortly.</p>
            <div className="contact-design-fields">
              <label>
                <span id="contact-name-label">Name <span aria-hidden="true">*</span></span>
                <input type="text" name="name" aria-labelledby="contact-name-label" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
                {errors.name && <small className="field-error" id="contact-name-error">{errors.name}</small>}
              </label>
              <label>
                <span id="contact-email-label">Email <span aria-hidden="true">*</span></span>
                <input type="email" name="email" aria-labelledby="contact-email-label" autoComplete="email" value={form.email} onChange={handleChange} placeholder="Your email address" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
                {errors.email && <small className="field-error" id="contact-email-error">{errors.email}</small>}
              </label>
              <label>
                <span id="contact-company-label">Company</span>
                <input type="text" name="company" aria-labelledby="contact-company-label" autoComplete="organization" value={form.company} onChange={handleChange} placeholder="Business or retailer name" />
              </label>
              <label>
                <span id="contact-phone-label">Phone</span>
                <input type="tel" inputMode="tel" name="phone" aria-labelledby="contact-phone-label" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
              </label>
              <label className="contact-design-fields__wide">
                <span id="contact-enquiry-label">Enquiry type <span aria-hidden="true">*</span></span>
                <span className="contact-design-select">
                  <select name="enquiryType" aria-labelledby="contact-enquiry-label" value={form.enquiryType} onChange={handleChange} required aria-invalid={Boolean(errors.enquiryType)} aria-describedby={errors.enquiryType ? 'contact-enquiry-error' : undefined}>
                    <option value="" disabled>Select an enquiry type</option>
                    {enquiryTypes.map((type) => <option value={type} key={type}>{type}</option>)}
                  </select>
                  <ChevronDown size={17} aria-hidden="true" />
                </span>
                {errors.enquiryType && <small className="field-error" id="contact-enquiry-error">{errors.enquiryType}</small>}
              </label>
              <label className="contact-design-fields__wide">
                <span id="contact-message-label">Message <span aria-hidden="true">*</span></span>
                <textarea rows={5} name="message" aria-labelledby="contact-message-label" value={form.message} onChange={handleChange} placeholder="Tell us about your enquiry" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
                {errors.message && <small className="field-error" id="contact-message-error">{errors.message}</small>}
              </label>
              <input type="text" name="website" value={form.website} onChange={handleChange} className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            </div>
            {statusMessage && <div className={`form-status form-status--${status}`} aria-live="polite">{statusMessage}</div>}
            <button className="button button--primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={16} aria-hidden="true" /></button>
          </form>
        </div>
      </section>

      <section className="contact-design-section contact-design-help" aria-labelledby="contact-help-heading">
        <div className="container">
          <h2 id="contact-help-heading">How we can help</h2>
          <p>We work with retail partners, distributors and organisations to make high-quality wellness products more accessible across South Africa and the wider African region.</p>
          <div className="contact-design-help__grid">
            {helpCategories.map(({ title, description, icon: Icon }) => <article key={title}><Icon size={30} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  )
}
