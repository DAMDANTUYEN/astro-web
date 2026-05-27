import { Icon } from '@iconify/react'

const experiences = [
  {
    icon: 'tabler:telescope',
    title: 'Astro',
    subtitle: 'Thiên văn học',
    desc: 'Khám phá chiều sâu của dải Ngân Hà qua hệ thống kính viễn vọng chuyên dụng. Giải mã những chòm sao xa xôi cùng chuyên gia thiên văn.',
    cta: 'Xem lịch sao',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    accent: '#4dabf7',
  },
  {
    icon: 'tabler:compass',
    title: 'Glamping',
    subtitle: 'Cắm trại cao cấp',
    desc: 'Nghỉ dưỡng trong lều Bubble xuyên thấu giữa sa mạc cát Mũi Dinh. Tiện nghi 5 sao hòa quyện trọn vẹn vào thiên nhiên hoang sơ.',
    cta: 'Khám phá lều',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    accent: '#8BC48A',
  },
  {
    icon: 'tabler:moon',
    title: 'Healing',
    subtitle: 'Chữa lành',
    desc: 'Liệu pháp âm thanh với chuông xoay Tây Tạng và thiền định dưới bầu trời sao. Kết nối lại với bản ngã trong sự tĩnh lặng tuyệt đối.',
    cta: 'Hành trình tâm trí',
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
    accent: '#c084fc',
  },
]

export default function ExperienceCards() {
  return (
    <section id="experiences" className="relative py-24 md:py-36 px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[11px] tracking-[0.2em] text-gold-primary/60 font-semibold uppercase font-body">
            Ba trụ cột
          </span>
          <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white tracking-normal font-semibold mt-2">
            Trải Nghiệm
          </h2>
          <div className="flex items-center gap-3 mt-4 justify-center">
            <div className="h-px w-8 bg-cream-white/15" />
            <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
            <div className="h-px w-8 bg-cream-white/15" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-gold-primary/20 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="absolute inset-0 -z-10">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />
                <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.accent}15, transparent 60%)` }} />
              </div>

              <div className="relative flex flex-col flex-1 p-6 md:p-8 lg:p-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-5 shrink-0 border border-white/10 backdrop-blur-sm bg-white/[0.06]">
                  <Icon icon={item.icon} className="text-gold-primary text-2xl md:text-3xl" />
                </div>

                <div className="w-10 h-px bg-gold-primary/30 mb-4" />

                <span className="text-[11px] tracking-[0.18em] text-gold-primary/60 font-medium uppercase font-body shrink-0">
                  {item.subtitle}
                </span>

                <h3 className="font-display-serif text-xl md:text-2xl text-cream-white mt-1 mb-3 shrink-0 font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm md:text-[14px] text-cream-white/50 leading-relaxed font-body font-medium grow">
                  {item.desc}
                </p>

                <div className="mt-5 md:mt-6 inline-flex items-center gap-2 text-gold-primary/70 text-[12px] font-semibold tracking-[0.18em] uppercase shrink-0 group/link font-body pt-4 border-t border-white/5">
                  {item.cta}
                  <Icon icon="tabler:arrow-right" className="text-sm transition-transform duration-300 group-hover/link:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
