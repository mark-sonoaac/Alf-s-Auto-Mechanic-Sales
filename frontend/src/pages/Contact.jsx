import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for reaching out! We will respond within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>

          <div className="space-y-8">
            {/* Phone */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-white">📞 Phone</h3>
              <p className="text-gray-200 text-lg">+1 (973) 981-3578</p>
              <p className="text-gray-400 text-sm">Available Monday to Friday: 8AM to 6PM, Saturday: 9AM to 4PM</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-white">📧 Email</h3>
              <p className="text-gray-200 text-lg">alfsautomechanic@gmail.com</p>
              <p className="text-gray-400 text-sm">We respond within 24 hours</p>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-white">📱 Social</h3>
              <a
                className="text-gray-200 text-lg block hover:text-blue-400"
                href="https://www.instagram.com/alfsautomechanic"
                target="_blank"
                rel="noreferrer"
              >
                Instagram: @alfsautomechanic
              </a>
              <a
                className="text-gray-200 text-lg block hover:text-blue-400"
                href="https://www.tiktok.com/@alfs.auto.mechani?_r=1&_t=ZP-93rmvbEZOQAs"
                target="_blank"
                rel="noreferrer"
              >
                TikTok: @alfs.auto.mechani
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-white">📍 Location</h3>
              <p className="text-gray-200">556 Hawthorne Ave</p>
              <p className="text-gray-200">Newark, NJ 07112</p>
              <p className="text-gray-400 text-sm mt-2">Located on Hawthorne Ave</p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-white">🕒 Hours of Operation</h3>
              <div className="text-gray-200 space-y-1">
                <p>Monday to Friday: 8:00 AM to 6:00 PM</p>
                <p>Saturday: 9:00 AM to 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-white">🔧 Quick Services</h3>
              <ul className="text-gray-200 space-y-1">
                <li>✓ Oil changes $30 to $60</li>
                <li>✓ Tire rotations $40</li>
                <li>✓ Diagnostics $85</li>
                <li>✓ Brake pads starting $120</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="e.g., Repair Quote, General Question"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
