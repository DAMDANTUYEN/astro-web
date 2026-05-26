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
    <section id="gallery" className="relative py-28 md:py-36 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-vast text-2xl md:text-4xl text-white tracking-wide">
            Khoảnh Khắc Đêm Siêu Thực
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="block w-6 h-px bg-white/10" />
            <span className="block w-1.5 h-1.5 rounded-full bg-nebular-glow/40" />
            <span className="block w-6 h-px bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] group`}
            >
              <img
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
              />
              {img.label && (
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-deep-sea-void via-deep-sea-void/60 to-transparent">
                  <span className="text-[10px] tracking-[0.15em] text-nebular-glow/70 font-semibold uppercase">
                    {img.label}
                  </span>
                  <h4 className="text-lg text-white mt-0.5">{img.title}</h4>
                </div>
              )}
              {img.overlay && (
                <div className="absolute inset-0 bg-nebular-glow/[0.03] group-hover:bg-transparent transition-colors duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-sea-void to-transparent pointer-events-none" />
    </section>
  )
}
