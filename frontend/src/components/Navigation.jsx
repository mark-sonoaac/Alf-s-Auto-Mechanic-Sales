import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Services', sectionId: 'services', route: '/services' },
    { label: 'Inventory', route: '/cars-for-sale' },
    { label: 'Contact Us', sectionId: 'contact' }
  ]

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (sectionId, route) => (e) => {
    e.preventDefault()
    setOpenNav(false)
    setOpenSearch(false)
    if (route) {
      navigate(route)
      return
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 50)
      return
    }
    scrollToSection(sectionId)
  }

  const handleSearchToggle = () => {
    setOpenSearch((prev) => {
      const next = !prev
      if (next) setOpenNav(false)
      return next
    })
  }

  return (
    <nav className={`nav ${openSearch ? 'openSearch' : ''} ${openNav ? 'openNav' : ''}`}>
      <i className="uil uil-bars navOpenBtn" onClick={() => { setOpenNav(true); setOpenSearch(false) }}></i>
      <a href="/" className="logo" onClick={handleNavClick('home')}>Alf&apos;s Auto Mechanic &amp; Sales</a>
      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn" onClick={() => setOpenNav(false)}></i>
        {navItems.map((item) => (
          <li key={item.sectionId}>
            <a href={item.route || `#${item.sectionId}`} onClick={handleNavClick(item.sectionId, item.route)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <i
        className={`uil ${openSearch ? 'uil-times' : 'uil-search'} search-icon`}
        id="searchIcon"
        onClick={handleSearchToggle}
      ></i>
      <div className="search-box">
        <i className="uil uil-search search-icon"></i>
        <input
          type="text"
          placeholder="Search here..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </nav>
  )
}
