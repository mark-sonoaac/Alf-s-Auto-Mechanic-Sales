import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { carInventory, getImageUrl } from '../data/carInventory'

const labelStyle = {
  display: 'block',
  color: '#9ca3af',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: '6px',
}

const filterSelectStyle = {
  width: '100%',
  background: '#111',
  color: '#fff',
  border: '1px solid #222',
  borderRadius: '6px',
  padding: '10px 12px',
  fontSize: '0.88rem',
  cursor: 'pointer',
  outline: 'none',
}

const PRICE_OPTIONS = [
  { label: 'Any price',       value: '' },
  { label: 'Under $10,000',   value: '10000' },
  { label: 'Under $15,000',   value: '15000' },
  { label: 'Under $20,000',   value: '20000' },
  { label: 'Under $25,000',   value: '25000' },
]

export default function CarsForSale() {
  const navigate = useNavigate()

  // ── Filter state ────────────────────────────────────────────────────────
  const [filterMake,         setFilterMake]         = useState('')
  const [filterModel,        setFilterModel]        = useState('')
  const [filterTransmission, setFilterTransmission] = useState('')
  const [filterMaxPrice,     setFilterMaxPrice]     = useState('')
  const [mobileFiltersOpen,  setMobileFiltersOpen]  = useState(false)

  const makes = useMemo(() => [...new Set(carInventory.map((c) => c.make))].sort(), [])
  const models = useMemo(
    () => filterMake
      ? [...new Set(carInventory.filter((c) => c.make === filterMake).map((c) => c.model))].sort()
      : [],
    [filterMake]
  )

  const filtered = useMemo(() => carInventory.filter((car) => {
    if (filterMake         && car.make         !== filterMake)              return false
    if (filterModel        && car.model        !== filterModel)             return false
    if (filterTransmission && car.transmission !== filterTransmission)      return false
    if (filterMaxPrice     && car.price        >  parseInt(filterMaxPrice)) return false
    return true
  }), [filterMake, filterModel, filterTransmission, filterMaxPrice])

  const hasFilters = filterMake || filterModel || filterTransmission || filterMaxPrice
  const clearFilters = () => {
    setFilterMake('')
    setFilterModel('')
    setFilterTransmission('')
    setFilterMaxPrice('')
  }

  // ── Shared filter controls ──────────────────────────────────────────────
  const FilterControls = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Make */}
      <div>
        <label style={labelStyle}>Make</label>
        <select
          value={filterMake}
          onChange={(e) => { setFilterMake(e.target.value); setFilterModel('') }}
          style={filterSelectStyle}
        >
          <option value="">All Makes</option>
          {makes.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {/* Model */}
      <div>
        <label style={labelStyle}>Model</label>
        <select
          value={filterModel}
          onChange={(e) => setFilterModel(e.target.value)}
          style={{ ...filterSelectStyle, opacity: filterMake ? 1 : 0.45 }}
          disabled={!filterMake}
        >
          <option value="">All Models</option>
          {models.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {/* Max Price */}
      <div>
        <label style={labelStyle}>Max Price</label>
        <select value={filterMaxPrice} onChange={(e) => setFilterMaxPrice(e.target.value)} style={filterSelectStyle}>
          {PRICE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Transmission */}
      <div>
        <label style={labelStyle}>Transmission</label>
        <select value={filterTransmission} onChange={(e) => setFilterTransmission(e.target.value)} style={filterSelectStyle}>
          <option value="">Any</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          style={{ background: 'transparent', border: '1px solid #cc0000', color: '#cc0000', borderRadius: '6px', padding: '9px', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', letterSpacing: '0.04em' }}
        >
          Clear Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="cars-page">

      {/* ── DESKTOP LAYOUT: sidebar + grid ─────────────────────────────── */}
      <div className="cars-layout">

        {/* Left sidebar — desktop only */}
        <aside className="cars-sidebar">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '1.4rem', marginBottom: '4px' }}>Showroom</h1>
          <p style={{ color: '#6b7280', fontSize: '0.82rem', marginBottom: '28px' }}>
            {filtered.length} vehicle{filtered.length !== 1 ? 's' : ''} available
          </p>
          <FilterControls />
        </aside>

        {/* Right: mobile filter toggle + car grid */}
        <div className="cars-main">

          {/* Mobile filter toggle bar */}
          <div className="cars-mobile-header">
            <div>
              <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '1.2rem', margin: 0 }}>Showroom</h1>
              <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: '2px 0 0' }}>
                {filtered.length} vehicle{filtered.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <button
              onClick={() => setMobileFiltersOpen((v) => !v)}
              style={{
                background: mobileFiltersOpen ? '#cc0000' : '#1a1a1a',
                color: '#fff',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                padding: '10px 16px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              ⚙ Filters {hasFilters ? `(${[filterMake, filterModel, filterTransmission, filterMaxPrice].filter(Boolean).length})` : ''}
            </button>
          </div>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="cars-mobile-filters">
              <FilterControls />
            </div>
          )}

          {/* Car grid */}
          {filtered.length === 0 ? (
            <div style={{ padding: '48px 20px', textAlign: 'center', color: '#6b7280' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '12px' }}>No vehicles match your filters.</p>
              <button onClick={clearFilters} style={{ color: '#cc0000', background: 'none', border: 'none', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="cars-grid">
              {filtered.map((car) => (
                <button
                  key={car.id}
                  type="button"
                  className="car-card"
                  onClick={() => navigate(`/cars/${car.id}`)}
                >
                  <div className="car-card-img-wrap">
                    <img
                      src={getImageUrl(car.images[0])}
                      alt={`${car.make} ${car.model}`}
                      className="car-card-img"
                    />
                    {car.images.length > 1 && (
                      <span className="car-card-photo-count">📷 {car.images.length}</span>
                    )}
                  </div>
                  <div className="car-card-body">
                    <h3 className="car-card-name">{car.year} {car.make} {car.model}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '6px' }}>
                      {car.mileage.toLocaleString()} mi &nbsp;·&nbsp; {car.transmission}
                    </p>
                    <p className="car-card-price">${car.price.toLocaleString()}</p>
                    <span className="car-card-cta">View Details →</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── FINANCING BANNER ───────────────────────────────────────────── */}
      <div className="cars-financing">
        <div className="cars-financing-inner">
          <div className="cars-financing-text">
            <h2>Financing Available</h2>
            <p>Get pre-approved today. Soft credit check, fast decisions.</p>
            <ul>
              <li>Affordable monthly payments</li>
              <li>Flexible term lengths tailored to you</li>
              <li>Quick approval process</li>
            </ul>
            <button
              type="button"
              className="financing-learn-btn"
              onClick={() => window.dispatchEvent(new Event('openContactModal'))}
            >
              Learn More
            </button>
          </div>
          <div className="cars-financing-form">
            <h3>Get Pre-Approved</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we received your request and will contact you soon.') }}>
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" />
              <select>
                <option>Monthly budget</option>
                <option>$150 – $300</option>
                <option>$300 – $500</option>
                <option>$500+</option>
              </select>
              <button type="submit">Get Pre-Approved</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
