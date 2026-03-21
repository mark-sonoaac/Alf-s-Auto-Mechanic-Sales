import { useState } from 'react'

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
  fontSize: '0.82rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: '6px',
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page" style={{ minHeight: '100vh', padding: '0 0 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 0' }}>

        <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '36px' }}>
          Contact Us
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>

          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            <div>
              <h3 style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</h3>
              <a href="tel:+19739813578" style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', display: 'block', marginBottom: '4px' }}>
                (973) 981-3578
              </a>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>Mon–Fri 8AM–6PM · Sat 9AM–4PM</p>
            </div>

            <div>
              <h3 style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Email</h3>
              <a href="mailto:alfsautomechanic@gmail.com" style={{ color: '#fff', fontSize: '0.95rem', textDecoration: 'none', display: 'block', marginBottom: '4px', wordBreak: 'break-all' }}>
                alfsautomechanic@gmail.com
              </a>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>We get back to everyone, usually same day</p>
            </div>

            <div>
              <h3 style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Location</h3>
              <p style={{ color: '#fff', fontSize: '0.95rem', margin: '0 0 4px' }}>556 Hawthorne Ave</p>
              <p style={{ color: '#fff', fontSize: '0.95rem', margin: '0 0 8px' }}>Newark, NJ 07112</p>
            </div>

            <div>
              <h3 style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Hours</h3>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', margin: '0 0 4px' }}>Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', margin: '0 0 4px' }}>Saturday: 9:00 AM – 4:00 PM</p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Sunday: Closed</p>
            </div>

            <div>
              <h3 style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Follow Us</h3>
              <a href="https://www.instagram.com/alfsautomechanic" target="_blank" rel="noreferrer"
                style={{ color: '#d1d5db', fontSize: '0.9rem', display: 'block', marginBottom: '6px', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#cc0000' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#d1d5db' }}
              >
                📸 @alfsautomechanic
              </a>
              <a href="https://www.tiktok.com/@alfs.auto.mechani" target="_blank" rel="noreferrer"
                style={{ color: '#d1d5db', fontSize: '0.9rem', display: 'block', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#cc0000' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#d1d5db' }}
              >
                🎵 @alfs.auto.mechani
              </a>
            </div>

          </div>

          {/* Form column */}
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px 24px' }}>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', marginBottom: '24px' }}>Send a Message</h2>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>Got it — thanks.</p>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>We'll get back to you shortly.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: '20px', background: 'none', border: '1px solid #333', color: '#9ca3af', borderRadius: '6px', padding: '8px 18px', cursor: 'pointer', fontSize: '0.85rem' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(optional)" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Whatever you need to know..." style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }} />
                </div>
                <button type="submit" style={{ background: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer', minHeight: '44px', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#aa0000' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#cc0000' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
