import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home',              route: '/'              },
  { label: 'Showroom',          route: '/cars-for-sale' },
  { label: 'Apply Online',      route: '/book-repair'   },
  { label: 'Services',          route: '/services'      },
  { label: 'About Us',          route: '/'              },
  { label: 'Contact Us',        route: '/contact'       },
  { label: 'Reviews',           route: '/'              },
  { label: 'Privacy Policy',    route: '/'              },
]

const colHeading = { color: '#fff', fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }
const linkStyle  = { color: '#6b7280', textDecoration: 'none', fontSize: '0.88rem', display: 'block', marginBottom: '8px' }

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', padding: '56px 20px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* 4-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '40px', paddingBottom: '48px' }}>

          {/* Get In Touch */}
          <div>
            <p style={colHeading}>Get In Touch</p>
            <p style={{ ...linkStyle, lineHeight: 1.55, marginBottom: '12px' }}>
              📍 556 Hawthorne Ave,<br />Newark, NJ 07112
            </p>
            <a href="tel:+19739813578" style={linkStyle}>📞 (973) 981-3578</a>
            <a href="mailto:alfsautomechanic@gmail.com" style={linkStyle}>✉️ alfsautomechanic@gmail.com</a>
          </div>

          {/* Quick Links */}
          <div>
            <p style={colHeading}>Quick Links</p>
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                to={item.route}
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#cc0000' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hours */}
          <div>
            <p style={colHeading}>Hours We&apos;re Open</p>
            <p style={{ color: '#6b7280', fontSize: '0.88rem', marginBottom: '10px', lineHeight: 1.6 }}>
              <span style={{ color: '#d1d5db', fontWeight: 600 }}>Mon – Sat:</span><br />
              9:00 AM – 7:00 PM
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>
              <span style={{ color: '#d1d5db', fontWeight: 600 }}>Sun:</span><br />
              By Appointment Only
            </p>
          </div>

          {/* Follow Along */}
          <div>
            <p style={colHeading}>Follow Along</p>
            <a
              href="https://www.instagram.com/alfsautomechanic"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#cc0000' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280' }}
            >
              📸 Instagram<br />
              <span style={{ fontSize: '0.82rem' }}>@alfsautomechanic</span>
            </a>
            <a
              href="https://www.tiktok.com/@alfs.auto.mechani"
              target="_blank"
              rel="noreferrer"
              style={{ ...linkStyle, marginTop: '12px' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#cc0000' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280' }}
            >
              🎵 TikTok<br />
              <span style={{ fontSize: '0.82rem' }}>@alfs.auto.mechanic</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1a1a1a', padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '0.82rem', color: '#4b5563' }}>
          <span>© 2026 Alf&apos;s Auto Mechanic &amp; Sales LLC</span>
          <span>|</span>
          <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Privacy Policy</a>
        </div>

      </div>
    </footer>
  )
}
