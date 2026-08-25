import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)
const windowMs = 15 * 60 * 1000
const maxRequestsPerWindow = 5
const requestTracker = new Map()

app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

function getClientKey(request) {
  return request.ip || request.headers['x-forwarded-for'] || 'unknown-client'
}

function trimString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function applyRateLimit(request) {
  const key = getClientKey(request)
  const now = Date.now()
  const timestamps = requestTracker.get(key) || []
  const recent = timestamps.filter((timestamp) => now - timestamp < windowMs)

  if (recent.length >= maxRequestsPerWindow) {
    return false
  }

  recent.push(now)
  requestTracker.set(key, recent)
  return true
}

app.get('/api/health', (_request, response) => {
  response.status(200).json({ ok: true })
})

app.post('/api/contact', async (request, response) => {
  if (!applyRateLimit(request)) {
    response.status(429).json({
      message: 'Too many enquiries submitted. Please try again in a few minutes.',
    })
    return
  }

  const form = request.body || {}
  const name = trimString(form.name)
  const email = trimString(form.email)
  const company = trimString(form.company)
  const phone = trimString(form.phone)
  const message = trimString(form.message)
  const honeypot = trimString(form.website)

  if (honeypot) {
    response.status(400).json({ message: 'Invalid submission.' })
    return
  }

  if (!name || !email || !message) {
    response.status(400).json({
      message: 'Please complete your name, email address and enquiry before sending.',
    })
    return
  }

  if (!validateEmail(email)) {
    response.status(400).json({
      message: 'Please provide a valid email address.',
    })
    return
  }

  const emailTo = process.env.EMAIL_TO
  const emailFrom = process.env.EMAIL_FROM || 'no-reply@naturesnurture.co.za'
  const emailMode = process.env.EMAIL_MODE || 'mock'

  if (!emailTo && emailMode !== 'mock') {
    response.status(503).json({
      message: 'Email delivery has not been configured for this environment yet.',
    })
    return
  }

  if (emailMode === 'mock') {
    console.log('Mock email submission received:', {
      name,
      email,
      company,
      phone,
      message,
      receivedAt: new Date().toISOString(),
    })

    response.status(200).json({
      message: 'Thank you. Your enquiry has been received and our team will be in touch shortly.',
    })
    return
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : '',
        phone ? `Phone: ${phone}` : '',
        '',
        'Message:',
        message,
      ].filter(Boolean).join('\n'),
    })

    response.status(200).json({
      message: 'Thank you. Your enquiry has been received and our team will be in touch shortly.',
    })
  } catch (error) {
    console.error('Email send failed:', error)
    response.status(500).json({
      message: 'There was a problem sending your enquiry. Please try again shortly.',
    })
  }
})

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`)
})
