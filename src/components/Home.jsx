import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Cpu, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm"
  >
    <div className="mb-4 h-10 w-10 grid place-items-center rounded-lg bg-yellow-400/10 text-yellow-300">
      <Icon size={20} />
    </div>
    <h3 className="text-slate-100 font-semibold mb-1">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-50"
            >
              Build with Light. Operate in the Dark.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-4 text-slate-300 text-lg"
            >
              High-performance hardware and lab-tested services for modern teams. Designed for speed, reliability, and a sleek dark aesthetic.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-5 py-3 font-medium text-black shadow-[0_0_30px_-8px_rgba(250,204,21,0.8)] hover:shadow-yellow-400/40 transition-shadow"
              >
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-200 hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Performance that feels effortless
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            From silicon to software, every layer is tuned for speed, security, and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Cpu} title="Precision Hardware" desc="Optimized PCs, laptops, and pro displays engineered for demanding workflows." />
          <Feature icon={Shield} title="Hardened Security" desc="Enterprise-grade safeguards and compliance baked into every product and service." />
          <Feature icon={Activity} title="Lab-Verified" desc="Independent testing labs validate thermal, endurance, and performance metrics." />
        </div>
      </section>
    </div>
  )
}
