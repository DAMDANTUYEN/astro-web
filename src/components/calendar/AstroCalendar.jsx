import { useState, useMemo, useEffect } from 'react'
import { Icon } from '@iconify/react'

const events2026 = [
  { date: '2026-01-03', name: 'Mưa sao băng Quadrantids', type: 'meteor', badge: 'Cực đại', desc: 'Đỉnh điểm ~120 sao/giờ. Quan sát lý tưởng sau nửa đêm về phía Đông Bắc.', icon: 'tabler:meteor' },
  { date: '2026-01-13', name: 'Trăng tròn Wolf Moon', type: 'moon', desc: 'Trăng tròn đầu năm — mọc lúc 18:24 tại chân trời Đông.', icon: 'tabler:moon' },
  { date: '2026-03-03', name: 'Nguyệt thực toàn phần', type: 'eclipse', badge: 'Hiếm gặp', desc: 'Quan sát được từ Việt Nam. Mặt Trăng Đỏ kéo dài ~64 phút. Tour đặc biệt tại Mũi Dinh.', icon: 'tabler:moon' },
  { date: '2026-03-08', name: 'Sao Thổ — Góc phương vị cực đại', type: 'planet', desc: 'Nhẫn Sao Thổ nghiêng 26°, đẹp nhất trong thập kỷ. Xem qua kính S50.', icon: 'tabler:planet' },
  { date: '2026-03-20', name: 'Xuân phân — Trăng mới', type: 'moon', desc: 'Bầu trời tối nhất năm, không có ánh trăng. Điều kiện lý tưởng quan sát Ngân hà.', icon: 'tabler:moon' },
  { date: '2026-08-12', name: 'Mưa sao băng Perseids', type: 'meteor', badge: 'Đỉnh điểm', desc: '~100 sao/giờ. Sự kiện được săn đón nhất năm. Tour đêm Perseids tại Mũi Dinh.', icon: 'tabler:meteor', featured: true },
  { date: '2026-08-27', name: 'Sao Mộc — Xung đối cực đại', type: 'special', desc: 'Sao Mộc to và sáng nhất năm, thấy rõ 4 vệ tinh Galilean qua kính.', icon: 'tabler:planet' },
  { date: '2026-11-17', name: 'Mưa sao băng Leonids', type: 'meteor', desc: '~15 sao/giờ, xuất hiện những quả cầu lửa (fireball) ấn tượng.', icon: 'tabler:meteor' },
  { date: '2026-11-28', name: 'Nhật thực vành khuyên', type: 'eclipse', badge: 'Hiếm', desc: 'Quan sát được một phần từ miền Nam Việt Nam. Mặt Trời hình nhẫn lửa.', icon: 'tabler:sun' },
  { date: '2026-12-13', name: 'Mưa sao băng Geminids', type: 'meteor', badge: 'Cực đại', desc: '~120 sao/giờ, đây là mưa sao băng dày đặc nhất năm, cả trước nửa đêm.', icon: 'tabler:meteor' },
]

const TYPE_CONFIG = {
  meteor: { color: '#c9973a', label: 'Mưa sao băng' },
  eclipse: { color: '#e8c79a', label: 'Nhật/Nguyệt thực' },
  planet: { color: '#b8942e', label: 'Hành tinh' },
  moon: { color: '#d4af5f', label: 'Trăng' },
  special: { color: '#d4a843', label: 'Đặc biệt' },
}

const MONTH_NAMES = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
const DAY_NAMES = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

function groupByMonth(events) {
  const groups = {}
  for (const ev of events) {
    const m = parseInt(ev.date.slice(5, 7))
    if (!groups[m]) groups[m] = []
    groups[m].push(ev)
  }
  return groups
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  return `${dd}/${mm}`
}

function getNextEvent(events) {
  const now = new Date()
  return events
    .map(e => ({ ...e, dateObj: new Date(e.date + 'T00:00:00') }))
    .filter(e => e.dateObj >= now)
    .sort((a, b) => a.dateObj - b.dateObj)[0] || null
}

