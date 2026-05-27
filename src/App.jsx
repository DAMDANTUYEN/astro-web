import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import StarMap from './pages/StarMap'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="relative min-h-screen bg-bg-deep-navy">
      <div className="fixed inset-0 z-0 pointer-events-none star-scatter opacity-50" />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/starmap" element={<StarMap />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
