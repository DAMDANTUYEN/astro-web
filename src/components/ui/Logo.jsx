export default function Logo({ size = 40, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="ASTROLUXE"
        width={size}
        height={size}
        className="shrink-0"
        style={{ objectFit: 'contain' }}
      />
      {showText && (
        <span className="font-display-serif text-lg md:text-xl text-gold-primary tracking-normal font-medium">
          ASTROLUXE
        </span>
      )}
    </div>
  )
}