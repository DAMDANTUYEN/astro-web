import { useCallback, useMemo } from 'react'
import { Icon } from '@iconify/react'

const descriptions = [
  '"Tại thành phố, ánh sáng nhân tạo che khuất 95% vẻ đẹp của vũ trụ."',
  '"Khi ánh đèn lùi xa, dải Ngân Hà bắt đầu lộ diện như một dải lụa mờ ảo."',
  '"Tại Mũi Dinh, bạn sẽ thấy bóng mình đổ dưới ánh sáng của chính những vì sao."',
]

export default function BortleSlider({ value = 0, onChange }) {
  const t = value / 100

  const glowColor = useMemo(() => {
    const intensity = Math.max(0, 0.12 - t * 0.12)
    return `rgba(201,151,58,${intensity})`
  }, [t])

  const handleInput = useCallback(
    (e) => {
      onChange(Number(e.target.value))
    },
    [onChange]
  )

  const bortleLevel = useMemo(() => {
    if (value < 12.5) return { level: 9, name: 'Trung tâm thành phố', color: '#f03e3e' }
    if (value < 25) return { level: 8, name: 'Nội thành', color: '#e64980' }
    if (value < 37.5) return { level: 7, name: 'Vùng ven', color: '#f76707' }
    if (value < 50) return { level: 6, name: 'Ngoại ô sáng', color: '#f59f00' }
    if (value < 62.5) return { level: 5, name: 'Ngoại ô', color: '#fcc419' }
    if (value < 75) return { level: 4, name: 'Nông thôn', color: '#74c0fc' }
    if (value < 87.5) return { level: 3, name: 'Trời tối', color: '#4dabf7' }
    if (value < 96) return { level: 2, name: 'Trời rất tối', color: '#3b5bdb' }
    return { level: 1, name: 'Trời đen tuyệt đối', color: '#1a237e' }
  }, [value])

  return (
    <section id="bortle" className="relative py-24 md:py-36 px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 30%, ${glowColor}, transparent 60%)` }} />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[11px] tracking-[0.2em] text-gold-primary/60 font-semibold uppercase font-body">
            Trải nghiệm bầu trời
          </span>
          <h2 className="font-display-serif text-[clamp(1.8rem,5vw,3.2rem)] text-cream-white tracking-normal font-semibold mt-2">
            Thang Đo Bortle
          </h2>
          <div className="flex items-center gap-3 mt-4 justify-center">
            <div className="h-px w-8 bg-cream-white/15" />
            <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
            <div className="h-px w-8 bg-cream-white/15" />
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-white/5 rounded-2xl p-7 md:p-11">
            <div className="text-center mb-6">
              <span
                className="inline-block text-[40px] md:text-[48px] font-bold font-display-serif leading-none mb-1"
                style={{ color: bortleLevel.color }}
              >
                {bortleLevel.level}
              </span>
              <p className="text-[13px] tracking-[0.15em] font-semibold uppercase font-body" style={{ color: bortleLevel.color }}>
                {bortleLevel.name}
              </p>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onInput={handleInput}
              className="w-full appearance-none bg-transparent cursor-pointer touch-pan-y"
              style={{ accentColor: bortleLevel.color }}
            />

            <div className="mt-3 flex justify-between text-[11px] text-cream-white/25 font-body font-medium">
              <span>Ô nhiễm nặng</span>
              <span>Bortle 9</span>
              <span>Bortle 4</span>
              <span>Bortle 1</span>
              <span>Đen tuyệt đối</span>
            </div>

            <p className="mt-8 md:mt-10 text-center text-sm md:text-[15px] text-cream-white/50 italic leading-relaxed font-body font-medium">
              {descriptions[value < 25 ? 0 : value < 75 ? 1 : 2]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
