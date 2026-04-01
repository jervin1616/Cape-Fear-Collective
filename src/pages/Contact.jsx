import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  weddingDate: '',
  venue: '',
  referral: '',
  story: '',
  collection: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'REPLACE_WITH_WEB3FORMS_KEY',
          subject: 'New Inquiry — Cape Fear Collective',
          from_name: `${form.firstName} ${form.lastName}`,
          ...form,
          redirect: window.location.origin + '/Cape-Fear-Collective/thanks',
        }),
      })
      const data = await res.json()
      if (data.success) {
        navigate('/thanks')
      } else {
        setError('Something went wrong. Please email us directly at hello@capefearcollective.com')
      }
    } catch {
      setError('Something went wrong. Please email us directly at hello@capefearcollective.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-stone-dark min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-12 px-8 max-w-6xl mx-auto">
        <h1
          className="font-cormorant font-light text-cream leading-none mb-5"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          Let's Connect.
        </h1>
        <p className="font-jost font-light text-cream-muted text-sm leading-relaxed max-w-md">
          Tell us about your day. We respond to every inquiry within 48 hours.
        </p>
      </section>

      {/* Two-column layout */}
      <section className="px-8 py-12 pb-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
              <FormField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormField label="Email Address" name="email" type="email" required value={form.email} onChange={handleChange} />
              <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormField label="Wedding Date" name="weddingDate" type="date" value={form.weddingDate} onChange={handleChange} />
              <FormField label="Venue" name="venue" value={form.venue} onChange={handleChange} placeholder="If known" />
            </div>

            <SelectField
              label="How Did You Find Us"
              name="referral"
              value={form.referral}
              onChange={handleChange}
              options={['Google', 'Instagram', 'Referral', 'The Knot', 'Other']}
            />

            <SelectField
              label="Collection Interest"
              name="collection"
              value={form.collection}
              onChange={handleChange}
              options={['The Elopement', 'The Celebration', 'The Legacy', 'Not Sure Yet']}
            />

            <TextareaField
              label="Your Story"
              name="story"
              value={form.story}
              onChange={handleChange}
              placeholder="Tell us about your day, your vision, what matters most to you..."
            />

            {error && (
              <p className="font-jost font-light text-red-400 text-xs leading-relaxed">{error}</p>
            )}

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="cta-link text-sm tracking-wide disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Inquiry →'}
              </button>
            </div>
          </form>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8 md:pt-4">
            <div>
              <p className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase mb-3">
                Email
              </p>
              <a
                href="mailto:hello@capefearcollective.com"
                className="font-jost font-light text-cream-muted text-sm hover:text-gold transition-colors duration-300"
              >
                hello@capefearcollective.com
              </a>
            </div>

            <div>
              <p className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com/capefearcollective"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jost font-light text-cream-muted text-sm hover:text-gold transition-colors duration-300"
              >
                @capefearcollective
              </a>
            </div>

            <div className="border-t border-gold/15 pt-6">
              <p className="font-jost italic font-light text-cream-muted text-sm leading-relaxed">
                We are currently booking 2025 and select 2026 dates. Reach out early — popular
                dates fill quickly.
              </p>
            </div>

            {/* Decorative placeholder */}
            <div
              className="photo-placeholder rounded-sm mt-4"
              style={{ aspectRatio: '4/3' }}
            >
              <span>Elise at a recent workshop</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function FormField({ label, name, type = 'text', required = false, value, onChange, placeholder = '' }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase"
      >
        {label}{required && ' *'}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent border-b border-gold/40 focus:border-gold text-cream font-jost font-light text-sm py-2 outline-none transition-all duration-300 placeholder:text-cream-muted/30 focus:shadow-[0_1px_0_0_rgba(201,169,110,0.6)] caret-gold"
        style={{ colorScheme: 'dark' }}
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-transparent border-b border-gold/40 focus:border-gold text-cream-muted font-jost font-light text-sm py-2 outline-none transition-all duration-300 cursor-pointer"
        style={{ colorScheme: 'dark' }}
      >
        <option value="" className="bg-stone-dark">Select one</option>
        {options.map(o => (
          <option key={o} value={o} className="bg-stone-dark text-cream">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function TextareaField({ label, name, value, onChange, placeholder = '' }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        placeholder={placeholder}
        className="bg-transparent border-b border-gold/40 focus:border-gold text-cream font-jost font-light text-sm py-2 outline-none transition-all duration-300 placeholder:text-cream-muted/30 resize-none caret-gold"
        style={{ colorScheme: 'dark' }}
      />
    </div>
  )
}
