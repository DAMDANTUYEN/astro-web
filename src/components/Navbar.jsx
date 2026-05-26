import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Lịch Thiên Văn 2026', href: '#calendar' },
  { label: 'Hành Trình', href: '#experiences' },
  { label: 'Thư Viện', href: '#gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-sea-void/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-gradient-to-b from-deep-sea-void/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="px-5 py-2.5 bg-nebular-glow/10 text-nebular-glow text-sm font-semibold rounded-full border border-nebular-glow/20 hover:bg-nebular-glow/20 hover:border-nebular-glow/40 active:scale-[0.97] transition-all duration-200 cursor-pointer whitespace-nowrap">
              Đặt vé vào vũ trụ
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] rounded bg-white/60 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] rounded bg-white/60 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] rounded bg-white/60 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-deep-sea-void/95 backdrop-blur-xl border-b border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm text-white/60 hover:text-white transition-colors border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-4 w-full py-3 bg-nebular-glow/10 text-nebular-glow text-sm font-semibold rounded-full border border-nebular-glow/20 cursor-pointer">
            Đặt vé vào vũ trụ
          </button>
        </div>
      </div>
    </nav>
  )
}
