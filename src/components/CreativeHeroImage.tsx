"use client"

import { motion } from "framer-motion"

const CreativeHeroImage = () => {
  return (
    <div className="relative">
      {}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Modern workspace with laptop and creative tools"
          className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
        />
      </motion.div>

      {}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-8 -left-8 z-20"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center">
          <span className="text-white text-2xl font-bold">💡</span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -bottom-6 -right-6 z-20"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-white text-xl">🚀</span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -left-12 z-20"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
      </motion.div>
    </div>
  )
}

export default CreativeHeroImage
