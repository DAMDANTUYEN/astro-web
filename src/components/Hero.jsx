import './Hero.css'

export default function Hero() {
  const scrollDown = () => {
    const el = document.querySelector('#ve-chung-toi')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-orbs">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
      </div>

      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="hero-particle" style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${5 + Math.random() * 85}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">✦ ASTRO-GLAMPING & HEALING</div>
        <h1 className="hero-slogan">
          TẮT ĐÈN THÀNH PHỐ,<br />
          <span className="hero-highlight">BẬT SÁNG NGÀN SAO</span>
        </h1>
        <p className="hero-sub">
          Hành trình Astro-Glamping & Chữa lành chuyên sâu đầu tiên tại Việt Nam
        </p>
        <button className="hero-cta" onClick={scrollDown}>
          KHÁM PHÁ ĐÊM SIÊU THỰC
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="hero-arrow">
            <path d="M10 3v14M5 12l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <button className="scroll-indicator" onClick={scrollDown} aria-label="Scroll down">
        <span className="scroll-mouse">
          <span className="scroll-dot" />
        </span>
      </button>
    </section>
  )
}
