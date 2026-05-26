import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceCards from './components/ExperienceCards'
import BortleSlider from './components/BortleSlider'
import BentoGallery from './components/BentoGallery'
import Footer from './components/Footer'
import Starfield from './components/Starfield'

function App() {
  const [bortleValue, setBortleValue] = useState(0)

  return (
    <div className="relative min-h-screen bg-deep-sea-void">
      <Starfield opacity={bortleValue / 100} />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ExperienceCards />
        <BortleSlider value={bortleValue} onChange={setBortleValue} />
        <BentoGallery />
        <Footer />
      </div>
    </div>
  )
}

export default App
