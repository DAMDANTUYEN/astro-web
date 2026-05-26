import { useRef, useCallback } from 'react'

const descriptions = [
  '"Tại thành phố, ánh sáng nhân tạo che khuất 95% vẻ đẹp của vũ trụ."',
  '"Khi ánh đèn lùi xa, dải Ngân Hà bắt đầu lộ diện như một dải lụa mờ ảo."',
  '"Tại Mũi Dinh, bạn sẽ thấy bóng mình đổ dưới ánh sáng của chính những vì sao."',
]

export default function BortleSlider({ value = 0, onChange }) {
  const sectionRef = useRef(null)

  const handleInput = useCallback(
    (e) => {
      const val = Number(e.target.value)
      onChange(val)
      if (sectionRef.current) {
        const d = 12 - val * 0.12
        sectionRef.current.style.backgroundColor = `rgb(${d + 2}, ${d + 6}, ${d + 18})`
      }
    },
    [onChange]
  )

  const label = () => {
    if (value < 25) return 'Bortle 9'
    if (value < 50) return 'Bortle 6'
    if (value < 75) return 'Bortle 4'
    return 'Bortle 2'
  }

  return (
    <section
      ref={sectionRef}
      id="bortle"
      className="relative py-28 md:py-36 px-6 md:px-10 lg:px-16 transition-colors duration-700 overflow-hidden"
      style={{ backgroundColor: '#0e1628' }}
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-deep-sea-void to-transparent pointer-events-none z-10" />

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: value / 100 * 0.12,
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, #fff, transparent),
            radial-gradient(1px 1px at 30% 50%, #fff, transparent),
            radial-gradient(2px 2px at 55% 30%, #fff, transparent),
            radial-gradient(1px 1px at 70% 70%, #fff, transparent),
            radial-gradient(1px 1px at 85% 15%, #fff, transparent),
            radial-gradient(2px 2px at 15% 80%, #fff, transparent),
            radial-gradient(1px 1px at 45% 90%, #fff, transparent),
            radial-gradient(1px 1px at 90% 55%, #fff, transparent)
          `,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display-vast text-2xl md:text-4xl text-white tracking-wide">
            Thang Đo Bortle
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="block w-6 h-px bg-white/10" />
            <span className="block w-1.5 h-1.5 rounded-full bg-nebular-glow/40" />
            <span className="block w-6 h-px bg-white/10" />
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10">
            <div className="flex items-center justify-between mb-6 text-center">
              <div>
                <div className="text-[10px] tracking-[0.15em] text-white/25 font-semibold uppercase">Thành phố</div>
                <div className="text-sm font-semibold text-red-400/70 mt-0.5">Bortle 9</div>
              </div>
              <div className="text-white/15 text-sm">→</div>
              <div>
                <div className="text-[10px] tracking-[0.15em] text-white/25 font-semibold uppercase">Mũi Dinh</div>
                <div className="text-sm font-semibold text-nebular-glow/70 mt-0.5">Bortle 2</div>
              </div>
            </div>

            <div className="text-center text-xs text-white/40 font-semibold mb-4">{label()}</div>

            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onInput={handleInput}
              className="w-full appearance-none bg-transparent cursor-pointer"
            />

            <div className="mt-2 flex justify-between text-[9px] text-white/15">
              <span>Ô nhiễm cao</span>
              <span>Trời tối lý tưởng</span>
            </div>

            <p className="mt-8 text-center text-sm text-white/35 italic leading-relaxed">
              {descriptions[value < 25 ? 0 : value < 75 ? 1 : 2]}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-sea-void to-transparent pointer-events-none z-10" />
    </section>
  )
}
