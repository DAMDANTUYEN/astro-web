export default function Logo({ size = 32, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M24 2L26.5 10H37.5L28.5 15.5L31 24L24 18.5L17 24L19.5 15.5L10.5 10H21.5L24 2Z"
          fill="#4DD0C8"
          opacity="0.9"
        />
        <path
          d="M8 44L16 20L24 8L32 20L40 44H8Z"
          fill="url(#tentGradient)"
          stroke="#4DD0C8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 8L16 20L14 44"
          stroke="#4DD0C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        <path
          d="M24 8L32 20L34 44"
          stroke="#4DD0C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        <line
          x1="4"
          y1="44"
          x2="44"
          y2="44"
          stroke="#4DD0C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient id="tentGradient" x1="24" y1="8" x2="24" y2="44">
            <stop offset="0%" stopColor="#4DD0C8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4DD0C8" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className="font-display-vast text-base md:text-lg text-starlight-white tracking-wide">
          Đêm Ngàn Sao
        </span>
      )}
    </div>
  )
}
