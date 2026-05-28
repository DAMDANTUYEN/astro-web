import { Icon } from '@iconify/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Starfield from '../components/ui/Starfield'

const founders = [
  { name: 'Đan Tuyên', role: 'Technical & Site Lead', img: '/aboutus/tuyen.jpg' },
  { name: 'Minh Nhật', role: 'Technical & Site Lead', img: '/aboutus/nhat.jpg' },
  { name: 'Nguyệt Như', role: 'Experience & Content Lead', img: '/aboutus/nhu.jpg' },
  { name: 'Thủy Tiên', role: 'Experience & Content Lead', img: '/aboutus/tien.jpg' },
  { name: 'Khánh Linh', role: 'Experience & Content Lead', img: '/aboutus/linh.jpg' },
]

const coreValues = [
  {
    key: 'TĨNH',
    label: 'Serenity',
    desc: 'Trân trọng và bảo vệ sự riêng tư, tĩnh lặng của khách hàng. Từ chối mọi sự náo nhiệt đại trà để giữ gìn không gian hướng nội khép kín.',
    icon: 'tabler:moon',
  },
  {
    key: 'THỰC',
    label: 'Authenticity',
    desc: 'Tôn trọng tính bản địa chân thực. Giá trị trải nghiệm được bảo chứng bằng chất lượng bầu trời thực tế kết hợp với kho tàng văn hóa sống động của người Mơ Nâm và Xơ Đăng.',
    icon: 'tabler:leaf',
  },
  {
    key: 'TINH',
    label: 'Premium',
    desc: 'Đẳng cấp trong từng chi tiết chạm. Từ trang thiết bị quang học thông minh hiện đại cho đến các dịch vụ cá nhân hóa đều phải tương xứng với kỳ vọng thẩm mỹ cao nhất của du khách.',
    icon: 'tabler:diamond',
  },
  {
    key: 'TÂM',
    label: 'Symbiosis',
    desc: 'Phát triển hài hòa và đồng hành cùng tự nhiên. Mỗi tour du lịch được vận hành với trách nhiệm bảo vệ môi trường đêm và tôn trọng nhịp sống yên bình tại các bản làng.',
    icon: 'tabler:heart',
  },
]

const visionMissions = [
  {
    icon: 'tabler:heart-handshake',
    title: 'Deep Healing',
    desc: 'Dùng bóng tối nguyên sơ và sự tĩnh lặng tuyệt đối làm công cụ chữa lành, giúp du khách giải tỏa hoàn toàn áp lực kỹ thuật số để tái tạo năng lượng nội tâm.',
  },
  {
    icon: 'tabler:bulb',
    title: 'Cosmic Knowledge',
    desc: 'Nuôi dưỡng niềm đam mê khoa học thiên văn và lưu giữ hệ thống tri thức dân gian về bầu trời đêm của người bản địa thông qua các hoạt động giáo dục tinh tế.',
  },
  {
    icon: 'tabler:leaf',
    title: 'Dark Sky Preservation',
    desc: 'Tiên phong thúc đẩy giảm thiểu ô nhiễm ánh sáng, tuân thủ nghiêm ngặt các tiêu chuẩn môi trường để gìn giữ bầu trời sạch cho các thế hệ tương lai.',
  },
  {
    icon: 'tabler:users',
    title: 'Cộng Đồng',
    desc: 'Chuyển hóa đồng bào dân tộc thiểu số từ những người làm nông nghiệp thuần túy trở thành các Astro-guide chuyên nghiệp, giúp phát triển kinh tế địa phương bền vững.',
  },
]

