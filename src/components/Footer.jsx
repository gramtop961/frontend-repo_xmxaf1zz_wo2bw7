import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30" />
            <span className="font-semibold tracking-tight text-slate-800">TechSaaS</span>
          </div>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} TechSaaS. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-600">
            <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-slate-100">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-slate-100">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-slate-100">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
