import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { autoShopImages, getImageUrl } from '../data/carInventory'

export default function Home() {
  const heroImages = useMemo(
    () => autoShopImages.filter((name) => name.includes('autoshops')).slice(0, 3).map(getImageUrl),
    []
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (heroImages.length < 2) return undefined
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(id)
  }, [heroImages.length])

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="home">
      {/* Hero — full-width cycling background */}
      <section
        className="hero-section"
        style={heroImages[currentIndex] ? { backgroundImage: `url(${heroImages[currentIndex]})` } : undefined}
      >
        <div className="hero-content">
          <h1>Alf&apos;s Auto Mechanic &amp; Sales</h1>
          <h3>Quality vehicles and trusted service, start today</h3>
          <p>
            Browse clean, inspected vehicles with transparent pricing and easy financing
            options. We help you drive home with confidence.
          </p>
          <Link to="/cars-for-sale" className="hero-btn-primary">Browse Cars</Link>
          <div className="slot-buttons">
            <button type="button" onClick={() => scrollToSection('services')}>Our Services</button>
            <button type="button" onClick={() => scrollToSection('contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <section id="services" className="page-section">
        <div className="section-content align-left">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Everything you need to buy with confidence.</p>
          <div className="section-grid">
            <div className="section-card">
              <h4>Pre Purchase Inspections</h4>
              <p>Full mechanical checks so you know exactly what you&apos;re buying.</p>
            </div>
            <div className="section-card">
              <h4>Financing Options</h4>
              <p>Flexible monthly plans tailored to your budget.</p>
            </div>
            <div className="section-card">
              <h4>Trade In Support</h4>
              <p>Get a fair offer for your current vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="page-section alt">
        <div className="section-content">
          <h2 className="section-title">Inventory</h2>
          <p className="section-subtitle">Cars and SUVs ready for immediate purchase.</p>
          <div className="section-grid">
            <div className="section-card">
              <h4>City Cars</h4>
              <p>Fuel efficient vehicles that make daily driving easy.</p>
            </div>
            <div className="section-card">
              <h4>Family SUVs</h4>
              <p>Roomy, safe, and packed with comfort features.</p>
            </div>
            <div className="section-card">
              <h4>Pickup Trucks</h4>
              <p>Work ready trucks for jobs, hauling, and towing.</p>
            </div>
          </div>
          <div className="section-actions">
            <Link to="/cars-for-sale" className="primary-link">View Cars</Link>
          </div>
        </div>
      </section>

      <section id="about" className="page-section">
        <div className="section-content">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            We are a local auto shop and sales team focused on dependable cars, honest
            pricing, and long term support.
          </p>
          <div className="section-grid">
            <div className="section-card">
              <h4>Trusted Inventory</h4>
              <p>Every car is inspected with transparent history and pricing.</p>
            </div>
            <div className="section-card">
              <h4>Easy Financing</h4>
              <p>Apply and get options quickly with clear terms.</p>
            </div>
            <div className="section-card">
              <h4>Local Support</h4>
              <p>Friendly staff ready to help by phone or in person.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="page-section alt">
        <div className="section-content">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions? Reach out and we&apos;ll help you get moving.
          </p>
          <div className="contact-outline">
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+1 (973) 981-3578</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">alfsautomechanic@gmail.com</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">556 Hawthorne Ave, Newark, NJ 07112</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Instagram</span>
              <a className="contact-link" href="https://www.instagram.com/alfsautomechanic" target="_blank" rel="noreferrer">
                @alfsautomechanic
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">TikTok</span>
              <a className="contact-link" href="https://www.tiktok.com/@alfs.auto.mechani?_r=1&_t=ZP-93rmvbEZOQAs" target="_blank" rel="noreferrer">
                @alfs.auto.mechani
              </a>
            </div>
          </div>
          <div className="section-actions">
            <Link to="/cars-for-sale" className="secondary-link">View Cars</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
