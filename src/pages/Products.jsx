import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import products from '../data/products'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Starfield from '../components/ui/Starfield'

const highlights = [
  { step: '01', stat: '3+', statLabel: 'LOẠI KÍNH', icon: 'tabler:telescope', label: 'Kính thiên văn thông minh', sub: 'Điều khiển qua tablet trong lều', gradient: 'linear-gradient(135deg,#1a1f2e,#2a1f10)' },
  { step: '02', stat: '100%', statLabel: 'RIÊNG TƯ', icon: 'tabler:tent', label: 'Lều Glamping cao cấp', sub: 'Dome riêng tư, cách âm hoàn toàn', gradient: 'linear-gradient(135deg,#0d1f1a,#1a2d1f)' },
  { step: '03', stat: '24/7', statLabel: 'HỖ TRỢ', icon: 'tabler:user-star', label: 'Hướng dẫn viên chuyên nghiệp', sub: 'Astro-guide suốt đêm quan sát', gradient: 'linear-gradient(135deg,#1a1520,#2a1a30)' },
]

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img alt="" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep-navy/80 via-bg-deep-navy/30 to-bg-deep-navy/90" />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.06), transparent 60%)' }} />
      <div className="relative text-center px-6 max-w-4xl z-10">
        <div className="mb-4 md:mb-6 flex items-center justify-center gap-3">
          <span className="block w-6 md:w-8 h-px bg-gold-primary/30" />
          <span className="text-gold-primary/60 text-[14px] tracking-[0.2em] font-semibold uppercase font-body">Sản phẩm &amp; Dịch vụ</span>
          <span className="block w-6 md:w-8 h-px bg-gold-primary/30" />
        </div>
        <h1 className="font-display-serif text-[clamp(2.2rem,7vw,4.5rem)] text-cream-white mb-4 leading-[1.1] font-semibold">
          Chọn Hành Trình<br />
          <span className="text-gold-primary/85">Của Bạn</span>
        </h1>
        <p className="text-base md:text-lg text-cream-white/55 max-w-2xl mx-auto mb-2 leading-relaxed font-body font-medium">
          Ba gói trải nghiệm được thiết kế dành riêng cho từng đối tượng — từ những cặp đôi tìm kiếm sự lãng mạn riêng tư, đến nhiếp ảnh gia săn ảnh deep-sky hay hội bạn thân muốn một đêm bùng nổ dưới ngàn sao.
        </p>
        <a href="#packages" className="inline-flex flex-col items-center gap-2 text-cream-white/45 no-underline group mt-8">
          <span className="text-[12px] tracking-[0.25em] font-semibold uppercase font-body group-hover:text-cream-white/70 transition-colors duration-300">Khám phá gói</span>
          <Icon icon="tabler:chevrons-down" className="text-xl leading-none group-hover:translate-y-0.5 transition-transform duration-300 text-gold-primary/50" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-deep-navy to-transparent pointer-events-none" />
    </section>
  )
}

