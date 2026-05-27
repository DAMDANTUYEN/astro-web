import { useParams, Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import products from '../data/products'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Starfield from '../components/ui/Starfield'

export default function ProductDetail() {
  const { slug } = useParams()
  const item = products.find((p) => p.slug === slug)

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5">
        <Navbar />
        <div className="text-center relative z-10 mt-32">
          <Icon icon="tabler:mood-sad" className="text-gold-primary/40 text-6xl mx-auto mb-4" />
          <h1 className="font-display-serif text-3xl text-cream-white mb-2">Không tìm thấy gói</h1>
          <p className="text-cream-white/50 mb-6 font-body">Gói trải nghiệm bạn tìm không tồn tại.</p>
          <Link to="/products" className="inline-block px-6 py-3 rounded-full border border-gold-primary/40 text-gold-primary text-sm font-semibold uppercase tracking-[0.18em] hover:bg-gold-primary/10 transition-all duration-200 font-body no-underline">
            Quay lại
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Starfield opacity={0.5} />
      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative w-full min-h-[85vh] md:min-h-screen flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={item.heroImage}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep-navy/50 via-bg-deep-navy/10 to-bg-deep-navy" />
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 60%, ${item.accentColor}18, transparent 70%)` }} />
          </div>

          {/* Back */}
          <div className="absolute top-24 md:top-28 left-5 md:left-10 lg:left-16 z-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-primary/20 text-gold-primary/70 hover:text-gold-primary hover:border-gold-primary/40 transition-all duration-300 group no-underline"
            >
              <Icon icon="tabler:arrow-left" className="text-base transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="text-[11px] tracking-[0.18em] font-semibold uppercase font-body">Tất cả gói</span>
            </Link>
          </div>

          <div className="w-full px-5 md:px-10 lg:px-16 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-gold-primary/40" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-gold-primary/80 uppercase font-body">{item.badge}</span>
                <span className="block w-8 h-px bg-gold-primary/40" />
              </div>
              <h1 className="font-display-serif text-[clamp(2.4rem,8vw,5.5rem)] text-white font-bold leading-none tracking-wide mb-2">
                {item.name}
              </h1>
              <p className="font-display-serif text-[clamp(1.2rem,3vw,2rem)] text-gold-primary italic font-medium mb-3">
                {item.tagline}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-12 h-px bg-white/20" />
                <span className="block w-1 h-1 rounded-full bg-gold-primary/60" />
                <span className="block w-12 h-px bg-white/20" />
              </div>
              <p className="text-[12px] font-semibold tracking-[0.22em] text-white/50 uppercase font-body max-w-xl">
                {item.sub}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-bg-deep-navy to-transparent pointer-events-none" />
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="relative px-5 md:px-10 lg:px-16 -mt-1">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#080b14]">
              {item.highlights.map((h, i) => (
                <div key={i} className={`flex items-start gap-4 p-5 md:p-6 lg:p-7 ${i < item.highlights.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''}`}>
                  <div className="w-10 h-10 rounded-full border border-gold-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon icon={h.icon} className="text-gold-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.12em] text-white/80 uppercase font-body mb-1">{h.label}</p>
                    <p className="text-[13px] text-white/35 leading-relaxed font-body">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES + POSTER ── */}
        <section className="relative py-24 md:py-32 px-5 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Features + Exclusives */}
              <div>
                <h2 className="font-display-serif text-[clamp(1.4rem,3vw,2rem)] text-cream-white font-semibold mb-8">
                  Điểm nổi bật
                </h2>
                <div className="space-y-6">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full border border-gold-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold-primary/60 text-[10px] font-bold">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="text-[14px] md:text-[15px] text-cream-white/55 leading-relaxed font-body">{f}</p>
                    </div>
                  ))}
                </div>

                {/* Exclusives */}
                <div className="mt-12">
                  <h2 className="font-display-serif text-[clamp(1.4rem,3vw,2rem)] text-cream-white font-semibold mb-8">
                    Đặc quyền
                  </h2>
                  <div className="space-y-8">
                    {item.exclusives.map((ex, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Icon icon={ex.icon} className="text-gold-primary/70 text-lg" />
                          <span className="text-[11px] font-bold tracking-[0.15em] text-white/60 uppercase font-body">{ex.label}</span>
                        </div>
                        <ul className="space-y-2">
                          {ex.items.map((it, j) => (
                            <li key={j} className="flex items-start gap-3 text-[14px] text-white/45 font-body leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary/40 mt-2 shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Poster */}
              <div className="lg:sticky lg:top-32 self-start">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(201,151,58,0.12)]">
                  <img
                    src={item.poster}
                    alt={`${item.name} poster`}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${item.accentColor}08, transparent 60%)` }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="relative px-5 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {item.gallery.map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '4/3' }}>
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GIFT ── */}
        <section className="relative py-24 md:py-32 px-5 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl border border-gold-primary/15 bg-gold-primary/[0.04] p-8 md:p-12 text-center">
              <Icon icon="tabler:gift" className="text-gold-primary/50 text-3xl mx-auto mb-4" />
              <h3 className="font-display-serif text-[clamp(1.1rem,2.5vw,1.6rem)] text-gold-primary/80 font-semibold mb-3">
                Quà tặng Fine-art
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/40 leading-relaxed font-body max-w-2xl mx-auto">
                {item.gift}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative pb-24 md:pb-32 px-5 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-display-serif text-[clamp(1.1rem,2.5vw,1.6rem)] text-gold-primary/50 italic font-medium mb-6">
              {item.footer}
            </p>
            <button className="px-10 py-4 rounded-full border border-gold-primary/40 text-gold-primary text-[14px] font-bold uppercase tracking-[0.22em] hover:bg-gold-primary/10 hover:border-gold-primary/70 active:scale-[0.97] transition-all duration-200 cursor-pointer font-body">
              Đặt ngay – {item.name}
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
