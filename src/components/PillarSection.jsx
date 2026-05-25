import './PillarSection.css'

const pillars = [
  {
    id: 'astro',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="pillar-icon-svg">
        <circle cx="32" cy="32" r="28" stroke="url(#astroGrad)" strokeWidth="1.5" fill="none" opacity="0.3"/>
        <path d="M32 16v24M20 28l12 12 12-12" stroke="url(#astroGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="26" r="4" fill="url(#astroGrad)"/>
        <line x1="28" y1="44" x2="36" y2="44" stroke="url(#astroGrad)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs>
          <linearGradient id="astroGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0d78c"/>
            <stop offset="100%" stopColor="#7c4dff"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'ASTRO',
    subtitle: 'Thiên văn học',
    desc: 'Chạm vào tri thức vũ trụ thực chứng qua kính thiên văn thông minh S50 — ngắm nhìn các tinh vân, cụm sao và dải Ngân hà rực rỡ.',
    cta: 'Tìm hiểu công nghệ',
    color: '#7c4dff',
  },
  {
    id: 'glamping',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="pillar-icon-svg">
        <path d="M16 44l16-28 16 28" stroke="url(#glampGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 44l-4 8M44 44l4 8M28 44l-2 8M36 44l2 8" stroke="url(#glampGrad)" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="32" cy="18" rx="10" ry="6" stroke="url(#glampGrad)" strokeWidth="1.2" fill="none"/>
        <path d="M26 26c0 4 6 6 6 6s6-2 6-6" stroke="url(#glampGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <defs>
          <linearGradient id="glampGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0d78c"/>
            <stop offset="100%" stopColor="#4dd0c8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'GLAMPING',
    subtitle: 'Cắm trại cao cấp',
    desc: 'Mang cả không gian vào giấc ngủ giữa tự nhiên hoang sơ — lều Bubble trong suốt với đầy đủ tiện nghi cao cấp.',
    cta: 'Khám phá nội thất',
    color: '#4dd0c8',
  },
  {
    id: 'healing',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="pillar-icon-svg">
        <ellipse cx="32" cy="38" rx="14" ry="12" stroke="url(#healGrad)" strokeWidth="1.3" fill="none"/>
        <path d="M32 18v20" stroke="url(#healGrad)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="16" r="3" fill="url(#healGrad)"/>
        <path d="M22 44c0 4 4 6 10 6s10-2 10-6" stroke="url(#healGrad)" strokeWidth="1.3" fill="none"/>
        <circle cx="32" cy="38" r="4" opacity="0.3" fill="url(#healGrad)">
          <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
        </circle>
        <defs>
          <linearGradient id="healGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0d78c"/>
            <stop offset="100%" stopColor="#a78bfa"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'HEALING',
    subtitle: 'Chữa lành',
    desc: 'Tách biệt hoàn toàn khỏi thiết bị số, hòa mình vào liệu pháp tắm âm thanh chữa lành dưới vạn vì sao tĩnh lặng.',
    cta: 'Tần số trị liệu',
    color: '#a78bfa',
  },
]

export default function PillarSection() {
  return (
    <section id="ve-chung-toi" className="pillar-section">
      <div className="pillar-header">
        <span className="pillar-tag">BA TRỤ CỘT TRẢI NGHIỆM</span>
        <h2 className="pillar-title">
          Hành trình <span className="pillar-highlight">trọn vẹn</span>
        </h2>
        <p className="pillar-desc">
          Astro-Glamping là sự kết hợp hoàn hảo giữa khoa học vũ trụ, nghỉ dưỡng đẳng cấp và liệu pháp chữa lành tâm hồn.
        </p>
      </div>
      <div className="pillar-grid">
        {pillars.map((p, i) => (
          <article key={p.id} className="pillar-card" style={{ '--card-accent': p.color }}>
            <div className="pillar-icon">{p.icon}</div>
            <h3 className="pillar-card-title">
              {p.title}
              <span className="pillar-card-sub">{p.subtitle}</span>
            </h3>
            <p className="pillar-card-desc">{p.desc}</p>
            <button className="pillar-card-btn">{p.cta}</button>
          </article>
        ))}
      </div>
    </section>
  )
}
