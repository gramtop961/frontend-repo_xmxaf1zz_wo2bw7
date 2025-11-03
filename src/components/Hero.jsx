import Spline from '@splinetool/react-spline'
import { Rocket, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-4">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium text-slate-700">Modern • Interactive • Playful</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            A next‑gen SaaS for testing, devices, and services
          </h1>
          <p className="mt-4 text-lg text-slate-700/90">
            We blend powerful infrastructure with delightful 3D visuals. Explore products, services, and our vision — all in one seamless experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-indigo-600/30 transition">
              <Rocket className="h-4 w-4" />
              Explore Products
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/80 border border-slate-200 text-slate-800 hover:bg-white">
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
