"use client"
import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function AboutBackground() {
  const shouldReduceMotion = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (shouldReduceMotion) return
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax range
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  return (
    <div className="absolute inset-0 -z-10 bg-[#090b0e] overflow-hidden">
      {/* faint warm bleed from hero */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#18120e]/30 to-transparent pointer-events-none" />

      {/* ambient noise / veil */}
      <div className="absolute inset-0 bg-black/40 mix-blend-overlay opacity-30 pointer-events-none" />

      {/* soft light orbs for atmospheric shifting */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 20, mass: 50 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity }}
            className="absolute right-[15%] top-[10%] w-[40vw] h-[40vw] bg-[#61739c]/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
            className="absolute left-[10%] bottom-[10%] w-[30vw] h-[30vw] bg-[#895d43]/10 rounded-full blur-[90px]"
          />
        </motion.div>
      )}
    </div>
  )
}

