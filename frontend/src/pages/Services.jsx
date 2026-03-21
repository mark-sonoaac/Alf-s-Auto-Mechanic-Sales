const services = [
  {
    title: 'Engine Diagnostics',
    desc: "Check engine light won't go away? We plug in, read the codes, and tell you straight what it needs — no upsells, no guessing.",
  },
  {
    title: 'Brake Service',
    desc: "Squealing or pulling when you stop? We do pads, rotors, and lines. Same day when parts are in stock.",
  },
  {
    title: 'Oil & Fluid Service',
    desc: "Oil changes starting at $30. We check your filters and top off fluids while we're in there.",
  },
  {
    title: 'Suspension & Steering',
    desc: "Car pulling left, bouncing hard, or clunking on bumps? Could be shocks, struts, or alignment — we find it fast.",
  },
  {
    title: 'Transmission',
    desc: "Slipping gears or rough shifts? We diagnose before we fix, and we walk you through what you're looking at before any work starts.",
  },
  {
    title: 'Heating & A/C',
    desc: "AC not blowing cold? Heat barely works? We recharge systems and track down leaks. Don't ride it out.",
  },
]

const cardStyle = {
  background: '#111',
  border: '1px solid #1a1a1a',
  borderRadius: '12px',
  padding: '24px',
}

export default function Services() {
  return (
    <div className="services-page" style={{ minHeight: '100vh', padding: '0 0 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 0' }}>

        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '10px' }}>
            Auto Repair Services
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6 }}>
            We work on most makes and models. Stop in or call ahead — (973) 981-3578.
          </p>
        </div>

        {/* Service cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {services.map((s) => (
            <div key={s.title} style={{ ...cardStyle, borderLeft: '3px solid #cc0000' }}>
              <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px' }}>{s.title}</h2>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ ...cardStyle, background: '#cc0000', border: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', margin: '0 0 4px' }}>Need something looked at?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0 }}>
              Call us or stop by — 556 Hawthorne Ave, Newark, NJ 07112.
            </p>
          </div>
          <a
            href="tel:+19739813578"
            style={{
              background: '#fff',
              color: '#cc0000',
              fontWeight: 800,
              fontSize: '0.95rem',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            📞 Call Now
          </a>
        </div>

      </div>
    </div>
  )
}
