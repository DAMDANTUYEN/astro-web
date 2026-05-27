import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-gold-primary/10 py-14 md:py-18 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
          <div className="max-w-xs w-full md:w-auto">
            <Logo size={32} />
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-cream-white/30 leading-relaxed font-body font-normal">
              Hành trình Astro-Glamping &amp; Chữa lành chuyên sâu đầu tiên tại Việt Nam. Tìm lại sự cân bằng giữa lòng vũ trụ tĩnh lặng.
            </p>
          </div>

          <div className="flex gap-10 md:gap-12 w-full md:w-auto">
            <div className="flex-1 md:flex-none">
              <h4 className="text-[13px] font-medium text-gold-primary/50 uppercase tracking-[0.18em] mb-4 font-body">Khám phá</h4>
              <div className="flex flex-col gap-2 md:gap-2.5">
                <a href="/#about" className="text-xs md:text-sm text-cream-white/35 hover:text-gold-primary/70 transition-colors font-body font-normal">Về Chúng Tôi</a>
                <a href="/calendar" className="text-xs md:text-sm text-cream-white/35 hover:text-gold-primary/70 transition-colors font-body font-normal">Lịch Thiên Văn 2026</a>
                <a href="/#experiences" className="text-xs md:text-sm text-cream-white/35 hover:text-gold-primary/70 transition-colors font-body font-normal">Hành Trình</a>
                <a href="/#gallery" className="text-xs md:text-sm text-cream-white/35 hover:text-gold-primary/70 transition-colors font-body font-normal">Thư Viện</a>
              </div>
            </div>
            <div className="flex-1 md:flex-none">
              <h4 className="text-[13px] font-medium text-gold-primary/50 uppercase tracking-[0.18em] mb-4 font-body">Liên hệ</h4>
              <div className="flex flex-col gap-2 md:gap-2.5 text-xs md:text-sm text-cream-white/35 font-body font-normal">
                <span>Mũi Dinh, Ninh Thuận</span>
                <a href="mailto:info@demngansao.vn" className="hover:text-gold-primary/70 transition-colors">info@demngansao.vn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14 pt-6 md:pt-7 border-t border-cream-white/5 text-center text-[13px] md:text-[14px] text-cream-white/15 font-body font-medium">
          &copy; 2026 ASTROLUXE. The Great Silence Awaits.
        </div>
      </div>
    </footer>
  )
}