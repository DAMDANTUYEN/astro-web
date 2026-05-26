import { useRef, useMemo, useEffect } from 'react'

export default function Starfield({ opacity = 0 }) {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 starfield-bg"
      style={{ opacity: opacity * 0.15 }}
    />
  )
}