function getMonthCalendar(year, month) {
  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startOffset = (firstDay.getDay() + 6) % 7
  const cells = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

function MiniCalendar({ eventDays }) {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const cells = getMonthCalendar(year, month)

  return (
    <div className="bg-black/60 border border-gold-primary/15 rounded-[8px] p-6 md:p-7">
      <div className="text-[14px] font-medium text-gold-primary/50 uppercase tracking-[0.18em] mb-3 font-body">
        {MONTH_NAMES[month]} {year}
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[13px] font-body">
        {DAY_NAMES.map(d => (
          <div key={d} className="text-cream-white/25 font-medium py-1">{d}</div>
        ))}
        {cells.map((day, i) => {
          const hasEvent = day !== null && eventDays.has(day)
          return (
            <div key={i} className={`py-1 rounded ${day === today.getDate() ? 'bg-gold-primary/15' : ''} ${hasEvent ? 'text-cream-white font-medium' : day ? 'text-cream-white/50' : ''}`}>
              {day || ''}
              {hasEvent && <div className="w-1 h-1 rounded-full bg-gold-primary mx-auto mt-0.5" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ObservationIndex() {
  const items = [
    { label: 'Bortle Index', value: '2/9', pct: 22, color: '#c9973a' },
    { label: 'Ngân Hà', value: '95%', pct: 95, color: '#e8c79a' },
    { label: 'Giới hạn sao', value: '7.6 mag', pct: 88, color: '#d4af5f' },
  ]
  return (
    <div className="bg-black/60 border border-gold-primary/15 rounded-[8px] p-6 md:p-7">
      <div className="text-[14px] font-medium text-gold-primary/50 uppercase tracking-[0.18em] mb-3 font-body">
        Chỉ số quan sát Mũi Dinh
      </div>
      {items.map(item => (
        <div key={item.label} className="mb-3.5 last:mb-0">
          <div className="flex justify-between text-[14px] mb-1 font-body">
            <span className="text-cream-white/50 font-medium">{item.label}</span>
            <span className="text-cream-white/70 font-medium">{item.value}</span>
          </div>
          <div className="h-2 rounded-full bg-cream-white/[0.06] overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function CountdownWidget({ nextEvent, remaining }) {
  if (!nextEvent || !remaining) return null

  return (
    <div className="bg-black/60 border border-gold-primary/15 rounded-[8px] p-6 md:p-7 text-center">
      <div className="text-[13px] text-cream-white/40 uppercase tracking-[0.18em] mb-1 font-body">Đếm ngược</div>
      <div className="text-4xl md:text-5xl font-semibold text-gold-primary mb-1 font-display-serif">{remaining.days}</div>
      <div className="text-[14px] text-cream-white/30 uppercase tracking-wider font-body">ngày</div>
      <div className="mt-2 text-sm text-cream-white/60 font-medium font-body">{nextEvent.name}</div>
      <div className="text-[13px] text-cream-white/30 font-body">{formatDate(nextEvent.date)}</div>
    </div>
  )
}

export default function AstroCalendar() {
  const [activeTypes, setActiveTypes] = useState(() => new Set(Object.keys(TYPE_CONFIG)))
  const [expandedMonths, setExpandedMonths] = useState(new Set([8]))
  const [view, setView] = useState('timeline')
  const [remaining, setRemaining] = useState(null)

  const filtered = useMemo(
    () => events2026.filter(e => activeTypes.has(e.type)),
    [activeTypes]
  )

  const grouped = useMemo(() => groupByMonth(filtered), [filtered])

  const nextEvent = useMemo(() => getNextEvent(filtered), [filtered])

  useEffect(() => {
    if (!nextEvent) return
    function tick() {
      const diff = nextEvent.dateObj - new Date()
      if (diff <= 0) return setRemaining(null)
      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
      })
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [nextEvent])

  const eventDaySet = useMemo(() => {
    const set = new Set()
    for (const e of events2026) {
      const d = new Date(e.date + 'T00:00:00')
      const today = new Date()
      if (d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()) {
        set.add(d.getDate())
      }
    }
    return set
  }, [])

  function toggleType(type) {
    setActiveTypes(prev => {
      const next = new Set(prev)
      if (next.has(type)) next.delete(type)
      else next.add(type)
      return next
    })
  }

  function toggleMonth(m) {
    setExpandedMonths(prev => {
      const next = new Set(prev)
      if (next.has(m)) next.delete(m)
      else next.add(m)
      return next
    })
  }

  function getPreviewColors(events) {
    const colors = [...new Set(events.map(e => TYPE_CONFIG[e.type].color))]
    return colors.slice(0, 4)
  }

  return (
    <section id="calendar" className="relative py-24 md:py-36 px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-display-serif text-[clamp(1.6rem,4.5vw,2.8rem)] text-cream-white tracking-normal font-semibold">
            Lịch Thiên Văn 2026
          </h2>
          <div className="flex items-center gap-3 mt-4 md:mt-5 justify-center">
            <div className="h-px w-6 md:w-8 bg-cream-white/15" />
            <Icon icon="tabler:diamond" className="text-gold-primary/60 text-sm leading-none" />
            <div className="h-px w-6 md:w-8 bg-cream-white/15" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
          {Object.entries(TYPE_CONFIG).map(([key, cfg]) => {
            const active = activeTypes.has(key)
            return (
              <button
                key={key}
                onClick={() => toggleType(key)}
                className={`text-[14px] font-semibold uppercase px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer font-body tracking-wider ${
                  active
                    ? 'border-current text-cream-white bg-white/[0.06]'
                    : 'border-cream-white/10 text-cream-white/30 hover:text-cream-white/50'
                }`}
                style={active ? { borderColor: cfg.color, color: cfg.color } : {}}
              >
                <span className="mr-1.5">{cfg.icon}</span>
                {cfg.label}
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setView('timeline')}
            className={`text-[13px] font-semibold uppercase px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer font-body tracking-widest ${
               view === 'timeline'
                ? 'bg-gold-primary/10 border-gold-primary/30 text-gold-primary'
                : 'border-cream-white/10 text-cream-white/30 hover:text-cream-white/50'
            }`}
          >
            Dòng thời gian
          </button>
          <button
            onClick={() => setView('grid')}
            className={`text-[13px] font-semibold uppercase px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer font-body tracking-widest ${
               view === 'grid'
                ? 'bg-gold-primary/10 border-gold-primary/30 text-gold-primary'
                : 'border-cream-white/10 text-cream-white/30 hover:text-cream-white/50'
            }`}
          >
            Lưới tháng
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 md:gap-10 items-start">
          <div>
            {view === 'timeline' ? (
              <div className="space-y-4">
                {Object.entries(grouped)
                  .sort(([a], [b]) => parseInt(a) - parseInt(b))
                  .map(([monthStr, events]) => {
                    const m = parseInt(monthStr)
                    const open = expandedMonths.has(m)
                    const colors = getPreviewColors(events)
                    return (
                      <div key={m} className="bg-black/60 border border-gold-primary/15 rounded-[8px] overflow-hidden transition-colors duration-200">
                        <button
                          onClick={() => toggleMonth(m)}
                          className="w-full flex items-center justify-between px-5 md:px-6 py-4 cursor-pointer bg-transparent border-none text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-base font-semibold text-cream-white/80 font-display-serif">{MONTH_NAMES[m - 1]}</span>
                            <span className="text-[13px] text-cream-white/30 font-body">({events.length} sự kiện)</span>
                            <div className="flex gap-1">
                              {colors.map((c, i) => (
                                <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                              ))}
                            </div>
                          </div>
                          <Icon icon="tabler:chevron-down" className={`text-cream-white/30 text-lg transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                        </button>
                        {open && (
                          <div className="border-t border-gold-primary/10">
                            {events.map((ev, i) => {
                              const cfg = TYPE_CONFIG[ev.type]
                              return (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 md:gap-4 px-5 md:px-6 py-4 border-b border-cream-white/[0.03] last:border-b-0 transition-colors duration-200 hover:bg-gold-primary/[0.03]"
                                >
                                  <div                                   className="text-[14px] text-cream-white/30 font-mono whitespace-nowrap min-w-[56px] pt-0.5 font-medium">
                                    {formatDate(ev.date)}
                                  </div>
                                  <Icon icon={ev.icon} className="text-base leading-none pt-0.5 shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center flex-wrap gap-1.5">
                                      <span className="text-[17px] font-semibold text-cream-white/90 font-body">{ev.name}</span>
                                      {ev.badge && (
                                        <span className="text-[13px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gold-primary/15 text-gold-primary/90 font-body">
                                          {ev.badge}
                                        </span>
                                      )}
                                    </div>
                                    {ev.desc && (
                                      <p className="text-[14px] text-cream-white/35 mt-0.5 leading-relaxed font-body font-medium">{ev.desc}</p>
                                    )}
                                    <div
                                      className="inline-block text-[13px] font-normal uppercase tracking-wider px-1.5 py-0.5 rounded-full mt-1.5 font-body"
                                      style={{ backgroundColor: cfg.color + '18', color: cfg.color }}
                                    >
                                      {cfg.label}
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => {
                  const monthEvents = events2026.filter(e => parseInt(e.date.slice(5, 7)) === m)
                  return (
                    <div
                      key={m}
                      className="bg-black/60 border border-gold-primary/15 rounded-[8px] p-6 md:p-7 transition-colors duration-200 hover:border-gold-primary/30"
                    >
                      <div className="text-sm font-semibold text-cream-white/60 mb-2 font-display-serif">{MONTH_NAMES[m - 1]}</div>
                      <div className="flex flex-wrap gap-1">
                        {monthEvents.map((ev, i) => {
                          const day = parseInt(ev.date.slice(8, 10))
                          return (
                            <span
                              key={i}
                              className="w-6 h-6 rounded text-[13px] flex items-center justify-center font-body"
                              style={{ backgroundColor: TYPE_CONFIG[ev.type].color + '20', color: TYPE_CONFIG[ev.type].color }}
                              title={ev.name}
                            >
                              {day}
                            </span>
                          )
                        })}
                      </div>
                      {monthEvents.length === 0 && (
                        <div className="text-[14px] text-cream-white/20 italic font-body">Không có sự kiện</div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

              <div className="space-y-6">
            <CountdownWidget nextEvent={nextEvent} remaining={remaining} />
            <MiniCalendar eventDays={eventDaySet} />
            <ObservationIndex />
          </div>
        </div>

        <div className="mt-10 md:mt-12 bg-gold-primary/[0.04] border border-gold-primary/10 rounded-[8px] p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm md:text-base text-cream-white/70 font-body font-medium">
              <span className="font-semibold text-gold-primary">{nextEvent?.name || 'Mưa sao băng Perseids'}</span>
              {' '}— Còn{' '}
              <span className="text-cream-white font-semibold">{remaining ? `${remaining.days} ngày` : 'rất ít'}</span> chỗ trống cho tour đêm quan sát
            </div>
          </div>
          <a
            href="#"
            className="shrink-0 px-6 py-3 rounded-full border border-gold-primary/40 text-gold-primary text-[14px] font-semibold uppercase tracking-[0.18em] hover:bg-gold-primary/10 hover:border-gold-primary/60 active:scale-[0.97] transition-all duration-200 cursor-pointer whitespace-nowrap no-underline inline-block font-body"
          >
            Đặt chỗ ngay
          </a>
        </div>
      </div>
    </section>
  )
}
