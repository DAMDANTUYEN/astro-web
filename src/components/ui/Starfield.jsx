const POOL_SIZE = 300

const starPool = Array.from({ length: POOL_SIZE }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.8 + Math.random() * 3.2,
  delay: Math.random() * 5,
  duration: 2 + Math.random() * 4,
  opacity: 0.4 + Math.random() * 0.6,
}))

export default function Starfield({ count, brightness, opacity }) {
  const starCount = count ?? Math.round((opacity ?? 0) * 300)
  const starBrightness = brightness ?? (opacity ?? 0) * 0.5 + 0.5

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          50% { opacity: var(--star-opacity); transform: scale(1); }
        }
      `}</style>
      {starPool.slice(0, starCount).map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size * starBrightness + 'px',
            height: s.size * starBrightness + 'px',
            background: starBrightness > 0.5 ? 'rgba(255,250,240,0.95)' : 'rgba(200,210,255,0.7)',
            boxShadow: starBrightness > 0.5
              ? `0 0 ${6 * starBrightness}px rgba(255,250,240,${0.35 * starBrightness})`
              : 'none',
            animation: `star-twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
            '--star-opacity': Math.min(s.opacity * starBrightness * 1.3, 1),
          }}
        />
      ))}
    </div>
  )
}
