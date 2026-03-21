import { useState } from 'react'
import { Link } from 'react-router-dom'

const servicesList = [
  'Oil Change',
  'Brake Service',
  'Tires & Wheels',
  'Exhaust / Muffler',
  'Diagnostics',
  'Air Conditioning',
  'Transmission',
  'General Maintenance',
]

const inputStyle = {
  width: '100%',
  background: '#111',
  border: '1px solid #222',
  borderRadius: '8px',
  padding: '12px 14px',
  color: '#fff',
  fontSize: '16px',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  color: '#9ca3af',
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  marginBottom: '6px',
}

export default function BookRepair() {
  const [formData, setFormData] = useState({
    phone: '', vehicle: '', year: '', services: [], date: '', time: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleService = (s) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="book-repair-page" style={{ minHeight: '100vh', padding: '0 0 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        {/* Banner image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '28px' }}>
          <img src="/images/auto-shops/repair-vehicle.jpg" alt="Vehicle Repair" style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" style={{ color: '#cc0000', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <span style={{ color: '#4b5563' }}>/</span>
          <span style={{ color: '#9ca3af' }}>Book a Repair</span>
        </nav>

        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '8px' }}>Book a Repair</h1>
          <p style={{ color: '#9ca3af', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>
            Pick what you need, fill in your info, and we'll reach out to confirm. For urgent stuff — just call us at (973) 981-3578.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'start' }}>

            {/* Form */}
            {submitted ? (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '48px 24px', textAlign: 'center', gridColumn: '1 / -1' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Request received.</h2>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '20px' }}>We'll call to confirm your appointment.</p>
                <button onClick={() => setSubmitted(false)} style={{ background: '#cc0000', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem', margin: 0 }}>Service Request</h2>

                <div>
                  <label style={labelStyle}>Vehicle (Make & Model)</label>
                  <input type="text" name="vehicle" placeholder="e.g., Honda Civic" value={formData.vehicle} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Year</label>
                    <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" name="phone" placeholder="We'll call to confirm" value={formData.phone} onChange={handleChange} required style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Select Services</label>
                  <div style={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: '8px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {servicesList.map((s) => (
                      <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', minHeight: '28px' }}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(s)}
                          onChange={() => toggleService(s)}
                          style={{ width: '18px', height: '18px', accentColor: '#cc0000', cursor: 'pointer', flexShrink: 0 }}
                        />
                        <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ ...inputStyle, colorScheme: 'dark' }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ ...inputStyle, colorScheme: 'dark' }} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Notes (optional)</label>
                  <textarea name="notes" placeholder="Any details that might help..." value={formData.notes} onChange={handleChange} rows="3" style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                <button type="submit" style={{ background: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer', minHeight: '44px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#aa0000' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#cc0000' }}
                >
                  Request Appointment
                </button>
              </form>
            )}

            {/* Aside */}
            <aside style={{ background: '#111', borderLeft: '3px solid #cc0000', borderRadius: '0 12px 12px 0', padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>Need it faster?</h3>
                <a href="tel:+19739813578" style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                  📞 (973) 981-3578
                </a>
              </div>
              <div>
                <h4 style={{ color: '#9ca3af', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>What We Do</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Oil Changes & Fluids', 'Brake Pads & Rotors', 'Tires, Wheels & Alignment', 'Exhaust & Muffler', 'A/C Service', 'Check Engine & Diagnostics', 'Transmission & Drivetrain'].map((item) => (
                    <li key={item} style={{ color: '#d1d5db', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#cc0000', fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  )
}
