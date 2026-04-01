import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Work', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Investment', path: '/investment' },
  { label: 'Contact', path: '/contact' },
]

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-stone-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <p className="font-jost font-light text-cream text-sm tracking-[0.25em] uppercase mb-4">
              Cape Fear Collective
            </p>
            <p className="font-jost font-light text-cream-muted text-sm leading-relaxed">
              Editorial wedding photography rooted in the Carolina Coast. We document the real,
              the raw, and the radiant — for couples who want to remember how it actually felt.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase mb-2">
              Navigate
            </p>
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="font-jost font-light text-xs text-cream-muted tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300 w-fit"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-jost font-light text-gold text-xs tracking-[0.2em] uppercase mb-2">
              Connect
            </p>
            <a
              href="mailto:hello@capefearcollective.com"
              className="font-jost font-light text-sm text-cream-muted hover:text-gold transition-colors duration-300"
            >
              hello@capefearcollective.com
            </a>
            <a
              href="https://instagram.com/capefearcollective"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost font-light text-sm text-cream-muted hover:text-gold transition-colors duration-300 flex items-center gap-2"
            >
              <InstagramIcon />
              @capefearcollective
            </a>
            <p className="font-jost font-light text-xs text-cream-muted mt-2 leading-relaxed">
              Wilmington, NC<br />
              Available throughout the Carolinas &amp; beyond.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="gold-rule mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jost font-light text-xs text-cream-muted tracking-wide">
            © {new Date().getFullYear()} Cape Fear Collective. All rights reserved.
          </p>
          <p className="font-jost font-light text-xs text-cream-muted tracking-wide">
            Site by Rising Tide Digital
          </p>
        </div>
      </div>
    </footer>
  )
}
