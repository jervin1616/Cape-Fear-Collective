import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Work', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Investment', path: '/investment' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-stone-dark/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="font-jost font-light text-cream text-sm tracking-[0.25em] uppercase hover:text-gold transition-colors duration-300"
          style={{ letterSpacing: '0.25em' }}
        >
          Cape Fear Collective
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="font-jost font-light text-xs text-cream-muted uppercase tracking-[0.15em] hover:text-cream transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger — two refined lines */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-[7px] p-1"
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-gold transition-all duration-300" />
          <span className="block w-4 h-px bg-gold transition-all duration-300" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-stone-dark flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-8 text-cream-muted hover:text-gold transition-colors duration-300 text-2xl font-light"
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant italic text-5xl text-cream hover:text-gold transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="absolute bottom-10 font-jost font-light text-xs text-cream-muted tracking-[0.2em] uppercase">
          hello@capefearcollective.com
        </p>
      </div>
    </>
  )
}
