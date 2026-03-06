import { useEffect, useLayoutEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import Home from './pages/Home'
import MyRepairs from './pages/MyRepairs'
import CarsForSale from './pages/CarsForSale'
import BookRepair from './pages/BookRepair'
import Contact from './pages/Contact'
import Services from './pages/Services'
import CarDetail from './pages/CarDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppShell() {
  const { pathname } = useLocation()
  const [contactOpen, setContactOpen] = useState(false)
  const isCarDetail = pathname.startsWith('/cars/')

  useEffect(() => {
    const handler = () => setContactOpen(true)
    window.addEventListener('openContactModal', handler)
    return () => window.removeEventListener('openContactModal', handler)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isCarDetail && <Navigation />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-repairs" element={<MyRepairs />} />
          <Route path="/cars-for-sale" element={<CarsForSale />} />
          <Route path="/book-repair" element={<BookRepair />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>
      </main>
      {!isCarDetail && <Footer />}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App
