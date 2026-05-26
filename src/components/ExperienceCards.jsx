const experiences = [
  {
    icon: 'satellite',
    title: 'Astro',
    subtitle: 'Thiên văn học',
    desc: 'Khám phá chiều sâu của dải Ngân Hà qua hệ thống kính viễn vọng chuyên dụng. Giải mã những chòm sao xa xôi cùng chuyên gia thiên văn.',
    cta: 'Xem lịch sao',
  },
  {
    icon: 'travel_explore',
    title: 'Glamping',
    subtitle: 'Cắm trại cao cấp',
    desc: 'Nghỉ dưỡng trong lều Bubble xuyên thấu giữa sa mạc cát Mũi Dinh. Tiện nghi 5 sao hòa quyện trọn vẹn vào thiên nhiên hoang sơ.',
    cta: 'Khám phá lều',
  },
  {
    icon: 'self_improvement',
    title: 'Healing',
    subtitle: 'Chữa lành',
    desc: 'Liệu pháp âm thanh với chuông xoay Tây Tạng và thiền định dưới bầu trời sao. Kết nối lại với bản ngã trong sự tĩnh lặng tuyệt đối.',
    cta: 'Hành trình tâm trí',
  },
]

export default function ExperienceCards() {
  return (
    <section id="experiences" className="relative py-28 md:py-36 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-vast text-2xl md:text-4xl text-white tracking-wide">
            Ba Trụ Cột Trải Nghiệm
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="block w-6 h-px bg-white/10" />
            <span className="block w-1.5 h-1.5 rounded-full bg-nebular-glow/40" />
            <span className="block w-6 h-px bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-nebular-glow/15 cursor-pointer flex flex-col"
            >
              <div className="w-11 h-11 rounded-full bg-nebular-glow/[0.07] flex items-center justify-center mb-6 group-hover:bg-nebular-glow/[0.12] transition-colors shrink-0">
                <span className="material-symbols-outlined text-nebular-glow/70 text-xl leading-none">
                  {item.icon}
                </span>
              </div>

              <span className="text-[10px] tracking-[0.15em] text-white/30 font-semibold uppercase shrink-0">
                {item.subtitle}
              </span>

              <h3 className="font-display-vast text-xl md:text-2xl text-white mt-1.5 mb-4 shrink-0">
                {item.title}
              </h3>

              <p className="text-sm text-white/35 leading-relaxed grow">
                {item.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-1.5 text-nebular-glow/70 text-xs font-semibold tracking-wider uppercase shrink-0 group/link">
                {item.cta}
                <span className="material-symbols-outlined text-sm leading-none transition-transform duration-300 group-hover/link:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-sea-void to-transparent pointer-events-none" />
    </section>
  )
}
