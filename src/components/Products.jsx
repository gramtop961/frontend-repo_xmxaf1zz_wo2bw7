import { motion } from 'framer-motion'
import { Monitor, Laptop, Server, Tablet, HardDrive } from 'lucide-react'

const ProductCard = ({ icon: Icon, title, spec, price }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: '0 10px 40px -10px rgba(250,204,21,0.35)' }}
    className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
  >
    <div className="mb-4 h-12 w-12 grid place-items-center rounded-lg bg-yellow-400/10 text-yellow-300">
      <Icon size={24} />
    </div>
    <h3 className="text-slate-100 font-semibold mb-1">{title}</h3>
    <p className="text-slate-400 text-sm">{spec}</p>
    <div className="mt-4 text-yellow-300 font-semibold">{price}</div>
    <button className="mt-6 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">Add to Quote</button>
  </motion.div>
)

export default function Products() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-slate-100">
          Products built for performance
        </motion.h1>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          PCs, laptops, displays, tablets, and SSDs — tuned and validated by our testing labs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard icon={Server} title="Pro PC" spec="Ryzen/Intel, ECC memory, silent thermals" price="from $1,199" />
        <ProductCard icon={Laptop} title="Creator Laptop" spec="14/16 inch OLED, 32–96GB RAM" price="from $1,499" />
        <ProductCard icon={Monitor} title="Color-Pro Monitor" spec="27–32 inch, 4K, DeltaE < 1, HDR" price="from $699" />
        <ProductCard icon={Tablet} title="Field Tablet" spec="Ruggedized, 5G, 1000 nits" price="from $899" />
        <ProductCard icon={HardDrive} title="NVMe SSD" spec="PCIe 4.0/5.0, 1–8TB, 3DWPD" price="from $129" />
      </div>
    </section>
  )
}
