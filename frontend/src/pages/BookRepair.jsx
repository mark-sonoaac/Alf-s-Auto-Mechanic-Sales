import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BookRepair() {
  const [formData, setFormData] = useState({
    phone: '',
    vehicle: '',
    year: '',
    services: [],
    date: '',
    time: '',
    notes: ''
  })

  const servicesList = [
    'Oil Change',
    'Brake Service',
    'Tires & Wheels',
    'Exhaust / Muffler',
    'Diagnostics',
    'Air Conditioning',
    'Transmission',
    'General Maintenance'
  ]

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target
    if (name === 'services') {
      const values = Array.from(selectedOptions).map(o => o.value)
      setFormData({ ...formData, services: values })
      return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Appointment request:', formData)
    alert('Appointment request submitted! We will contact you soon.')
    setFormData({ phone: '', vehicle: '', year: '', services: [], date: '', time: '', notes: '' })
  }

  return (
    <div className="w-full px-6 pt-24 pb-12">
      {/* Banner Image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        <img src="/images/auto-shops/repair-vehicle.jpg" alt="Vehicle Repair" className="w-full h-64 object-cover" />
      </div>

      <div className="max-w-7xl mx-auto">
        <nav className="mb-6">
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-blue-500 font-semibold">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 font-semibold">Repairs & Services</span>
          </div>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">Book a Repair</h1>
          <p className="text-gray-300 mt-2">We offer a wide range of services from oil changes and brake work to exhaust/muffler repair, tires & wheels, AC service, diagnostics and more. Select the services you need from the list.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg flex-1">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Service Request</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Vehicle (Make & Model)</label>
            <input
              type="text"
              name="vehicle"
              placeholder="e.g., Honda Civic"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Year</label>
              <input
                type="number"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">Select Services</label>
              <div className="space-y-2 border border-gray-300 rounded-lg p-4 bg-gray-50">
                {servicesList.map(s => (
                  <label key={s} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(s)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, services: [...formData.services, s] })
                        } else {
                          setFormData({ ...formData, services: formData.services.filter(svc => svc !== s) })
                        }
                      }}
                      className="w-4 h-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="ml-3 text-gray-700">{s}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Additional Notes (optional)</label>
            <textarea
              name="notes"
              placeholder="Describe any issues or concerns"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (we'll call to confirm)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">Request Appointment</button>
        </form>

        <aside className="lg:w-1/3">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-2">Quick Info</h3>
            <p className="text-gray-700 mb-4">Need a quick quote? Call us at +1 (973) 981-3578.</p>
            <h4 className="font-semibold mb-2">Services We Offer</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Oil Changes & Fluid Service</li>
              <li>Brake Service & Pads</li>
              <li>Tires, Wheels & Alignments</li>
              <li>Exhaust & Muffler Repair</li>
              <li>Air Conditioning Service</li>
              <li>Diagnostics & Check Engine</li>
              <li>Transmission & Drivetrain</li>
            </ul>
          </div>
        </aside>
        </div>
      </div>
    </div>
  )
}
