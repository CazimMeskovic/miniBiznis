"use client"

import { motion as _motion } from 'framer-motion'
// framer-motion typings can be strict in some setups; use a runtime-cast here
const motion: any = _motion as any

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
}

const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
}

export default function HomePage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8">
      <motion.div className="hero-fg p-8 rounded-3xl glass-card max-w-4xl" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="">
          <h1 className="text-5xl font-extrabold">NovaWeb — Future-ready websites for small businesses</h1>
        </motion.div>

        <motion.div variants={item} className="mt-4">
          <p className="text-lg text-gray-300">A clean, animated, and responsive template focused on conversion and speed.</p>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex items-center justify-center space-x-4">
          <a className="btn-accent" href="#">Get Started</a>
          <a className="px-6 py-3 rounded-full border border-white/10 text-sm">Explore</a>
        </motion.div>

        {/* Hero illustrative image (public Unsplash) */}
        <motion.div variants={item} className="mt-8">
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=public"
            alt="Modern web design mockup"
            className="w-full rounded-2xl object-cover max-h-64"
          />
        </motion.div>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="glass-card p-6 rounded-2xl cursor-pointer">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=public" alt="Performance" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="font-semibold text-xl">Lightning Performance</h3>
          <p className="text-gray-300 mt-2">Optimized for speed and SEO so small businesses can start selling faster.</p>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="glass-card p-6 rounded-2xl cursor-pointer">
          <img src="https://images.unsplash.com/photo-1526378721112-8c7b6f9f0a73?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=public" alt="Design" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="font-semibold text-xl">Futuristic Design</h3>
          <p className="text-gray-300 mt-2">Glassmorphism, neon accents and micro-interactions to stand out.</p>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="glass-card p-6 rounded-2xl cursor-pointer">
          <img src="https://images.unsplash.com/photo-1532619675605-56c6f6f2d17e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=public" alt="Customization" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="font-semibold text-xl">Easy to Customize</h3>
          <p className="text-gray-300 mt-2">Well-structured code and components make updates painless.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
