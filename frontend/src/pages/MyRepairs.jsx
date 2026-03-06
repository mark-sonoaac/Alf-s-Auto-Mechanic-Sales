import { useState } from 'react'

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
      notes: 'Brakes showing wear, replacing pads and rotors.'
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
      notes: 'All tires rotated and pressure balanced.'
    }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Pending': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-8 text-white">My Repairs</h1>

      {repairs.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600 text-lg mb-4">You don't have any repair jobs yet.</p>
          <a href="/book-repair" className="text-secondary font-semibold hover:text-amber-600">
            Book your first repair →
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {repairs.map(repair => (
            <div key={repair.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Left: Vehicle & Service */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{repair.vehicle}</h3>
                  <p className="text-gray-600 mb-4">{repair.service}</p>
                  <p className="text-sm text-gray-500 mb-4">📅 Date: {new Date(repair.date).toLocaleDateString()}</p>
                  
                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(repair.status)}`}>
                      {repair.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Progress</span>
                      <span className="text-sm font-semibold text-gray-700">{repair.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${repair.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Notes */}
                  <p className="text-gray-600 text-sm italic">{repair.notes}</p>
                </div>

                {/* Right: Cost Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">Cost Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Labor:</span>
                      <span className="font-semibold">${repair.laborCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parts:</span>
                      <span className="font-semibold">${repair.partsCost}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold text-gray-800">Total:</span>
                      <span className="font-bold text-lg text-blue-500">${repair.total}</span>
                    </div>
                    <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-gray-700 transition font-semibold">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Support Section */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-12 rounded">
        <h3 className="font-bold text-gray-800 mb-2">Questions?</h3>
        <p className="text-gray-700">
          Contact us at <strong>+1 (973) 981-3578</strong> or email <strong>alfsautomechanic@gmail.com</strong>
        </p>
      </div>
    </div>
  )
}
