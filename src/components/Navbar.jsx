import { useState } from 'react'
import { Home, Info, Package, Wrench, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About Us', icon: Info },
    { href: '#products', label: 'Products', icon: Package },
    { href: '#services', label: 'Services', icon: Wrench },
    { href: '#contact', label: 'Contacts', icon: Phone },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30" />
            <span className="font-semibold tracking-tight text-slate-800">TechSaaS</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
