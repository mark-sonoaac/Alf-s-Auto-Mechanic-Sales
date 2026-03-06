import { useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { carInventory, getImageUrl } from '../data/carInventory'

export default function CarDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = carInventory.find((c) => c.id === Number(id))

  const [imgIndex, setImgIndex] = useState(0)
  const [showInquiry, setShowInquiry] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const touchStartX = useRef(null)
  const thumbsRef = useRef(null)

  if (!car) {
    return (
      <div className="car-detail-notfound">
        <p>Vehicle not found.</p>
        <button type="button" onClick={() => navigate('/cars-for-sale')}>← Back to Inventory</button>
      </div>
    )
  }

  const images = car.images.map(getImageUrl)
  const total = images.length

  const goTo = (i) => {
    const next = (i + total) % total
    setImgIndex(next)
    // scroll thumbnail into view
    if (thumbsRef.current) {
      const thumb = thumbsRef.current.children[next]
      if (thumb) thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goTo(imgIndex + 1) : goTo(imgIndex - 1)
    touchStartX.current = null
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setShowInquiry(false)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <div className="car-detail">
        {/* Gallery */}
        <div
          className="car-detail-gallery"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floating back button */}
          <button type="button" className="car-detail-back" onClick={() => navigate('/cars-for-sale')}>
            ‹ Back
          </button>
          <img
            key={imgIndex}
            src={images[imgIndex]}
            alt={`${car.make} ${car.model} — photo ${imgIndex + 1} of ${total}`}
            className="car-detail-gallery-img"
          />
          {total > 1 && (
            <>
              <button type="button" className="gallery-arrow gallery-arrow-left" onClick={() => goTo(imgIndex - 1)} aria-label="Previous photo">‹</button>
              <button type="button" className="gallery-arrow gallery-arrow-right" onClick={() => goTo(imgIndex + 1)} aria-label="Next photo">›</button>
              <div className="gallery-counter">{imgIndex + 1} / {total}</div>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div className="gallery-thumbs" ref={thumbsRef}>
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                className={`gallery-thumb${i === imgIndex ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`View photo ${i + 1}`}
              >
                <img src={src} alt={`${car.make} ${car.model} thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>
        )}

        {/* Car info */}
        <div className="car-detail-info">
          <div className="car-detail-name-row">
            <h1 className="car-detail-name">{car.make} {car.model}</h1>
            <p className="car-detail-price">${car.price.toLocaleString()}</p>
          </div>
          <div className="car-detail-specs">
            <div className="car-detail-spec">
              <span className="spec-label">Transmission</span>
              <span className="spec-value">{car.transmission}</span>
            </div>
            <div className="car-detail-spec">
              <span className="spec-label">Fuel</span>
              <span className="spec-value">{car.fuel}</span>
            </div>
          </div>
          <p className="car-detail-contact-note">
            Questions about this vehicle? Call us at <a href="tel:+19739813578">+1 (973) 981-3578</a> or use the button below.
          </p>
        </div>
      </div>

      {/* Sticky CTA bar — outside .car-detail so it's always at bottom */}
      <div className="car-detail-cta-bar">
        <a href="tel:+19739813578" className="cta-call">Call Now</a>
        <button type="button" className="cta-inquire" onClick={() => setShowInquiry(true)}>Request Info</button>
      </div>

      {/* Inquiry form modal */}
      {showInquiry && (
        <div className="modal-overlay" onClick={() => setShowInquiry(false)}>
          <div className="modal-box modal-box-sm" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setShowInquiry(false)}>✕</button>
            <div className="modal-body">
              <h2 className="modal-name">Inquire: {car.make} {car.model}</h2>
              <form onSubmit={handleInquirySubmit} className="inquiry-form">
                <input
                  type="text" placeholder="Full Name" required
                  value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                />
                <input
                  type="email" placeholder="Email" required
                  value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                />
                <input
                  type="tel" placeholder="Phone" required
                  value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                />
                <textarea
                  placeholder="Message (optional)" rows="3"
                  value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                />
                <button type="submit">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
