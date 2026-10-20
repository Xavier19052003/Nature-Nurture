export const contactDetails = {
  email: 'Sales@RainmakerFMCG.co.za',
  phone: '+27 (0) 87 821 6935',
  phoneInternational: '+27878216935',
  whatsapp: ['+27 82 372 2748', '+27 83 777 4923', '+91 98203 22856'],
  address: 'Ground Floor Block 1, Ridge 63, 8 Sinembe Park, Douglas Saunders Drive, La Lucia Ridge, 4319, Durban, KZN, South Africa',
}

type ContactEnquiry = { name: string; email: string; company: string; phone: string; enquiryType: string; message: string }

export function buildContactMailto(form: ContactEnquiry) {
  const body = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    form.company.trim() ? `Company: ${form.company.trim()}` : '',
    form.phone.trim() ? `Phone: ${form.phone.trim()}` : '',
    form.enquiryType.trim() ? `Enquiry type: ${form.enquiryType.trim()}` : '',
    '',
    'Message:',
    form.message.trim(),
  ].filter(Boolean).join('\n')
  const subject = `Website enquiry from ${form.name.trim()}`
  return `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
