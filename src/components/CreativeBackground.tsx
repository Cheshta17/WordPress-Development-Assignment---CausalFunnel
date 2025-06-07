"use client"

import { motion } from "framer-motion"

const CreativeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      { }
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg opacity-20"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30"
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 transform rotate-45 opacity-25"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-1/3 w-20 h-20 border-4 border-primary-300 rounded-full opacity-20"
      />

      {}
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-yellow-600/10 rounded-full blur-3xl" />
    </div>
  )
}

export default CreativeBackground
