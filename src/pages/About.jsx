import { Link } from 'react-router-dom'

const approaches = [
  {
    icon: '◻',
    title: 'Documentary Style',
    description:
      'Every frame is earned, never arranged. Elise follows the day as it unfolds — moving through rooms quietly, watching for truth rather than performing it.',
  },
  {
    icon: '◯',
    title: 'Natural Light Only',
    description:
      'No flash. No strobes. Just the golden coastal light that Elise has spent eight years learning to read. Every image is shaped by the world as it actually was.',
  },
  {
    icon: '△',
    title: 'Film-Inspired Editing',
    description:
      'Warm, rich tones with lifted shadows and restrained contrast — an edit that feels timeless rather than trendy. Your gallery will look as beautiful in thirty years as it does today.',
  },
]

export default function About() {
  return (
    <main className="bg-stone-dark min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 px-8 max-w-6xl mx-auto">
        <p className="font-jost font-light text-gold text-xs tracking-[0.3em] uppercase mb-5">
          — Lead Photographer
        </p>
        <h1
          className="font-cormorant font-light text-cream leading-none"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          Elise Monroe.
        </h1>
      </section>

      {/* Two-column bio */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="rounded-sm overflow-hidden" style={{ aspectRatio: '3/4', minHeight: '400px' }}>
            <img
              src="https://picsum.photos/seed/eliseportrait/600/800"
              alt="Portrait of Elise Monroe"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio text */}
          <div className="flex flex-col gap-8 md:pt-4">
            <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
              Elise discovered photography at nineteen, shooting expired 35mm film along the North Carolina
              coast with a camera she found at an estate sale. She wasn't trying to build a career — she was
              just trying to hold onto things. A summer that was ending. Light on water at the wrong time
              of day. The feeling of being somewhere that mattered. When a close friend asked her to document
              their elopement on a barrier island with twelve guests and a borrowed ring, something clicked.
              She never looked back.
            </p>

            <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
              Her approach is rooted in documentary tradition: she shoots what happens, not what she planned.
              Before every session, Elise spends thirty minutes with each couple — no camera, no agenda.
              Just conversation. She wants to know how you met, what makes you laugh, what you're nervous
              about. By the time she picks up her camera, you've forgotten she's a photographer. That's
              exactly where she does her best work.
            </p>

            <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
              Elise has lived along the Cape Fear coast her entire life. She believes the light here —
              the way it softens in September, the way it goes amber and orange over the Intracoastal
              in late afternoon — is unlike anything she's found anywhere else in the world. Eight years
              and three hundred and forty weddings later, that light still surprises her. It shows in
              every frame.
            </p>

            <div className="pt-4">
              <Link to="/contact" className="cta-link text-sm tracking-wide">
                Work with Elise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-stone-mid py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant italic text-cream text-4xl md:text-5xl leading-relaxed">
            <span className="text-gold mr-4">—</span>
            "I'm not trying to make beautiful photographs.
            I'm trying to make true ones."
            <span className="text-gold ml-4">—</span>
          </p>
        </div>
      </section>

      {/* Approach cards */}
      <section className="bg-stone-warm py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-jost font-light text-gold text-xs tracking-[0.3em] uppercase mb-4 text-center">
            — The Approach
          </p>
          <h2 className="font-cormorant font-light text-cream text-5xl text-center mb-16">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map(({ icon, title, description }) => (
              <div
                key={title}
                className="p-8 border border-gold/15 bg-stone-dark/30 flex flex-col gap-5"
              >
                <span className="text-gold text-2xl font-light">{icon}</span>
                <h3 className="font-cormorant text-cream text-2xl">{title}</h3>
                <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
