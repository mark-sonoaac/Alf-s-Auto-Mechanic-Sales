import { useState } from 'react'
import { Link } from 'react-router-dom'

const statusColors = {
  Completed:   { bg: '#052e16', text: '#4ade80', dot: '#22c55e' },
  'In Progress': { bg: '#2d1a00', text: '#fb923c', dot: '#f97316' },
  Pending:     { bg: '#1c1917', text: '#a8a29e', dot: '#78716c' },
}

export default function MyRepairs() {
  const [repairs] = useState([
    {
      id: 1,
      vehicle: '2019 Honda Civic',
      service: 'Oil Change & Brake Service',
      status: 'In Progress',
      progress: 65,
      date: '2026-01-08',
      laborCost: 120,
      partsCost: 85,
      total: 205,
      notes: 'Brakes showing wear — replacing pads and rotors on front axle.',
    },
    {
      id: 2,
      vehicle: '2018 Toyota Camry',
      service: 'Tire Rotation',
      status: 'Completed',
      progress: 100,
      date: '2026-01-05',
      laborCost: 40,
      partsCost: 0,
      total: 40,
      notes: 'All four rotated and pressure checked.',
    },
  ])

  return (
    <div style={{ paddingTop: '88px', minHeight: '100vh', padding: '88px 0 60px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px 0' }}>

        <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '28px' }}>
          My Repairs
        </h1>

        {repairs.length === 0 ? (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '16px' }}>Nothing here yet.</p>
            <Link to="/book-repair" style={{ color: '#cc0000', fontWeight: 700, textDecoration: 'none' }}>
              Book your first repair →
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {repairs.map((repair) => {
              const sc = statusColors[repair.status] || statusColors.Pending
              return (
                <div key={repair.id} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0' }}>

                    {/* Left: vehicle info */}
                    <div style={{ padding: '24px', borderRight: '1px solid #1a1a1a' }}>
                      <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem', marginBottom: '4px' }}>{repair.vehicle}</h3>
                      <p style={{ color: '#9ca3af', fontSize: '0.88rem', marginBottom: '12px' }}>{repair.service}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '16px' }}>
                        📅 {new Date(repair.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>

                      {/* Status badge */}
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: sc.bg, borderRadius: '20px', padding: '5px 12px', marginBottom: '18px' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: sc.dot, flexShrink: 0 }} />
                        <span style={{ color: sc.text, fontSize: '0.82rem', fontWeight: 700 }}>{repair.status}</span>
                      </div>

                      {/* Progress */}
                      <div style={{ marginBottom: '14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ color: '#6b7280', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Progress</span>
                          <span style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700 }}>{repair.progress}%</span>
                        </div>
                        <div style={{ width: '100%', background: '#1a1a1a', borderRadius: '99px', height: '6px' }}>
                          <div style={{ width: `${repair.progress}%`, background: repair.progress === 100 ? '#22c55e' : '#cc0000', height: '6px', borderRadius: '99px', transition: 'width 0.4s' }} />
                        </div>
                      </div>

                      <p style={{ color: '#6b7280', fontSize: '0.85rem', fontStyle: 'italic', margin: 0 }}>{repair.notes}</p>
                    </div>

                    {/* Right: cost summary */}
                    <div style={{ padding: '24px', background: '#0d0d0d' }}>
                      <h4 style={{ color: '#9ca3af', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }}>Cost Breakdown</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>Labor</span>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>${repair.laborCost}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>Parts</span>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>${repair.partsCost}</span>
                        </div>
                        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#fff', fontWeight: 700 }}>Total</span>
                          <span style={{ color: '#cc0000', fontWeight: 800, fontSize: '1.1rem' }}>${repair.total}</span>
                        </div>
                      </div>
                      <button style={{ width: '100%', background: '#cc0000', color: '#fff', fontWeight: 700, padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', minHeight: '44px', fontSize: '0.9rem' }}>
                        Pay Now
                      </button>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Support strip */}
        <div style={{ marginTop: '32px', background: '#111', borderLeft: '3px solid #cc0000', borderRadius: '0 8px 8px 0', padding: '18px 20px' }}>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>Questions about your repair?</p>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>
            Call <a href="tel:+19739813578" style={{ color: '#cc0000', textDecoration: 'none', fontWeight: 700 }}>(973) 981-3578</a> or email <a href="mailto:alfsautomechanic@gmail.com" style={{ color: '#cc0000', textDecoration: 'none', fontWeight: 700 }}>alfsautomechanic@gmail.com</a>
          </p>
        </div>

      </div>
    </div>
  )
}
