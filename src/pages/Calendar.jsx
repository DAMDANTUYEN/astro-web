import Navbar from '../components/layout/Navbar'
import AstroCalendar from '../components/calendar/AstroCalendar'
import Footer from '../components/layout/Footer'
import Starfield from '../components/ui/Starfield'

export default function Calendar() {
  return (
    <div className="relative min-h-screen">
      <Starfield opacity={0.5} />
      <div className="relative z-10">
        <Navbar />
        <section className="pt-18 md:pt-24">
          <AstroCalendar />
        </section>
        <Footer />
      </div>
    </div>
  )
}