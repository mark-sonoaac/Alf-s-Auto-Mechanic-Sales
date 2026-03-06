import { useState, useEffect } from 'react'
import ContactModal from './ContactModal'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const openHandler = () => setOpen(true)
    window.addEventListener('openContactModal', openHandler)
    return () => window.removeEventListener('openContactModal', openHandler)
  }, [])

  return (
    <>
      <header className="bg-black text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Hawthorne Auto Repair</h1>
              <p className="text-gray-400 text-sm mt-1">Professional Car Repair & Sales</p>
            </div>
            <div className="text-right flex items-center gap-6">
              <button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Contact</button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
