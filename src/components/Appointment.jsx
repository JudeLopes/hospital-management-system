import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from './Reveal'

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Diagnostics', 'Emergency Care']
const doctors = ['Any available specialist', 'Dr. Maya Shah', 'Dr. Arjun Mehta', 'Dr. Elena Rao']
const initialForm = { name: '', email: '', phone: '', department: '', doctor: '', date: '', message: '' }
const today = () => {
  const date = new Date()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

export default function Appointment() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const update = (event) => { const { name, value } = event.target; setForm((current) => ({ ...current, [name]: value })); setErrors((current) => ({ ...current, [name]: '' })) }
  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please add your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    const phoneDigits = form.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10 || phoneDigits.length > 15 || !/^\+?[0-9][0-9\s().-]{8,}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (!form.department) next.department = 'Please choose a department.'
    if (!form.doctor) next.doctor = 'Please choose a preferred doctor.'
    if (!form.date || form.date < today()) next.date = 'Please choose today or a future date.'
    return next
  }
  const submit = (event) => { event.preventDefault(); const next = validate(); if (Object.keys(next).length) { setErrors(next); return }; setSubmitted(true) }
  const reset = () => { setForm(initialForm); setErrors({}); setSubmitted(false) }
  return <section className="appointment-section" id="appointment">
    <div className="appointment-intro"><div className="section-label light"><span>07</span><span>/</span><span>YOUR NEXT STEP</span></div><Reveal as="h2" className="display-heading light-heading">Let's arrange<br /><em>your visit.</em></Reveal><Reveal className="appointment-note" delay={100}>Tell us a little about what you need. Our care team will help find the right place to begin.</Reveal><div className="appointment-contact"><span>URGENT CARE</span><strong>+91 22 4012 4800</strong><small>Available 24 / 7</small></div></div>
    <div className="appointment-panel">{submitted ? <div className="success-state" role="status" aria-live="polite"><div className="success-icon"><Check size={23} /></div><span className="eyebrow">REQUEST RECEIVED</span><h3>Appointment request received.</h3><p>Our care team will review your request and contact you with the available appointment time.</p><button className="button button-outline" onClick={reset}>BOOK ANOTHER APPOINTMENT <ArrowUpRight size={15} /></button></div> : <form className="appointment-form" onSubmit={submit} noValidate><div className="form-intro"><span>Tell us about yourself</span><span>Fields marked * are required</span></div><div className="form-grid"><Field label="Full Name" name="name" value={form.name} onChange={update} error={errors.name} placeholder="Your name" autoComplete="name" required /><Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} placeholder="you@example.com" autoComplete="email" required /><Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} error={errors.phone} placeholder="+91" autoComplete="tel" required /><SelectField label="Department" name="department" value={form.department} onChange={update} error={errors.department} options={departments} required /><SelectField label="Preferred Doctor" name="doctor" value={form.doctor} onChange={update} error={errors.doctor} options={doctors} required /><Field label="Preferred Date" name="date" type="date" value={form.date} onChange={update} error={errors.date} min={today()} required /><label className="field field-wide" htmlFor="appointment-message"><span>Message <small>(optional)</small></span><textarea id="appointment-message" name="message" value={form.message} onChange={update} placeholder="Anything you'd like us to know?" rows="4" /></label></div><div className="form-footer"><span>Your information is handled with care and kept confidential.</span><button className="button button-dark" type="submit">REQUEST APPOINTMENT <ArrowUpRight size={15} /></button></div></form>}</div>
  </section>
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, required, autoComplete, min }) {
  const id = `appointment-${name}`
  const errorId = `${id}-error`
  return <label className="field" htmlFor={id}><span>{label}{required && ' *'}</span><input id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} min={min} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />{error && <small id={errorId} className="field-error">{error}</small>}</label>
}
function SelectField({ label, name, value, onChange, error, options, required }) {
  const id = `appointment-${name}`
  const errorId = `${id}-error`
  return <label className="field" htmlFor={id}><span>{label}{required && ' *'}</span><select id={id} name={name} value={value} onChange={onChange} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined}><option value="">Choose an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <small id={errorId} className="field-error">{error}</small>}</label>
}
