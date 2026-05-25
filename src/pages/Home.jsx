import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PillarSection from '../components/PillarSection'
import BortleSlider from '../components/BortleSlider'
import SpaceScene from '../components/SpaceScene'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  const [bortle, setBortle] = useState(60)

  useEffect(() => {
    const val = Math.max(5, Math.min(100, bortle))
    document.documentElement.style.setProperty('--bortle', val)
  }, [bortle])

  return (
    <div className="home">
      <SpaceScene bortle={bortle} />
      <Navbar />
      <Hero />
      <PillarSection />
      <BortleSlider value={bortle} onChange={setBortle} />
      <Footer />
    </div>
  )
}
