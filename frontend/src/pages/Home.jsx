import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { autoShopImages, carInventory, getImageUrl } from '../data/carInventory'

// ── Static data ────────────────────────────────────────────────────────────
const vehicleTypes = [
  { label: 'City Cars',     icon: '🚗' },
  { label: 'Sedans',        icon: '🚙' },
  { label: 'Family SUVs',   icon: '🚐' },
  { label: 'Pickup Trucks', icon: '🛻' },
  { label: 'Hatchbacks',    icon: '🚘' },
  { label: 'Wagons',        icon: '🚌' },
]

const quickActions = [
  {
    icon: '🚗',
    title: 'Browse Our Lot',
    text: "Tell us what you're after and we'll point you in the right direction. We carry a rotating stock of clean, checked-out vehicles across different budgets and styles.",
    linkLabel: 'View Inventory',
    route: '/cars-for-sale',
  },
  {
    icon: '💳',
    title: 'Get Financed Today',
    text: "Credit not perfect? Doesn't matter — we work with lenders who deal with all kinds of situations. First-timers, rebuilders, or solid scores, we'll find something that fits.",
    linkLabel: 'See Financing Options',
    route: '/book-repair',
  },
  {
    icon: '🔑',
    title: 'Book a Test Drive',
    text: "Nothing beats sitting behind the wheel before you decide. Stop by or call ahead and one of our guys will walk you through it, no pressure.",
    linkLabel: 'Set Up a Visit',
    route: '/contact',
  },
]

const aboutBullets = [
  "We've been helping Newark drivers find solid used cars without the runaround. Every vehicle on our lot goes through a full mechanical check before it goes up for sale.",
  "Our connections with local lenders mean we can usually get a deal done even when other places say no. We work with your situation, not against it.",
  "On top of sales, we do full auto service — so you're not just buying a car, you're getting a shop you can come back to when something needs attention.",
]

const preApprovalCards = [
  {
    icon: '📋',
    title: 'How Buying From Us Works',
    text: "Come in, pick a car you like, and we'll handle the rest. We keep the paperwork simple and the conversation honest. No bait-and-switch, just real cars at real prices.",
    cta: 'GET PRE-APPROVED NOW',
  },
  {
    icon: '🚘',
    title: 'Come Take It for a Spin',
    text: "The only way to really know if a car is right for you is to get in and drive it. Our team is low-key and helpful — they'll answer your questions straight.",
    cta: 'SCHEDULE A TEST DRIVE',
  },
]

// ── Shared inline style snippets ───────────────────────────────────────────
const selectStyle = {
  flex: '1 1 150px',
  background: '#1a1a1a',
  color: '#fff',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  padding: '12px 14px',
  fontSize: '0.88rem',
  fontWeight: 600,
  letterSpacing: '0.04em',
  cursor: 'pointer',
  outline: 'none',
}

