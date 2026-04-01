import { Link } from 'react-router-dom'

export default function Thanks() {
  return (
    <main className="bg-stone-dark min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-lg">
        <p className="font-cormorant italic text-gold text-2xl mb-6">— received</p>

        <h1
          className="font-cormorant font-light text-cream leading-none mb-8"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          Thank You.
        </h1>

        <p className="font-jost font-light text-cream-muted text-sm leading-relaxed mb-12">
          We've received your inquiry and will be in touch within 48 hours.
          In the meantime, feel free to browse the portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link to="/portfolio" className="cta-link text-sm tracking-wide">
            View the Work →
          </Link>
          <Link to="/" className="cta-link text-sm tracking-wide">
            Return Home →
          </Link>
        </div>
      </div>
    </main>
  )
}
