import { Link } from 'react-router-dom'

// Reusable image component with cover fit
function Photo({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

const testimonials = [
  {
    couple: 'Avery & Cole',
    venue: 'Airlie Gardens, Wilmington NC',
    quote:
      'Elise captured my father pulling me close during our last dance before he walked me down the aisle — a moment I didn\'t even know happened. When I saw that photo, I wept. She sees things no one else does.',
  },
  {
    couple: 'Priya & Thomas',
    venue: 'Private Estate, Raleigh NC',
    quote:
      'We were nervous about feeling posed or stiff. Elise told us before we started: "Forget I\'m here. Just be you." Within twenty minutes we completely forgot about the camera. Our gallery feels like a film of the best day of our lives.',
  },
  {
    couple: 'Margot & James',
    venue: 'Sunset Beach Ceremony, Brunswick County',
    quote:
      'The getting-ready shots were something I never expected to love — but Elise found all the quiet in-between moments. My mom buttoning my dress. My bridesmaids laughing so hard they cried. Those are the photos I go back to every single day.',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-stone-dark flex items-center overflow-hidden">
        {/* Desktop: right-side photo */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] hidden md:block">
          <img
            src="https://picsum.photos/seed/coastalwedding/1200/1800"
            alt="Sunset wedding ceremony"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-dark via-stone-dark/50 to-transparent" />
        </div>

        {/* Mobile: full-width photo behind overlay */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://picsum.photos/seed/coastalwedding/800/1200"
            alt="Sunset wedding ceremony"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-dark/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full md:w-[40%] px-8 md:px-16 lg:px-24 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-jost font-light text-gold text-xs tracking-[0.3em] uppercase mb-6">
            — Wilmington, NC
          </p>

          <h1 className="font-cormorant font-light text-cream leading-none mb-6" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
            Documenting<br />
            <em>Love.</em>
          </h1>

          <p className="font-jost font-light text-cream-muted text-sm leading-relaxed max-w-xs md:max-w-sm mb-8">
            Editorial wedding photography for couples who want to remember how it actually felt.
          </p>

          <Link to="/contact" className="cta-link text-sm tracking-wide mb-10">
            Begin Your Inquiry →
          </Link>

          <div className="flex gap-6 mt-2">
            {[['340+', 'Weddings'], ['8', 'Years'], ['2025–2026', 'Available']].map(([val, label]) => (
              <div key={label} className="text-center md:text-left">
                <p className="font-jost font-light text-cream text-xs tracking-[0.1em]">{val}</p>
                <p className="font-jost font-light text-cream-muted text-xs tracking-[0.05em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction Strip ── */}
      <section className="bg-stone-mid py-24 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-cormorant italic text-cream text-3xl md:text-4xl leading-relaxed mb-8">
            <span className="text-gold mr-3">—</span>
            "We don't pose you. We find you — in the quiet moments, the stolen glances, the laughter you didn't plan."
            <span className="text-gold ml-3">—</span>
          </p>
          <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
            Cape Fear Collective is a documentary wedding photography studio rooted in Wilmington, NC.
            Led by Elise Monroe, we approach every wedding the same way — with patience, presence, and a
            deep respect for the love unfolding in front of us. No direction. No staging.
            Just honest photographs of your most important day.
          </p>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section className="bg-stone-dark py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-jost font-light text-gold text-xs tracking-[0.3em] uppercase mb-4">
            — Selected Work
          </p>
          <h2 className="font-cormorant font-light text-cream text-5xl md:text-6xl mb-12">
            Recent Stories
          </h2>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[600px] md:h-[700px]">
            {/* Tall portrait — spans 2 rows */}
            <div className="row-span-2 relative group overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/airlieoak/800/1100"
                alt="Elise + Marcus · Airlie Gardens"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-dark/0 group-hover:bg-stone-dark/40 transition-all duration-500 flex items-end">
                <p className="font-cormorant italic text-cream text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Elise + Marcus · Airlie Gardens
                </p>
              </div>
            </div>

            {/* Landscape top right */}
            <div className="relative group overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/figtreevenue/900/600"
                alt="Sophia + Daniel · Fig Tree Restaurant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-dark/0 group-hover:bg-stone-dark/40 transition-all duration-500 flex items-end">
                <p className="font-cormorant italic text-cream text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Sophia + Daniel · Fig Tree Restaurant
                </p>
              </div>
            </div>

            {/* Landscape bottom right */}
            <div className="relative group overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/sunsetbeachNC/900/600"
                alt="Margot + James · Sunset Beach"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-dark/0 group-hover:bg-stone-dark/40 transition-all duration-500 flex items-end">
                <p className="font-cormorant italic text-cream text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Margot + James · Sunset Beach
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio" className="cta-link text-sm tracking-wide">
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Teaser ── */}
      <section className="bg-stone-dark py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="font-cormorant italic text-cream text-5xl md:text-6xl leading-tight mb-6">
                The Investment
              </h2>
              <p className="font-jost font-light text-cream-muted text-sm leading-relaxed mb-8 max-w-sm">
                Collections begin at $2,800. Every couple receives a custom experience —
                no packages that don't fit. We work with you to build exactly what your day deserves.
              </p>
              <Link to="/investment" className="cta-link text-sm tracking-wide">
                Explore Collections →
              </Link>
            </div>

            {/* Right — stat cards */}
            <div className="flex flex-col gap-0 mt-4">
              {[
                ['340+', 'Weddings Documented'],
                ['8 Years', 'Along the Carolina Coast'],
                ['Worldwide', 'Available for Travel'],
              ].map(([val, label], i) => (
                <div key={i} className="py-6 border-t border-gold/20 first:border-t-0">
                  <p className="font-cormorant text-cream text-3xl mb-1">{val}</p>
                  <p className="font-jost font-light text-cream-muted text-xs tracking-[0.1em] uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-stone-mid py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant italic text-cream text-5xl md:text-6xl mb-16 text-center">
            Kind Words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ couple, venue, quote }) => (
              <div key={couple} className="flex flex-col gap-5 p-8 bg-stone-warm border border-gold/10">
                <div className="text-gold text-sm tracking-widest">★★★★★</div>
                <p className="font-jost font-light text-cream-muted text-sm leading-relaxed italic">
                  "{quote}"
                </p>
                <div className="mt-auto pt-4 border-t border-gold/10">
                  <p className="font-cormorant text-cream text-lg">{couple}</p>
                  <p className="font-jost font-light text-gold text-xs tracking-[0.1em] uppercase mt-1">{venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-stone-warm py-32 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cormorant italic text-cream text-5xl md:text-6xl leading-tight mb-6">
            Your story deserves to be told beautifully.
          </h2>
          <p className="font-jost font-light text-cream-muted text-sm leading-relaxed mb-10">
            We're currently booking 2025 and select 2026 dates.
            Inquiries are responded to within 48 hours.
          </p>
          <Link to="/contact" className="cta-link text-sm tracking-wide">
            Begin Your Inquiry →
          </Link>
        </div>
      </section>
    </main>
  )
}
