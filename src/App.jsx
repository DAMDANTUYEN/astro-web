import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date('2026-05-28T00:00:00')

    const update = () => {
      const now = new Date()
      const diff = target - now
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="page">
      <video className="bg-video" autoPlay muted loop playsInline poster="/bg_cms.mp4">
        <source src="/bg_cms.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />

      <nav className="navbar">
        <span className="logo">✦ Astro Glamping</span>
      </nav>

      <main className="main">
        <div className="badge">Coming Soon</div>
        <h1 className="title">
          <span className="title-sub">ĐÊM NGÀN SAO</span>
          <span className="title-main">Astro-Glamping & Healing</span>
        </h1>
        <p className="desc">
          Một hành trình giữa thiên nhiên — nơi bầu trời đầy sao, ánh lửa bập bùng
          và tâm hồn được chữa lành. Trải nghiệm glamping giữa lòng Tây Nguyên hùng vĩ.
        </p>

        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-num">{pad(timeLeft.days)}</span>
            <span className="countdown-label">Ngày</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-num">{pad(timeLeft.hours)}</span>
            <span className="countdown-label">Giờ</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-num">{pad(timeLeft.minutes)}</span>
            <span className="countdown-label">Phút</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-num">{pad(timeLeft.seconds)}</span>
            <span className="countdown-label">Giây</span>
          </div>
        </div>

        <div className="subscribe">
          <input type="email" placeholder="Nhập email để nhận tin sớm nhất..." />
          <button type="button">Đăng ký</button>
        </div>
      </main>

      <footer className="footer">
        <div className="stars-mini" />
        <p>© 2026 Astro Glamping. Giữa đất trời, tìm về chính mình.</p>
      </footer>
    </div>
  )
}

export default App
