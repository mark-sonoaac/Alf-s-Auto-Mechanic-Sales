import { useState, useEffect } from 'react'

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    if (!open) setForm({ name: '', email: '', message: '' })
  }, [open])

  if (!open) return null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks — we received your message. We will contact you soon.')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">Send Us A Message</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-2"></textarea>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-primary text-white font-bold px-4 py-2 rounded-lg">Send</button>
                <button type="button" onClick={onClose} className="text-sm text-gray-500">Cancel</button>
              </div>
            </form>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-3">Alf&apos;s Auto Mechanic &amp; Sales LLC</h4>
            <p className="text-gray-700 mb-2">556 Hawthorne Ave</p>
            <p className="text-gray-700 mb-2">Newark, NJ 07112</p>
            <p className="text-gray-700 font-semibold mb-2">📞 +1 (973) 981-3578</p>
            <p className="text-gray-700 mb-4">📧 alfsautomechanic@gmail.com</p>

            <h5 className="font-semibold mb-2">Hours</h5>
            <p className="text-gray-600">Monday to Friday: 8:00 AM to 6:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM to 4:00 PM</p>

            
          </div>
        </div>
      </div>
    </div>
  )
}