function ProductCard({ item }) {
  return (
    <Link to={`/products/${item.slug}`} className="group block no-underline h-full">
      <div className="relative rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-gold-primary/25 hover:shadow-[0_0_60px_-15px_rgba(201,151,58,0.15)] flex flex-col h-full">
        {/* Image preview */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img
            src={item.heroImage}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 30%, ${item.accentColor}15, transparent 70%)` }} />

          {/* Badge */}
          <div className="absolute top-4 left-4 md:top-5 md:left-5">
            <span className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-gold-primary uppercase font-body border border-gold-primary/30 rounded-full bg-black/50 backdrop-blur-sm">
              {item.badge}
            </span>
          </div>

          {/* Icon */}
          <div className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 rounded-full border border-gold-primary/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <Icon icon={item.icon} className="text-gold-primary/70 text-lg" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-b from-[#0a0e1a] to-[#080b14] px-5 py-4 md:p-5 flex flex-col flex-1">
          <h3 className="font-display-serif text-[clamp(1.1rem,2.5vw,1.4rem)] text-cream-white font-semibold leading-tight mb-0.5 group-hover:text-gold-primary/90 transition-colors duration-300">
            {item.name}
          </h3>
          <p className="font-display-serif text-[14px] text-gold-primary/70 italic font-medium mb-2">
            {item.tagline}
          </p>
          <p className="text-[12px] text-cream-white/40 font-body leading-relaxed line-clamp-2 mb-3">
            {item.sub}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {item.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-semibold tracking-[0.06em] text-cream-white/40 uppercase font-body">
                <Icon icon={h.icon} className="text-gold-primary/50 text-[9px]" />
                {h.label}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-3 flex items-center justify-between border-t border-white/5">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gold-primary/60 uppercase font-body group-hover:text-gold-primary/90 transition-colors duration-300">
              Xem chi tiết
            </span>
            <div className="w-7 h-7 rounded-full border border-gold-primary/20 flex items-center justify-center group-hover:bg-gold-primary/10 group-hover:border-gold-primary/40 transition-all duration-300">
              <Icon icon="tabler:arrow-right" className="text-gold-primary/60 text-xs group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function ComparisonBar() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[12px] overflow-hidden border border-gold-primary/10">
        {highlights.map((h) => (
          <div key={h.step} className="relative flex gap-4 p-5 md:p-6 lg:p-7 items-start" style={{ background: h.gradient }}>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <span className="text-[28px] md:text-[32px] font-bold leading-none text-white/[0.06] font-display-serif select-none">{h.step}</span>
              <Icon icon={h.icon} className="text-2xl md:text-3xl text-gold-primary" />
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[28px] md:text-[34px] font-bold text-gold-primary leading-none font-display-serif">{h.stat}</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-cream-white/30 uppercase font-body">{h.statLabel}</span>
              </div>
              <p className="text-sm md:text-[15px] text-cream-white font-medium leading-snug mb-0.5 font-body">{h.label}</p>
              <p className="text-[12px] md:text-[13px] text-cream-white/35 leading-relaxed font-body font-medium">{h.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <div className="relative min-h-screen">
      <Starfield opacity={0.5} />
      <div className="relative z-10">
        <Navbar />

        <HeroSection />

        {/* ── PACKAGES GRID ── */}
        <section id="packages" className="relative py-24 md:py-36 px-5 md:px-10 lg:px-16">
          <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section heading */}
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white tracking-normal font-semibold">
                Chọn Gói Trải Nghiệm
              </h2>
              <div className="flex items-center gap-3 mt-4 justify-center">
                <div className="h-px w-6 md:w-8 bg-cream-white/15" />
                <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
                <div className="h-px w-6 md:w-8 bg-cream-white/15" />
              </div>
            </div>

            {/* Card grid — 3 col desktop, 2 col tablet, 1 col mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>

            {/* Comparison bar */}
            <div className="mt-16 md:mt-24">
              <ComparisonBar />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-bg-deep-navy to-transparent pointer-events-none z-10" />
        </section>

        {/* ── CONTACT SECTION ── */}
        <section className="relative py-24 md:py-36 px-5 md:px-10 lg:px-16 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.06), transparent 70%)' }} />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-display-serif text-[clamp(1.6rem,4vw,2.8rem)] text-cream-white font-semibold mb-4 leading-tight">
              Chưa Tìm Được Gói Phù Hợp?
            </h2>
            <p className="text-base md:text-lg text-cream-white/50 max-w-xl mx-auto mb-8 leading-relaxed font-body font-medium">
              Liên hệ với chúng tôi để được tư vấn lộ trình thiên văn theo nhóm riêng hoặc yêu cầu đặc biệt.
            </p>
            <button className="px-8 py-4 rounded-full border border-gold-primary/40 text-gold-primary text-[14px] font-semibold uppercase tracking-[0.18em] hover:bg-gold-primary/10 hover:border-gold-primary/60 active:scale-[0.97] transition-all duration-200 cursor-pointer font-body min-h-[44px]">
              Liên hệ tư vấn
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
