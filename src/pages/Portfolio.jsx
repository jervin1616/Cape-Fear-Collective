import { useState } from 'react'
import { Link } from 'react-router-dom'

const galleryItems = [
  {
    id: 1,
    caption: 'Elise + Marcus',
    sub: 'Airlie Gardens · October',
    category: 'Weddings',
    aspect: 'portrait',
    src: 'https://picsum.photos/seed/weddingone/600/800',
  },
  {
    id: 2,
    caption: 'Sophia + Daniel',
    sub: 'Fig Tree Restaurant · June',
    category: 'Weddings',
    aspect: 'landscape',
    src: 'https://picsum.photos/seed/weddingtwo/800/600',
  },
  {
    id: 3,
    caption: 'Claire + Noah',
    sub: 'Wrightsville Beach · September',
    category: 'Elopements',
    aspect: 'portrait',
    src: 'https://picsum.photos/seed/elopementone/600/800',
  },
  {
    id: 4,
    caption: 'Priya + Thomas',
    sub: 'Private Estate, Raleigh · May',
    category: 'Weddings',
    aspect: 'landscape',
    src: 'https://picsum.photos/seed/weddingthree/800/600',
  },
  {
    id: 5,
    caption: 'Ava + Liam',
    sub: 'Bald Head Island · April',
    category: 'Engagements',
    aspect: 'portrait',
    src: 'https://picsum.photos/seed/engagementone/600/800',
  },
  {
    id: 6,
    caption: 'Margot + James',
    sub: 'Sunset Beach · August',
    category: 'Elopements',
    aspect: 'landscape',
    src: 'https://picsum.photos/seed/elopementtwo/800/600',
  },
  {
    id: 7,
    caption: 'Isabelle + Ryan',
    sub: 'Battleship North Carolina · November',
    category: 'Weddings',
    aspect: 'portrait',
    src: 'https://picsum.photos/seed/weddingfour/600/800',
  },
  {
    id: 8,
    caption: 'Zoe + Miles',
    sub: 'Fort Fisher · March',
    category: 'Engagements',
    aspect: 'landscape',
    src: 'https://picsum.photos/seed/engagementtwo/800/600',
  },
  {
    id: 9,
    caption: 'Avery + Cole',
    sub: 'Airlie Gardens · July',
    category: 'Weddings',
    aspect: 'portrait',
    src: 'https://picsum.photos/seed/weddingfive/600/800',
  },
]

const filters = ['All', 'Weddings', 'Engagements', 'Elopements']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <main className="bg-stone-dark min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 max-w-6xl mx-auto">
        <h1
          className="font-cormorant font-light text-cream leading-none mb-6"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          The Work.
        </h1>
        <p className="font-jost font-light text-cream-muted text-sm tracking-wide max-w-md">
          A selection of stories from the past few seasons.
        </p>
      </section>

      {/* Filter row */}
      <section className="px-8 mb-10 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-jost font-light text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 ${
                active === f
                  ? 'border-gold text-gold bg-gold/10'
                  : 'border-gold/30 text-cream-muted hover:border-gold/60 hover:text-cream'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-8 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`relative group overflow-hidden cursor-pointer ${
                item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={`${item.caption} — ${item.sub}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stone-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <p className="font-cormorant italic text-cream text-lg text-center px-4">
                  {item.caption}
                </p>
                <p className="font-jost font-light text-gold text-xs tracking-[0.1em] uppercase text-center mt-2">
                  {item.sub}
                </p>
                <p className="font-jost font-light text-cream-muted text-xs tracking-[0.08em] uppercase text-center mt-1">
                  {item.category}
                </p>
              </div>

              {/* Default caption gradient (fades on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-dark/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="font-cormorant italic text-cream-muted text-xs text-center">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact" className="cta-link text-sm tracking-wide">
            Inquire about your date →
          </Link>
        </div>
      </section>
    </main>
  )
}
