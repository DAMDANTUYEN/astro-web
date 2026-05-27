import { useState, useMemo } from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import ExperienceCards from '../components/home/ExperienceCards'
import BortleSlider from '../components/home/BortleSlider'
import BentoGallery from '../components/home/BentoGallery'
import Footer from '../components/layout/Footer'
import Starfield from '../components/ui/Starfield'

export default function Home() {
  const [bortleValue, setBortleValue] = useState(0)

  const t = bortleValue / 100

  const pageBg = useMemo(() => {
    const r = Math.round(30 - t * 25)
    const g = Math.round(25 - t * 20)
    const b = Math.round(40 - t * 35)
    return `rgb(${Math.max(r, 5)}, ${Math.max(g, 5)}, ${Math.max(b, 10)})`
  }, [t])

  const starCount = Math.round(t * 200)
  const starBrightness = 0.2 + t * 0.8

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: pageBg }}>
      <div className="fixed inset-0 z-0 pointer-events-none star-scatter" style={{ opacity: 0.08 + t * 0.22 }} />
      <Starfield count={starCount} brightness={starBrightness} />
      <div className="relative z-10">
        <Navbar />
        <Hero pageBg={pageBg} />
        <BortleSlider value={bortleValue} onChange={setBortleValue} />
        <ExperienceCards />
        <BentoGallery />
        <Footer />
      </div>
    </div>
  )
}
