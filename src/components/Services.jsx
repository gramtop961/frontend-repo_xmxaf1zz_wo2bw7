import { motion } from 'framer-motion'
import { FlaskConical, ThermometerSun, Gauge, ActivitySquare } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, points }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-xl border border-white/10 bg-white/5 p-6"
  >
    <div className="mb-4 h-10 w-10 grid place-items-center rounded-lg bg-yellow-400/10 text-yellow-300">
      <Icon size={20} />
    </div>
    <h3 className="text-slate-100 font-semibold mb-3">{title}</h3>
    <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </motion.div>
)

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-slate-100">
          Testing Laboratories
        </motion.h1>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          Independent validation that pushes hardware to its limits—so your customers never hit theirs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard icon={ThermometerSun} title="Thermal & Endurance" points={["Hot/cold cycles", "Thermal throttling analysis", "Fan curves & acoustics"]} />
        <ServiceCard icon={Gauge} title="Performance Benchmarks" points={["CPU/GPU stress", "IOPS/latency for storage", "Battery & power draw"]} />
        <ServiceCard icon={FlaskConical} title="Environmental" points={["Vibration & shock", "Dust & humidity", "Ingress evaluation"]} />
        <ServiceCard icon={ActivitySquare} title="Reliability" points={["Soak tests", "MTBF estimates", "Regression sweeps"]} />
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <a href="/contacts" className="inline-flex items-center rounded-md bg-yellow-400 px-5 py-3 font-medium text-black hover:shadow-[0_0_30px_-8px_rgba(250,204,21,0.8)] transition-shadow">Request a quote</a>
        <p className="text-xs text-slate-500">Typical turnaround: 5–10 business days depending on scope.</p>
      </div>
    </section>
  )
}
