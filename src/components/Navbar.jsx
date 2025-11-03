import { Link, NavLink, useLocation } from 'react-router-dom'
import { Home, Info, Package, Wrench, Phone, Sparkles } from 'lucide-react'

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ` +
      (isActive
        ? 'text-yellow-300 bg-yellow-400/10'
        : 'text-slate-300 hover:text-yellow-200 hover:bg-white/5')
    }
  >
    <Icon size={16} />
    <span>{label}</span>
  </NavLink>
)

export default function Navbar() {
  const location = useLocation()
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-yellow-400 to-amber-600 grid place-items-center shadow-[0_0_30px_-8px_rgba(250,204,21,0.9)]">
              <Sparkles size={18} className="text-black" />
            </div>
            <span className="font-semibold tracking-tight text-slate-100">VibeTech</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem to="/" icon={Home} label="Home" />
            <NavItem to="/about" icon={Info} label="About" />
            <NavItem to="/products" icon={Package} label="Products" />
            <NavItem to="/services" icon={Wrench} label="Services" />
            <NavItem to="/contacts" icon={Phone} label="Contact" />
          </nav>

          <div className="md:hidden text-slate-300 text-xs">
            {location.pathname.replace('/', '') || 'home'}
          </div>
        </div>
      </div>
    </header>
  )
}
