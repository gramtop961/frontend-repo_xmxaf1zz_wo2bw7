import { motion } from 'framer-motion'
import { BadgeCheck, Building2, Handshake, Briefcase, Home, ShieldAlert } from 'lucide-react'

const Card = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-xl border border-white/10 bg-white/5 p-6"
  >
    <div className="mb-4 h-10 w-10 grid place-items-center rounded-lg bg-yellow-400/10 text-yellow-300">
      <Icon size={20} />
    </div>
    <h3 className="text-slate-100 font-semibold mb-1">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
)

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-slate-100">
          About VibeTech
        </motion.h1>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          We build reliable systems and run independent testing labs so your business can move with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card icon={BadgeCheck} title="Quality Management" desc="ISO-aligned processes, continuous audits, and full traceability across the supply chain." />
        <Card icon={Handshake} title="Partnerships" desc="We collaborate with silicon vendors, OEMs, and integrators to deliver seamless solutions." />
        <Card icon={Briefcase} title="Careers" desc="Join a team where engineering craft meets product obsession. Remote-first, inclusive culture." />
        <Card icon={Building2} title="Rental Space" desc="On-demand lab rooms and test benches for thermal, vibration, and stress scenarios." />
        <Card icon={ShieldAlert} title="Anti‑Corruption" desc="Zero tolerance policy, public disclosures, and third‑party review to keep trust uncompromised." />
        <Card icon={Home} title="Community" desc="We invest in local tech communities through workshops, grants, and open data sets." />
      </div>
    </section>
  )
}
