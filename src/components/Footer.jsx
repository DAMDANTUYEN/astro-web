import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-14 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <Logo size={30} />
            <p className="mt-4 text-sm text-white/30 leading-relaxed">
              Hành trình Astro-Glamping &amp; Chữa lành chuyên sâu đầu tiên tại Việt Nam. Tìm lại sự cân bằng giữa lòng vũ trụ tĩnh lặng.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-[10px] font-semibold text-white/20 uppercase tracking-widest mb-4">Khám phá</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#" className="text-sm text-white/40 hover:text-nebular-glow/70 transition-colors">Về Chúng Tôi</a>
                <a href="#" className="text-sm text-white/40 hover:text-nebular-glow/70 transition-colors">Lịch Thiên Văn 2026</a>
                <a href="#" className="text-sm text-white/40 hover:text-nebular-glow/70 transition-colors">Hành Trình</a>
                <a href="#" className="text-sm text-white/40 hover:text-nebular-glow/70 transition-colors">Thư Viện</a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold text-white/20 uppercase tracking-widest mb-4">Liên hệ</h4>
              <div className="flex flex-col gap-2.5 text-sm text-white/40">
                <span>Mũi Dinh, Ninh Thuận</span>
                <a href="mailto:info@demngansao.vn" className="hover:text-nebular-glow/70 transition-colors">info@demngansao.vn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center text-[11px] text-white/15">
          &copy; 2026 Đêm Ngàn Sao. The Great Silence Awaits.
        </div>
      </div>
    </footer>
  )
}
