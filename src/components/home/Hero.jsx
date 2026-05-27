import { Icon } from '@iconify/react'

export default function Hero({ pageBg }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="photo-frame w-full h-full rounded-none border-0" style={{ maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)' }}>
          <img
            alt=""
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.06), transparent 60%)'
      }} />

      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 pointer-events-none" style={{ background: `linear-gradient(to top, ${pageBg}, transparent)` }} />

      <div className="relative text-center px-6 max-w-4xl pt-28 pb-24 md:pt-32 md:pb-28 z-10">
        <div className="mb-4 md:mb-6 flex items-center justify-center gap-3">
          <span className="block w-6 md:w-8 h-px bg-gold-primary/30" />
          <span className="text-gold-primary/60 text-[14px] tracking-[0.2em] font-semibold uppercase font-body">
            Astro-Glamping & Healing
          </span>
          <span className="block w-6 md:w-8 h-px bg-gold-primary/30" />
        </div>

        <h1 className="font-display-serif text-[clamp(2.8rem,8vw,5.5rem)] text-cream-white mb-4 leading-[1.1] font-semibold">
          TẮT ĐÈN THÀNH PHỐ<br />
          <span className="text-gold-primary ml-6 md:ml-10 inline-block" style={{ textShadow: '0 0 24px rgba(201,151,58,0.35), 0 0 60px rgba(201,151,58,0.12)' }}>BẬT SÁNG NGÀN SAO</span>
        </h1>

        <p className="text-lg md:text-xl text-cream-white/60 max-w-xl mx-auto mb-4 leading-relaxed px-2 font-body font-medium">
          Hành trình Astro-Glamping & Chữa lành chuyên sâu đầu tiên tại Việt Nam.
        </p>

        <p className="font-script text-3xl md:text-4xl text-gold-primary mb-16 md:mb-20 whitespace-nowrap" style={{ textShadow: '0 0 24px rgba(201,151,58,0.35), 0 0 60px rgba(201,151,58,0.12)' }}>
          The Great Silence Awaits
        </p>

        <a
          href="#experiences"
          className="inline-flex flex-col items-center gap-2 text-cream-white/45 no-underline group"
        >
          <span className="text-[12px] tracking-[0.25em] font-semibold uppercase font-body group-hover:text-cream-white/70 transition-colors duration-300">
            Khám phá
          </span>
          <Icon icon="tabler:chevrons-down" className="text-xl leading-none group-hover:translate-y-0.5 transition-transform duration-300 text-gold-primary/50" />
        </a>
      </div>
    </section>
  )
}
