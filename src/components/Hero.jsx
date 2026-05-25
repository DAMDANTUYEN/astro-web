import './Hero.css'

export default function Hero() {
  const scrollDown = () => {
    const el = document.querySelector('#pillars')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/bg_cms.mp4">
        <source src="/bg_cms.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">✦ ASTRO-GLAMPING & HEALING</div>
        <h1 className="hero-slogan">
          TẮT ĐÈN THÀNH PHỐ,<br />
          <span className="hero-highlight">BẬT SÁNG NGÀN SAO</span>
        </h1>
        <p className="hero-sub">
          Hành trình Astro-Glamping & Chữa lành chuyên sâu đầu tiên tại Việt Nam
        </p>
        <button className="hero-cta" onClick={() => scrollDown()}>
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