export default function AboutUs() {
  return (
    <div className="relative min-h-screen">
      <Starfield opacity={0.4} />
      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=85" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep-navy/80 via-bg-deep-navy/40 to-bg-deep-navy" />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.06), transparent 60%)' }} />
          <div className="text-center px-6 max-w-4xl relative z-10">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-gold-primary/30" />
              <span className="text-gold-primary/60 text-[13px] tracking-[0.2em] font-semibold uppercase font-body">Về Chúng Tôi</span>
              <span className="block w-8 h-px bg-gold-primary/30" />
            </div>
            <h1 className="font-display-serif text-[clamp(1rem,3.5vw,2rem)] text-cream-white font-semibold leading-[1.2] mb-5 whitespace-nowrap">
              <span className="block">Tắt Đèn Thành Phố</span>
              <span className="text-gold-primary block ml-6 md:ml-12" style={{ textShadow: '0 0 24px rgba(201,151,58,0.35), 0 0 60px rgba(201,151,58,0.12)' }}>Bật Sáng Ngàn Sao</span>
            </h1>
            <p className="text-base md:text-lg text-cream-white/45 max-w-2xl mx-auto leading-relaxed font-body font-medium">
              Chúng tôi ra đời để kiến tạo một không gian tách biệt hoàn toàn với những ồn ào đô thị — nơi lần đầu tiên tại Việt Nam, sự nguyên sơ của thiên nhiên bóng đêm được trân trọng như một liệu pháp phục hồi tâm hồn.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-deep-navy to-transparent pointer-events-none" />
        </section>

        {/* ── MANIFESTO ── */}
        <section className="relative px-5 md:px-10 lg:px-16 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <Icon icon="tabler:quote" className="text-gold-primary/20 text-5xl mb-6" />
            <blockquote className="font-display-serif text-[clamp(1.4rem,3.5vw,2.2rem)] text-cream-white font-semibold leading-snug mb-8">
              "Thành phố dùng ánh sáng đèn che đi vũ trụ.<br />
              Chúng tôi tắt đèn thành phố để trả lại cho bạn bầu trời nguyên sơ."
            </blockquote>
            <div className="max-w-3xl mx-auto space-y-5 text-left">
              <p className="text-[15px] md:text-[16px] text-cream-white/55 leading-relaxed font-body">
                Tại <strong className="text-cream-white/80">ASTROLUXE</strong>, chúng tôi không bán một tour ngắm cảnh đại trà: Chúng tôi trao cho bạn không gian tĩnh lặng tuyệt đối để đối diện với nội tâm và thắt chặt những kết nối sâu sắc.
              </p>
              <p className="text-[15px] md:text-[16px] text-cream-white/55 leading-relaxed font-body">
                Chúng tôi không kể những thông số khô khan: Chúng tôi dẫn dắt bạn bước vào hành trình tri thức, kết hợp khoa học thiên văn hiện đại với thế giới sử thi vũ trụ quan dân tộc học độc bản của đại ngàn Tây Nguyên.
              </p>
              <p className="text-[15px] md:text-[16px] text-cream-white/55 leading-relaxed font-body">
                Chúng tôi không chỉ làm du lịch: Chúng tôi thương mại hóa bóng tối một cách bền vững để bảo tồn trọn vẹn giá trị sinh thái đêm và hỗ trợ sinh kế cho cộng đồng bản địa.
              </p>
              <p className="font-display-serif text-[clamp(1.1rem,2.5vw,1.5rem)] text-gold-primary/70 italic font-medium pt-4 text-center">
                Ở đây, bạn không chỉ nhìn ngắm những vì sao. Bạn đang để vũ trụ ôm lấy tâm hồn mình.
              </p>
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="relative px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white font-semibold">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <p className="font-display-serif text-[clamp(1rem,2vw,1.3rem)] text-gold-primary/60 italic font-medium mt-2">
                Hành trình đi tìm bóng tối nguyên sơ để chữa lành những tổn thương đô thị
              </p>
              <div className="flex items-center gap-3 mt-4 justify-center">
                <div className="h-px w-8 bg-cream-white/15" />
                <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
                <div className="h-px w-8 bg-cream-white/15" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* 1. The Pain */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="relative" style={{ aspectRatio: '16/10' }}>
                  <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gold-primary/80 uppercase font-body bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">01</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display-serif text-xl text-cream-white font-semibold mb-1">Khởi Nguồn: Nỗi Đau Của Ánh Sáng</h3>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-gold-primary/60 uppercase font-body mb-3">The Pain</p>
                  <p className="text-[14px] text-cream-white/50 leading-relaxed font-body">
                    <strong className="text-cream-white/70">83%</strong> dân số thế giới đang sống dưới những bầu trời bị ô nhiễm ánh sáng. Cư dân tại các siêu đô thị lớn đang hằng ngày đối mặt với hội chứng burnout và sự ngột ngạt vì công nghệ. Chúng ta có tất cả mọi ánh sáng nhân tạo, nhưng lại đánh mất đi ánh sáng nguyên sơ nhất: dải Ngân Hà bạt ngàn giúp xoa dịu tinh thần.
                  </p>
                </div>
              </div>

              {/* 2. The Solution */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="relative" style={{ aspectRatio: '16/10' }}>
                  <img src="https://i.pinimg.com/1200x/a8/cf/f4/a8cff40d5b27b26704052bc5a6a04a21.jpg" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gold-primary/80 uppercase font-body bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">02</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display-serif text-xl text-cream-white font-semibold mb-1">Giải Pháp: Khát Vọng "Tắt Đèn"</h3>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-gold-primary/60 uppercase font-body mb-3">The Solution</p>
                  <p className="text-[14px] text-cream-white/50 leading-relaxed font-body">
                    Từ trăn trở về một liệu pháp chữa lành tự nhiên, ASTROLUXE đã được khai sinh tại <strong className="text-cream-white/70">Măng Đen</strong> — vùng đất sở hữu độ cao lý tưởng 1.200m, nơi được bảo vệ hoàn hảo khỏi vòm ánh sáng đô thị và đáp ứng các tiêu chuẩn khắt khe nhất về độ tối bầu trời của Hiệp hội Bầu trời Đêm Tối Quốc tế (IDA).
                  </p>
                </div>
              </div>

              {/* 3. The Experience */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="relative" style={{ aspectRatio: '16/10' }}>
                  <img src="https://i.pinimg.com/736x/90/2c/a2/902ca2734bdc0ba684889eb6eb058a7e.jpg" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gold-primary/80 uppercase font-body bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">03</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display-serif text-xl text-cream-white font-semibold mb-1">Trải Nghiệm: Chiều Sâu Của Đêm</h3>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-gold-primary/60 uppercase font-body mb-3">The Experience</p>
                  <p className="text-[14px] text-cream-white/50 leading-relaxed font-body">
                    Chúng tôi chuẩn hóa mọi quy trình theo mô hình mật độ thấp (chỉ 20–40 khách/đêm) để đảm bảo sự riêng tư tuyệt đối. Hệ thống lều vòm kiến trúc trong suốt cao cấp kết hợp nghệ thuật kể chuyện lồng ghép sử thi của những "đại sứ bóng đêm" — đội ngũ Astro-guide là người đồng bào Mơ Nâm, Xơ Đăng bản địa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="relative px-5 md:px-10 lg:px-16 py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.05), transparent 60%)' }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white font-semibold">
                Tầm Nhìn & Sứ Mệnh
              </h2>
              <div className="flex items-center gap-3 mt-4 justify-center">
                <div className="h-px w-8 bg-cream-white/15" />
                <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
                <div className="h-px w-8 bg-cream-white/15" />
              </div>
            </div>

            {/* Vision */}
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <Icon icon="tabler:eye" className="text-gold-primary/30 text-3xl mx-auto mb-4" />
              <h3 className="font-display-serif text-[clamp(1.3rem,3vw,1.8rem)] text-cream-white font-semibold mb-4">
                Tầm Nhìn
              </h3>
              <p className="text-[15px] md:text-[17px] text-cream-white/60 leading-relaxed font-body italic max-w-2xl mx-auto">
                "Trở thành biểu tượng của mô hình <strong className="text-cream-white/80">Du lịch sinh thái đêm</strong> và <strong className="text-cream-white/80">Thiên văn cao cấp</strong> tại Việt Nam — nơi định vị lại giá trị của tài nguyên bóng tối sạch trên bản đồ du lịch đặc thù quốc tế."
              </p>
            </div>

            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {visionMissions.map((m, i) => (
                <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 md:p-6 text-center hover:border-gold-primary/15 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon icon={m.icon} className="text-gold-primary/70 text-xl" />
                  </div>
                  <h4 className="font-display-serif text-base text-cream-white font-semibold mb-2">{m.title}</h4>
                  <p className="text-[13px] text-cream-white/45 leading-relaxed font-body">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="relative px-5 md:px-10 lg:px-16 py-24 md:py-36">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white font-semibold">
                Giá Trị Cốt Lõi
              </h2>
              <p className="text-[14px] text-cream-white/40 font-body mt-2">
                Kim chỉ nam tôn nghiêm trong mọi hành trình vận hành của ASTROLUXE
              </p>
              <div className="flex items-center gap-3 mt-4 justify-center">
                <div className="h-px w-8 bg-cream-white/15" />
                <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
                <div className="h-px w-8 bg-cream-white/15" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((v, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-8 text-center hover:border-gold-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full border border-gold-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:border-gold-primary/40 group-hover:bg-gold-primary/[0.06] transition-all duration-300">
                    <Icon icon={v.icon} className="text-gold-primary text-2xl" />
                  </div>
                  <h3 className="font-display-serif text-[clamp(1.8rem,4vw,2.5rem)] text-gold-primary font-bold leading-none mb-1">
                    {v.key}
                  </h3>
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-cream-white/30 uppercase font-body mb-3">
                    {v.label}
                  </p>
                  <p className="text-[13px] text-cream-white/45 leading-relaxed font-body">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="relative px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white font-semibold">
                Đội Ngũ Kiến Tạo
              </h2>
              <p className="font-display-serif text-[clamp(0.9rem,2vw,1.2rem)] text-gold-primary/60 italic font-medium mt-2">
                Sự giao thoa giữa tư duy Quản trị chiến lược và Tâm hồn chữa lành
              </p>
              <div className="flex items-center gap-3 mt-4 justify-center">
                <div className="h-px w-8 bg-cream-white/15" />
                <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
                <div className="h-px w-8 bg-cream-white/15" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {founders.map((f, i) => (
                <div key={i} className="text-center group">
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 mb-4 aspect-[3/4]">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[10px] text-gold-primary/80 font-semibold font-body truncate">{f.role}</p>
                    </div>
                  </div>
                  <h4 className="font-display-serif text-[15px] text-cream-white font-semibold">{f.name}</h4>
                </div>
              ))}
            </div>

            {/* Team description */}
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <Icon icon="tabler:sparkles" className="text-gold-primary/30 text-2xl mx-auto mb-4" />
              <p className="text-[14px] text-cream-white/45 leading-relaxed font-body">
                <strong className="text-cream-white/70">Khối Vận hành & Hạ tầng Kỹ thuật (The Astro & Ops Brains):</strong> Đảm nhiệm việc khảo sát chỉ số NSB, tích hợp hệ thống API dữ liệu thiên văn và quản trị hạ tầng thiết bị quang học đạt chuẩn IDA tại thực địa.
              </p>
              <p className="text-[14px] text-cream-white/45 leading-relaxed font-body mt-4">
                <strong className="text-cream-white/70">Khối Trải nghiệm & Chữa lành (The Healing Souls):</strong> Thiết kế quy trình trải nghiệm hướng nội, nghiên cứu lồng ghép sử thi Tây Nguyên vào kỹ thuật Storytelling và chuẩn hóa tài liệu đào tạo đội ngũ Astro-guide bản địa.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-2xl border border-gold-primary/15 bg-gold-primary/[0.04] p-8 md:p-12">
              <Icon icon="tabler:mail-star" className="text-gold-primary/40 text-3xl mx-auto mb-4" />
              <h2 className="font-display-serif text-[clamp(1.4rem,3vw,2rem)] text-cream-white font-semibold mb-3">
                Hãy Cùng Chúng Tôi Tắt Đèn
              </h2>
              <p className="text-[14px] text-cream-white/45 leading-relaxed font-body max-w-xl mx-auto mb-6">
                Bạn muốn trở thành một phần của hành trình đưa bóng tối nguyên sơ trở lại? Liên hệ với chúng tôi để cùng kiến tạo tương lai du lịch bền vững.
              </p>
              <button className="px-8 py-3.5 rounded-full border border-gold-primary/40 text-gold-primary text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-gold-primary/10 hover:border-gold-primary/60 active:scale-[0.97] transition-all duration-200 cursor-pointer font-body">
                Liên hệ với chúng tôi
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
