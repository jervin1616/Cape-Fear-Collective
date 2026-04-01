import { useState } from 'react'
import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'The Elopement',
    price: 'From $2,800',
    description: 'Intimate and intentional. For couples who want the whole world to disappear.',
    features: [
      '6 hours of coverage',
      'One photographer',
      'Online gallery — 400+ images',
      'Full print release',
      '2-week delivery',
    ],
  },
  {
    name: 'The Celebration',
    price: 'From $4,200',
    description: 'The full story of your day, beautifully documented from beginning to end.',
    features: [
      '10 hours of coverage',
      'Second photographer',
      'Engagement session included',
      'Online gallery — 700+ images',
      'Fine art album consultation',
      'Full print release',
    ],
    featured: true,
  },
  {
    name: 'The Legacy',
    price: 'From $6,500',
    description: 'An heirloom experience. For the wedding that deserves everything.',
    features: [
      'Full weekend coverage',
      'Two photographers',
      'Engagement session',
      'Rehearsal dinner coverage',
      'Fine art heirloom album',
      'Unlimited gallery images',
      'Priority 1-week delivery',
      'Complimentary anniversary session',
    ],
  },
]

const faqs = [
  {
    q: 'What is your booking process?',
    a: 'Once you reach out, we\'ll set up a short call to get to know each other and make sure we\'re the right fit. If everything feels right, we send a simple contract and collect a 30% retainer to officially hold your date. The remaining balance is due 30 days before your wedding.',
  },
  {
    q: 'Do you travel?',
    a: 'Absolutely. While we\'re rooted in Wilmington and the Cape Fear coast, we\'ve documented weddings throughout the Carolinas and beyond. Travel fees apply for locations requiring overnight stays — we\'ll always be transparent about this in your quote.',
  },
  {
    q: 'How long until we receive our gallery?',
    a: 'The Elopement and Celebration collections include a 2-week turnaround. Legacy collection couples receive priority 1-week delivery. During peak season (April–October) there may be slight variation, but we will always communicate a firm delivery date before you sign.',
  },
  {
    q: 'Do you shoot film?',
    a: 'Our primary work is digital, edited to honor the warmth and grain of analog film. For couples who want a true hybrid experience — actual rolls of 35mm alongside digital coverage — we offer this as an add-on. Just ask.',
  },
  {
    q: 'What if it rains on our wedding day?',
    a: 'Rain is one of our favorite things to shoot. Truly. An overcast sky is a giant softbox, and puddles on cobblestone are magic. We\'ve never once had a gallery suffer because of weather — and most couples end up loving their rainy-day portraits most of all.',
  },
]

export default function Investment() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-stone-dark min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 px-8 max-w-6xl mx-auto text-center">
        <p className="font-jost font-light text-gold text-xs tracking-[0.3em] uppercase mb-5">
          — Pricing
        </p>
        <h1
          className="font-cormorant font-light text-cream leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          The Collections.
        </h1>
        <p className="font-jost font-light text-cream-muted text-sm leading-relaxed max-w-lg mx-auto">
          Transparent pricing. No surprises. Every couple receives the same level of care
          regardless of collection.
        </p>
      </section>

      {/* Package cards */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map(({ name, price, description, features, featured }) => (
            <div
              key={name}
              className={`flex flex-col p-8 bg-stone-warm border-t-2 transition-all duration-500 ${
                featured
                  ? 'border-t-gold border border-gold/30 scale-[1.02]'
                  : 'border-t-gold/40 border border-gold/10'
              }`}
            >
              {featured && (
                <p className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase mb-3">
                  Most Popular
                </p>
              )}
              <h3 className="font-cormorant text-cream text-3xl mb-2">{name}</h3>
              <p className="font-cormorant italic text-gold text-4xl mb-4">{price}</p>
              <p className="font-jost font-light text-cream-muted text-xs leading-relaxed mb-6">
                {description}
              </p>

              <hr className="gold-rule mb-6" />

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-gold text-xs mt-0.5 shrink-0">—</span>
                    <span className="font-jost font-light text-cream-muted text-xs leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="cta-link text-xs tracking-wide">
                Begin Inquiry →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-stone-mid py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="font-jost font-light text-gold text-xs tracking-[0.3em] uppercase mb-4">
            — Questions
          </p>
          <h2 className="font-cormorant font-light text-cream text-5xl mb-12">
            Frequently Asked
          </h2>

          <div className="flex flex-col divide-y divide-gold/15">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-start justify-between w-full text-left gap-4 group"
                >
                  <span className="font-jost font-light text-cream text-sm tracking-wide group-hover:text-gold transition-colors duration-300">
                    {q}
                  </span>
                  <span
                    className={`text-gold text-lg shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openFaq === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-dark py-24 px-8 text-center">
        <h2 className="font-cormorant italic text-cream text-5xl mb-6">
          Ready to Reserve Your Date?
        </h2>
        <p className="font-jost font-light text-cream-muted text-sm mb-8 max-w-md mx-auto leading-relaxed">
          We're booking 2025 and select 2026 dates now. Reach out and let's talk about your day.
        </p>
        <Link to="/contact" className="cta-link text-sm tracking-wide">
          Begin Your Inquiry →
        </Link>
      </section>
    </main>
  )
}
