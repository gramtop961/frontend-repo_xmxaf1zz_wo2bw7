import { motion } from 'framer-motion'
import { ShieldCheck, Users, Briefcase, Building2, ShieldAlert, Cpu, Laptop, Monitor, Tablet, HardDrive, FlaskConical, Mail } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: 'spring', stiffness: 120, damping: 14 },
  }),
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium mb-3">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="max-w-2xl mx-auto mt-2 text-slate-600">{subtitle}</p>}
    </div>
  )
}

export default function Sections() {
  return (
    <main className="relative -mt-6 scroll-smooth">
      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Us"
            title="Driven by quality and integrity"
            subtitle="Learn how we operate, partner, and grow with our community."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Quality Management', desc: 'Certified standards, continuous improvement, and meticulous QA across all workflows.' },
              { icon: Users, title: 'Partnerships', desc: 'We co-build with vendors, labs, and innovators to accelerate outcomes.' },
              { icon: Briefcase, title: 'Careers', desc: 'Join a team where curiosity, craft, and impact come together.' },
              { icon: Building2, title: 'Rental Space', desc: 'Flexible, tech-ready workspaces designed for teams and prototypes.' },
              { icon: ShieldAlert, title: 'Anti-Corruption', desc: 'Transparent operations with zero tolerance standards and clear reporting lines.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + 1}
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products"
            title="Hardware that powers your ideas"
            subtitle="Curated devices for every workflow — performance, portability, and clarity."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Cpu, title: 'PCs', desc: 'High‑performance desktop builds for compute‑intensive tasks.' },
              { icon: Laptop, title: 'Laptops', desc: 'Portable power with premium thermals and battery life.' },
              { icon: Monitor, title: 'Monitors', desc: 'Color-accurate, high‑refresh panels for creators and pros.' },
              { icon: Tablet, title: 'Tablets', desc: 'Lightweight, pen‑ready slates for notes and sketching.' },
              { icon: HardDrive, title: 'SSD', desc: 'Fast, reliable NVMe and SATA storage options.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-md transition"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + 1}
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow-md shadow-violet-600/30">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-violet-700 hover:text-violet-900">Learn more →</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Testing Laboratories"
            subtitle="Accredited labs for functional, environmental, and reliability testing."
          />

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Certification‑grade testing</h3>
                  <p className="text-slate-600">From material analysis to full device validation under rigorous standards.</p>
                </div>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 list-disc list-inside">
                <li>Electrical, thermal, and mechanical stress testing</li>
                <li>EMI/EMC, acoustics, and signal integrity</li>
                <li>Environmental chambers and lifecycle simulation</li>
                <li>Detailed reporting for compliance and R&D</li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Request a quote</a>
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
            >
              <h4 className="text-lg font-semibold text-emerald-900">Sample capabilities</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-white border border-emerald-100">Reliability & lifecycle</div>
                <div className="p-3 rounded-lg bg-white border border-emerald-100">Environmental chambers</div>
                <div className="p-3 rounded-lg bg-white border border-emerald-100">Signal integrity</div>
                <div className="p-3 rounded-lg bg-white border border-emerald-100">Safety & compliance</div>
              </div>
              <p className="mt-4 text-slate-600 text-sm">We tailor test plans to your industry standards and product maturity.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contacts"
            title="Get in touch"
            subtitle="Have a question about products or lab services? We’d love to help."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.form
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={5} className="mt-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Send message</button>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-800 hover:bg-slate-50">
                  <Mail className="h-4 w-4" />
                  Email us
                </a>
              </div>
            </motion.form>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
            >
              <h4 className="text-lg font-semibold text-slate-900">Visit us</h4>
              <p className="mt-2 text-slate-600 text-sm">123 Innovation Drive, Suite 400, Technopolis</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">Mon–Fri: 9:00–18:00</div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">Support within 24 hours</div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">+1 (555) 123‑4567</div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">hello@example.com</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
