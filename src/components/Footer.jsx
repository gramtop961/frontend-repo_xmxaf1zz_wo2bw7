export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} VibeTech. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <a className="hover:text-yellow-200 transition-colors" href="#">Privacy</a>
            <a className="hover:text-yellow-200 transition-colors" href="#">Terms</a>
            <a className="hover:text-yellow-200 transition-colors" href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
