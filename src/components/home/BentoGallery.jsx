import { Icon } from '@iconify/react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
    alt: 'Bubble tent under stars',
    span: 'md:col-span-2 md:row-span-2',
    label: 'Trải nghiệm độc bản',
    title: 'Phòng Ngủ Dưới Ngàn Sao',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Healing ceremony',
    span: 'md:col-span-2',
    overlay: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    alt: 'Star trails',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80',
    alt: 'Telescope',
    span: '',
  },
]

export default function BentoGallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-36 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white tracking-normal font-semibold">
            Khoảnh Khắc Đêm Siêu Thực
          </h2>
          <div className="flex items-center gap-3 mt-5 md:mt-6 justify-center">
            <div className="h-px w-6 md:w-8 bg-cream-white/15" />
            <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
            <div className="h-px w-6 md:w-8 bg-cream-white/15" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[300px] gap-4 md:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative overflow-hidden rounded-[8px] bg-black/60 border border-gold-primary/15 group`}
            >
              <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
              <img
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
              />
              {img.label && (
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10">
                  <span className="text-[13px] tracking-[0.18em] text-gold-primary/60 font-semibold uppercase font-body">
                    {img.label}
                  </span>
                  <h4 className="text-base md:text-xl text-cream-white mt-0.5 font-display-serif font-semibold">{img.title}</h4>
                </div>
              )}
              {img.overlay && (
                <div className="absolute inset-0 bg-gold-primary/[0.03] group-hover:bg-transparent transition-colors duration-500 z-[2]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