const arrowBtnStyle = {
  background: '#1a1a1a',
  color: '#fff',
  border: '1px solid #2a2a2a',
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

// ── Component ──────────────────────────────────────────────────────────────
export default function Home() {
  // Hero image cycling
  const heroImages = useMemo(
    () => autoShopImages.filter((n) => n.includes('autoshops')).slice(0, 4).map(getImageUrl),
    []
  )
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
    if (heroImages.length < 2) return
    const id = setInterval(() => setHeroIdx((p) => (p + 1) % heroImages.length), 6000)
    return () => clearInterval(id)
  }, [heroImages.length])

  // Search bar
  const years  = useMemo(() => [...new Set(carInventory.map((c) => c.year))].sort((a, b) => b - a), [])
  const makes  = useMemo(() => [...new Set(carInventory.map((c) => c.make))].sort(), [])
  const [searchYear,  setSearchYear]  = useState('')
  const [searchMake,  setSearchMake]  = useState('')
  const [searchModel, setSearchModel] = useState('')
  const filteredModels = useMemo(
    () => searchMake
      ? [...new Set(carInventory.filter((c) => c.make === searchMake).map((c) => c.model))].sort()
      : [],
    [searchMake]
  )
  const navigate = useNavigate()

  // Featured vehicles carousel scroll
  const carouselRef = useRef(null)
  const scrollCarousel = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  // About section image
  const aboutImg = useMemo(
    () => getImageUrl(autoShopImages.find((n) => n.includes('autoshops')) || autoShopImages[0]),
    []
  )

  return (
    <div id="home">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 156px)',
          marginTop: '156px',
          backgroundImage: heroImages[heroIdx] ? `url(${heroImages[heroIdx]})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(32px,5vw,80px) clamp(18px,6vw,120px)', maxWidth: '680px' }}>
          <p style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Find your next ride right here in Newark
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '32px', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Cars You Can<br />Count On
          </h1>
          <Link
            to="/cars-for-sale"
            className="home-hero-cta"
          >
            → See What&apos;s Available
          </Link>
        </div>
      </section>

      {/* ── VEHICLE SEARCH BAR ────────────────────────────────────────────── */}
      <section style={{ background: '#111', padding: '18px 20px' }}>
        <div style={{ maxWidth: '940px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <select value={searchYear} onChange={(e) => setSearchYear(e.target.value)} style={selectStyle}>
            <option value="">SELECT YEAR</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <select
            value={searchMake}
            onChange={(e) => { setSearchMake(e.target.value); setSearchModel('') }}
            style={selectStyle}
          >
            <option value="">SELECT MAKE</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            style={{ ...selectStyle, opacity: searchMake ? 1 : 0.5 }}
            disabled={!searchMake}
          >
            <option value="">SELECT MODEL</option>
            {filteredModels.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <button
            onClick={() => navigate('/cars-for-sale')}
            style={{
              flex: '0 0 auto',
              background: '#cc0000',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.88rem',
              padding: '12px 26px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
            }}
          >
            SEARCH INVENTORY
          </button>
        </div>
      </section>

      {/* ── 3-COLUMN QUICK ACTIONS ─────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {quickActions.map((item) => (
            <div key={item.title} style={{ borderTop: '3px solid #cc0000', paddingTop: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '46px', height: '46px', background: '#cc0000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                {item.icon}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{item.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.65, flex: 1, margin: 0 }}>{item.text}</p>
              <Link to={item.route} style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                {item.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHOP BY VEHICLE TYPE ──────────────────────────────────────────── */}
      <section style={{ background: '#cc0000', padding: '52px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 900, marginBottom: '28px', lineHeight: 1.2 }}>
            Shop By <span style={{ fontSize: '1.08em', display: 'inline-block' }}>VEHICLE TYPE</span>
          </h2>
          <div
            style={{
              display: 'flex',
              gap: '14px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '6px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {vehicleTypes.map((vt) => (
              <Link
                key={vt.label}
                to="/cars-for-sale"
                className="vtype-card"
              >
                <span style={{ fontSize: '2.4rem' }}>{vt.icon}</span>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', lineHeight: 1.3 }}>{vt.label}</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link to="/cars-for-sale" style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT US ──────────────────────────────────────────────────────── */}
      <section id="about" style={{ background: '#0d0d0d', padding: 'clamp(52px, 8vw, 88px) 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Photo */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', maxHeight: '440px' }}>
            <img
              src={aboutImg}
              alt="Alf's Auto shop"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Text */}
          <div>
            <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '8px', lineHeight: 1.2 }}>
              Alf&apos;s Auto Mechanic &amp; Sales
            </h2>
            <p style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.95rem', marginBottom: '26px' }}>
              Used Cars &amp; Auto Service in Newark, NJ
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              {aboutBullets.map((bullet, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#cc0000', fontSize: '1.1rem', flexShrink: 0, marginTop: '3px' }}>•</span>
                  <span style={{ color: '#d1d5db', fontSize: '0.93rem', lineHeight: 1.7 }}>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link to="/cars-for-sale" style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED VEHICLES CAROUSEL ────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: 0 }}>
              What&apos;s On The Lot
            </h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => scrollCarousel(-1)} style={arrowBtnStyle} aria-label="Previous">‹</button>
              <button onClick={() => scrollCarousel(1)}  style={arrowBtnStyle} aria-label="Next">›</button>
            </div>
          </div>
          {/* Scroll strip */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '4px',
            }}
          >
            {carInventory.map((car) => (
              <Link
                key={car.id}
                to={`/cars/${car.id}`}
                className="featured-car-card"
              >
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#111', flexShrink: 0 }}>
                  <img
                    src={getImageUrl(car.images[0])}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                    {car.year} {car.make} {car.model}
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.82rem', marginBottom: '10px' }}>
                    {car.mileage.toLocaleString()} mi &nbsp;·&nbsp; {car.transmission}
                  </div>
                  <div style={{ color: '#cc0000', fontWeight: 800, fontSize: '1.35rem' }}>
                    ${car.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRE-APPROVAL CTA ──────────────────────────────────────────────── */}
      <section style={{ background: '#cc0000', padding: 'clamp(48px, 7vw, 72px) 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>

          {/* Phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: '#1a1a1a',
              borderRadius: '34px',
              border: '4px solid #2a2a2a',
              padding: '12px 10px',
              width: '210px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
            }}>
              <div style={{ width: '54px', height: '10px', background: '#2a2a2a', borderRadius: '10px', margin: '0 auto 10px' }} />
              <div style={{ background: '#0a0a0a', borderRadius: '22px', padding: '24px 16px', minHeight: '230px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <div style={{ fontSize: '2.4rem' }}>✅</div>
                <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.05rem', textAlign: 'center', lineHeight: 1.25 }}>
                  You&apos;re Pre-Approved!
                </div>
                <div style={{ color: '#6b7280', fontSize: '0.78rem', textAlign: 'center' }}>
                  Come pick your ride.
                </div>
                <button style={{
                  width: '100%',
                  background: '#cc0000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '9px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  marginTop: '4px',
                }}>
                  Accept
                </button>
              </div>
              <div style={{ width: '64px', height: '5px', background: '#2a2a2a', borderRadius: '10px', margin: '10px auto 0' }} />
            </div>
          </div>

          {/* Right panel */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>
              SHOP WITH CONFIDENCE
            </p>
            <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', marginBottom: '28px', lineHeight: 1.2 }}>
              Don&apos;t Spend More Time<br />Than You Have To
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {preApprovalCards.map((card) => (
                <div key={card.title} style={{ background: '#1a1a1a', borderRadius: '12px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontSize: '1.6rem' }}>{card.icon}</span>
                  <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', margin: 0, lineHeight: 1.3 }}>{card.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.65, flex: 1, margin: 0 }}>{card.text}</p>
                  <Link
                    to="/book-repair"
                    style={{
                      display: 'block',
                      background: '#cc0000',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      padding: '11px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      letterSpacing: '0.04em',
                      marginTop: 'auto',
                    }}
                  >
                    {card.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
