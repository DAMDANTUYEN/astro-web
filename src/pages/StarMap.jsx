import { useState, useMemo, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from '@iconify/react'
import {
  starLocations,
  REGIONS,
  formatBortle,
  sortByBortle,
} from '../data/starlocations'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Starfield from '../components/ui/Starfield'

const VIETNAM_CENTER = [16.5, 106.5]
const DEFAULT_ZOOM = 6

const SEASON_LABEL = {
  early:   { label: 'Đầu mùa',  icon: 'tabler:sun-rise' },
  late:    { label: 'Cuối mùa', icon: 'tabler:sun-set' },
  allYear: { label: 'Quanh năm',icon: 'tabler:calendar-check' },
}

const BORTLE_COLORS = {
  1: '#3b5bdb',
  2: '#4dabf7',
  3: '#74c0fc',
  4: '#a9e34b',
  5: '#ffd43b',
  6: '#ff922b',
  7: '#f03e3e',
}

const DARK_TILE = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
const DARK_TILE_ATTR = '© OpenStreetMap, © CARTO'

function DetailPanel({ location, onClose }) {
  if (!location) return null
  const season = SEASON_LABEL[location.bestSeason]
  return (
    <div className="bg-[#080c16]/95 border border-gold-primary/25 rounded-2xl p-5 md:p-6 backdrop-blur-sm shadow-[0_0_40px_-5px_rgba(0,0,0,0.8)] flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: BORTLE_COLORS[location.bortleMin] }}
            />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase font-body"
              style={{ color: BORTLE_COLORS[location.bortleMin] }}>
              {formatBortle(location.bortleMin, location.bortleMax)}
            </span>
          </div>
          <h3 className="font-display-serif text-lg md:text-xl text-white font-semibold leading-tight">
            {location.name}
          </h3>
          <p className="text-[13px] text-white/45 font-body mt-0.5">{location.province}</p>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white/70 hover:border-white/30 transition-colors shrink-0"
        >
          <Icon icon="tabler:x" className="text-sm" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: 'tabler:mountain', label: 'Độ cao', value: location.elevation ? `${location.elevation}m` : 'N/A' },
          { icon: season.icon, label: 'Mùa tốt', value: season.label },
          { icon: 'tabler:compass', label: 'Hướng tốt', value: location.bestDirection },
        ].map((s, i) => (
          <div key={i} className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5 text-center">
            <Icon icon={s.icon} className="text-gold-primary/60 text-base mx-auto mb-1" />
            <p className="text-[10px] text-white/30 font-body mb-0.5">{s.label}</p>
            <p className="text-[12px] text-white/75 font-body font-medium leading-tight">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3">
        <p className="text-[12px] text-white/55 leading-relaxed font-body">{location.notes}</p>
      </div>

      {location.warnings?.length > 0 && (
        <div className="flex flex-col gap-1.5">
          {location.warnings.map((w, i) => (
            <div key={i} className="flex items-start gap-2 bg-amber-500/[0.08] border border-amber-500/15 rounded-lg px-3 py-2">
              <Icon icon="tabler:alert-triangle" className="text-amber-400/70 text-sm shrink-0 mt-0.5" />
              <span className="text-[12px] text-amber-200/60 font-body leading-relaxed">{w}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 text-[11px] text-white/25 font-body border-t border-white/[0.06] pt-3">
        <Icon icon="tabler:map-pin" className="text-xs" />
        <span>{location.lat.toFixed(4)}°N, {location.lng.toFixed(4)}°E</span>
        <span className="ml-auto bg-white/[0.04] border border-white/[0.06] rounded px-2 py-0.5 text-white/30">
          {REGIONS[location.region.toUpperCase()]?.label}
        </span>
      </div>
    </div>
  )
}

function MapMarker({ loc, isActive, onClick }) {
  return (
    <CircleMarker
      center={[loc.lat, loc.lng]}
      radius={isActive ? 12 : 7}
      pathOptions={{
        color: isActive ? '#C9973A' : BORTLE_COLORS[loc.bortleMin],
        fillColor: BORTLE_COLORS[loc.bortleMin],
        fillOpacity: isActive ? 0.95 : 0.75,
        weight: isActive ? 3 : 1.5,
      }}
      eventHandlers={{
        click: () => onClick(loc),
      }}
    />
  )
}

export default function StarMap() {
  const [regionFilter] = useState(null)
  const [maxBortle, setMaxBortle] = useState(4)
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const listRef = useRef(null)
  const mobileMapRef = useRef(null)
  const desktopMapRef = useRef(null)

  const filtered = useMemo(() => {
    let list = starLocations
    if (regionFilter) list = list.filter(l => l.region === regionFilter)
    list = list.filter(l => l.bortleMin <= maxBortle)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(l =>
        l.name.toLowerCase().includes(q) ||
        l.province.toLowerCase().includes(q)
      )
    }
    return sortByBortle(list)
  }, [regionFilter, maxBortle, search])

  useEffect(() => {
    if (!selected) return
    const map = window.innerWidth < 1024 ? mobileMapRef.current : desktopMapRef.current
    if (!map || !map.fire) return
    try {
      map.flyTo([selected.lat, selected.lng], 9, { duration: 1.2 })
    } catch (e) {
      console.warn('flyTo failed', e)
    }
  }, [selected])

  const handleSelect = (loc) => {
    setSelected(selected?.id === loc.id ? null : loc)
    if (listRef.current && selected?.id !== loc.id) {
      const el = listRef.current.querySelector(`[data-id="${loc.id}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="relative min-h-screen">
      <Starfield opacity={0.4} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Header */}
        <div className="px-5 md:px-10 lg:px-16 pt-24 md:pt-32 pb-4 md:pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-gold-primary/30" />
              <span className="text-gold-primary/60 text-[13px] tracking-[0.2em] font-semibold uppercase font-body">
                Bản đồ thiên văn
              </span>
            </div>
            <h1 className="font-display-serif text-[clamp(1.4rem,3vw,2.4rem)] text-cream-white font-semibold mb-1">
              Điểm Quan Sát Sao Việt Nam
            </h1>
            <p className="text-[12px] md:text-[14px] text-white/40 font-body max-w-xl">
              {starLocations.length} địa điểm — click để xem chi tiết
            </p>
          </div>
        </div>

        {/* Mobile: Map + Detail */}
        <div className="lg:hidden px-5 mb-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 relative z-0" style={{ height: 280 }}>
            <MapContainer
              ref={mobileMapRef}
              center={VIETNAM_CENTER}
              zoom={DEFAULT_ZOOM}
              zoomControl={false}
              style={{ width: '100%', height: '100%', background: '#050810' }}
            >
              <TileLayer url={DARK_TILE} attribution={DARK_TILE_ATTR} />
              <ZoomControl position="bottomright" />
              {filtered.map(loc => (
                <MapMarker
                  key={loc.id}
                  loc={loc}
                  isActive={selected?.id === loc.id}
                  onClick={handleSelect}
                />
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Mobile: Selected detail */}
        <div className="lg:hidden px-5 mb-4">
          {selected ? (
            <DetailPanel location={selected} onClose={() => setSelected(null)} />
          ) : null}
        </div>

        {/* Main layout */}
        <div className="flex-1 px-5 md:px-10 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5 lg:gap-6">

              {/* Sidebar */}
              <div className="flex flex-col gap-3">
                {/* Search */}
                <div className="lg:bg-black/50 lg:border lg:border-white/10 lg:rounded-xl lg:px-4 lg:py-3">
                  <div className="relative">
                    <Icon icon="tabler:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
                    <input
                      type="text"
                      placeholder="Tìm điểm..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="w-full bg-black/50 lg:bg-transparent border border-white/10 lg:border-none rounded-xl lg:rounded-none pl-9 pr-4 py-2.5 text-[13px] text-white/70 font-body placeholder:text-white/25 focus:outline-none focus:border-gold-primary/30 lg:focus:border-none transition-colors"
                    />
                  </div>
                </div>

                {/* Bortle slider */}
                <div className="lg:bg-black/50 lg:border lg:border-white/10 lg:rounded-xl lg:p-4 lg:backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-bold tracking-[0.15em] text-gold-primary/70 uppercase font-body">
                      Chất lượng trời
                    </p>
                    <span
                      className="text-[13px] font-bold font-display-serif px-2.5 py-0.5 rounded"
                      style={{ color: '#fff', backgroundColor: BORTLE_COLORS[maxBortle] || '#666' }}
                    >
                      Bortle {maxBortle}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={7}
                    step={1}
                    value={maxBortle}
                    onChange={e => setMaxBortle(Number(e.target.value))}
                    className="w-full"
                    style={{
                      accentColor: BORTLE_COLORS[maxBortle],
                    }}
                  />
                  <div className="flex justify-between mt-1">
                    {[1,2,3,4,5,6,7].map(b => (
                      <span
                        key={b}
                        className="text-[9px] font-semibold transition-colors font-body"
                        style={{ color: maxBortle >= b ? BORTLE_COLORS[b] : 'rgba(255,255,255,0.12)' }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-white/35 font-body mt-2 text-center">
                    {['Đen tuyệt đối','Rất tối','Tối ngoại ô xa','Nông thôn','Ngoại ô','Ô nhiễm nhẹ','Ô nhiễm trung bình'][maxBortle - 1]}
                  </p>
                </div>

                {/* Location list */}
                <div className="lg:bg-black/50 lg:border lg:border-white/10 lg:rounded-xl lg:backdrop-blur-sm lg:flex-1 lg:overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                    <p className="text-[10px] font-bold tracking-[0.15em] text-gold-primary/70 uppercase font-body">
                      Danh sách ({filtered.length})
                    </p>
                    <span className="text-[10px] text-white/25 font-body">
                      {filtered.length === 1 ? '1 điểm' : `${filtered.length} điểm`}
                    </span>
                  </div>
                  <div ref={listRef} className="max-h-[280px] lg:max-h-[420px] overflow-y-auto">
                    {filtered.map(loc => (
                      <button
                        key={loc.id}
                        data-id={loc.id}
                        onClick={() => handleSelect(loc)}
                        className={`w-full text-left px-4 py-2.5 border-b border-white/[0.04] last:border-0 flex items-center gap-2.5 transition-colors ${
                          selected?.id === loc.id ? 'bg-gold-primary/[0.08]' : 'hover:bg-white/[0.03]'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: BORTLE_COLORS[loc.bortleMin] }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] text-white/70 font-body font-medium truncate leading-snug">{loc.name}</p>
                          <p className="text-[10px] text-white/30 font-body">{loc.province}</p>
                        </div>
                        <span className="text-[9px] font-semibold text-white/25 font-body shrink-0">
                          B{loc.bortleMin}
                        </span>
                      </button>
                    ))}
                    {filtered.length === 0 && (
                      <p className="px-4 py-5 text-[13px] text-white/25 font-body text-center">Không tìm thấy điểm nào</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Desktop: Map + Detail */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 relative z-0" style={{ height: 'clamp(400px, 55vh, 600px)' }}>
                  <MapContainer
                    ref={desktopMapRef}
                    center={VIETNAM_CENTER}
                    zoom={DEFAULT_ZOOM}
                    zoomControl={false}
                    style={{ width: '100%', height: '100%', background: '#050810' }}
                  >
                    <TileLayer url={DARK_TILE} attribution={DARK_TILE_ATTR} />
                    <ZoomControl position="bottomright" />
                    {filtered.map(loc => (
                      <MapMarker
                        key={loc.id}
                        loc={loc}
                        isActive={selected?.id === loc.id}
                        onClick={handleSelect}
                      />
                    ))}
                  </MapContainer>
                </div>

                {selected ? (
                  <DetailPanel location={selected} onClose={() => setSelected(null)} />
                ) : (
                  <div className="bg-black/40 border border-white/[0.06] rounded-2xl px-6 py-5 text-center">
                    <Icon icon="tabler:map-pin-search" className="text-gold-primary/30 text-2xl mx-auto mb-2" />
                    <p className="text-[13px] text-white/25 font-body">
                      Click vào điểm trên bản đồ hoặc danh sách để xem chi tiết
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
