export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-3">Alf&apos;s Auto Mechanic &amp; Sales LLC</h3>
            <p className="text-sm">Quality vehicles, honest pricing, and trusted service.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Services</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400">Vehicle Repair</a></li>
              <li><a href="#" className="hover:text-blue-400">Vehicle Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Company</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p className="text-sm mb-2">📞 +1 (973) 981-3578</p>
            <p className="text-sm mb-2">📧 alfsautomechanic@gmail.com</p>
            <p className="text-sm">📍 556 Hawthorne Ave, Newark, NJ 07112</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2026 Alf&apos;s Auto Mechanic &amp; Sales LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
