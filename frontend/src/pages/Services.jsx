export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-white services-page">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Auto Repair Services</h1>
        <p className="text-blue-100">
          Professional diagnostics and repair for cars and trucks. Transparent pricing and
          clear communication from start to finish.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Engine Diagnostics</h2>
          <p className="text-blue-100">
            Check engine light, performance issues, and complete system scans.
          </p>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Brake Service</h2>
          <p className="text-blue-100">
            Pads, rotors, and full inspections for safe stopping power.
          </p>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Oil and Fluid Service</h2>
          <p className="text-blue-100">
            Oil changes and fluid checks to keep your vehicle running smooth.
          </p>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Suspension and Steering</h2>
          <p className="text-blue-100">
            Shocks, struts, and alignment checks for a stable ride.
          </p>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Transmission Service</h2>
          <p className="text-blue-100">
            Diagnosis and service for smooth shifting and reliability.
          </p>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Heating and Cooling</h2>
          <p className="text-blue-100">
            Air conditioning repair, recharge, and system inspections.
          </p>
        </div>
      </section>

      <section className="mt-10 bg-white/10 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">Need Service Today</h2>
        <p className="text-blue-100">
          Call +1 (973) 981 3578 or visit us at 556 Hawthorne Ave, Newark, NJ 07112.
        </p>
      </section>
    </div>
  )
}
