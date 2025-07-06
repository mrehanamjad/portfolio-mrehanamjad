"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
       <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <motion.p
          className="text-lg mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Rerter
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-16 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          We're here to bring <span className="text-green-400">your vision to life.</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Let's get to know each other
        </motion.p>

        <motion.div
          className="w-12 h-12 border-2 border-green-400 rounded-full flex items-center justify-center hover:bg-green-400/10 transition-colors cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <ChevronDown className="w-6 h-6 text-green-400" />
        </motion.div>
      </main>
  )
}
