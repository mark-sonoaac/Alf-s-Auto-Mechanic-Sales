import { useNavigate } from 'react-router-dom'
import { carInventory, getImageUrl } from '../data/carInventory'

export default function CarsForSale() {
  const navigate = useNavigate()

  return (
    <>
      <div className="cars-page">
        <div className="cars-header">
          <h1 className="cars-title">Cars for Sale</h1>
          <p className="cars-subtitle">Tap any vehicle to view photos and details.</p>
        </div>

        {/* Car Grid */}
        <div className="cars-grid">
          {carInventory.map((car) => (
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
                <h3 className="car-card-name">{car.make} {car.model}</h3>
                <p className="car-card-price">${car.price.toLocaleString()}</p>
                <span className="car-card-cta">View Details →</span>
              </div>
            </button>
          ))}
        </div>

        {/* Financing Banner */}
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
    </>
  )
}
