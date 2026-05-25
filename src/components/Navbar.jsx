import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'VỀ CHÚNG TÔI', href: '#ve-chung-toi' },
  { label: 'LỊCH THIÊN VĂN 2026', href: '#lich-thien-van' },
  { label: 'HÀNH TRÌNH', href: '#hanh-trinh' },
  { label: 'THƯ VIỆN', href: '#thu-vien' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="logo-icon">
            <path d="M16 2l3.09 6.26L26 9.27l-5 4.87 1.18 6.88L16 17.54l-6.18 3.48L11 14.14l-5-4.87 6.91-1.01L16 2z" fill="url(#logoGrad)"/>
            <circle cx="8" cy="6" r="1.5" fill="rgba(255,255,255,0.6)"/>
            <circle cx="26" cy="10" r="1" fill="rgba(255,255,255,0.4)"/>
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f8e8b0"/>
                <stop offset="100%" stopColor="#c9a94c"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">Astro Glamping</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <button className="cta-btn" onClick={() => navigate('/dat-ve')}>
            ĐẶT VÉ VÀO VŨ TRỤ
          </button>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
