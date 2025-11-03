import { motion } from 'framer-motion'

export default function Contacts() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-slate-100">
          Let’s build something exceptional
        </motion.h1>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          Tell us about your project, timeline, and requirements. We’ll get back within 1 business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea rows="5" className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="What can we help with?" />
          </div>
          <button className="inline-flex items-center rounded-md bg-yellow-400 px-5 py-2.5 font-medium text-black hover:shadow-[0_0_30px_-8px_rgba(250,204,21,0.8)] transition-shadow">
            Send message
          </button>
        </form>

        <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h3 className="text-slate-100 font-semibold mb-2">Direct contact</h3>
          <p className="text-slate-400 text-sm">Email: hello@vibetech.io</p>
          <p className="text-slate-400 text-sm">Phone: +1 (555) 010-2030</p>

          <div className="mt-6">
            <h4 className="text-slate-200 font-medium mb-2">Offices</h4>
            <p className="text-slate-400 text-sm">San Francisco, CA • Berlin, DE • Singapore</p>
          </div>
        </div>
      </div>
    </section>
  )
}
