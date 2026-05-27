import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

const navLinks = [
  { label: 'Lịch Thiên Văn', href: '/calendar' },
  { label: 'Bản Đồ Sao', href: '/starmap' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Về Chúng Tôi', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y > 120) {
        setHidden(y > lastScroll)
      } else {
        setHidden(false)
      }
      lastScroll = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-bg-deep-navy/85 border-b border-gold-primary/10'
          : 'bg-gradient-to-b from-bg-deep-navy/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 md:h-24">
          <Link to="/">
            <Logo size={40} />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-cream-white/50 hover:text-cream-white/80 transition-colors duration-200 tracking-wider uppercase font-body font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="px-7 py-3.5 rounded-full border border-gold-primary/40 text-gold-primary text-[14px] font-semibold uppercase tracking-[0.18em] hover:bg-gold-primary/10 hover:border-gold-primary/60 active:scale-[0.97] transition-all duration-200 cursor-pointer whitespace-nowrap">
              Đặt vé
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] rounded bg-cream-white/50 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] rounded bg-cream-white/50 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] rounded bg-cream-white/50 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-6 pt-2 bg-bg-deep-navy/95 border-b border-gold-primary/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-xs text-cream-white/50 hover:text-cream-white/80 transition-colors border-b border-gold-primary/5 tracking-wider uppercase font-body"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-4 w-full py-3.5 rounded-full border border-gold-primary/40 text-gold-primary text-[14px] font-semibold uppercase tracking-[0.18em] cursor-pointer">
            Đặt vé
          </button>
        </div>
      </div>
    </nav>
  )
}