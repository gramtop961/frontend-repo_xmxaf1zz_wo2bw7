import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-yellow-400/30 selection:text-yellow-200">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  )
}

export default App
