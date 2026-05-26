export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          alt=""
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-sea-void/80 via-deep-sea-void/30 to-deep-sea-void/90" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative text-center px-6 max-w-3xl pt-24 pb-20">
        <div className="mb-5 flex items-center justify-center gap-3 text-nebular-glow/50 text-[11px] tracking-[0.3em] font-semibold uppercase">
          <span className="block w-6 h-px bg-nebular-glow/25" />
          Astro-Glamping & Healing
          <span className="block w-6 h-px bg-nebular-glow/25" />
        </div>

        <h1 className="font-display-vast text-[clamp(2rem,7vw,4rem)] text-white mb-5 leading-[1.15] tracking-tight">
          TẮT ĐÈN THÀNH PHỐ<br />
          <span className="text-nebular-glow/90">BẬT SÁNG NGÀN SAO</span>
        </h1>

        <p className="text-sm md:text-base text-white/45 max-w-md mx-auto mb-16 leading-relaxed">
          Hành trình Astro-Glamping &amp; Chữa lành chuyên sâu đầu tiên tại Việt Nam.
        </p>

        <a
          href="#experiences"
          className="inline-flex flex-col items-center gap-2 text-white/25 no-underline group"
        >
          <span className="text-[10px] tracking-[0.3em] font-semibold uppercase group-hover:text-white/50 transition-colors duration-300">
            Khám phá
          </span>
          <span className="material-symbols-outlined text-xl leading-none group-hover:translate-y-0.5 transition-transform duration-300">
            keyboard_double_arrow_down
          </span>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-sea-void to-transparent pointer-events-none" />
    </section>
  )
}
