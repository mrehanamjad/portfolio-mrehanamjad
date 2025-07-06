"use client"

import { useState, useEffect } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function BackgroundLayout({children}:{children: React.ReactNode;}) {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  // const [isHovering, setIsHovering] = useState(true)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [mouseX, mouseY])

  const glowVariants = {
    default: { scale: 1, opacity: 1 },
    clicking: { scale: 1.5, opacity: 0.8 },
    hovering: { scale: 1.2, opacity: 1.2 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
      {/* Enhanced Framer Motion cursor glow layers */}

      {/* Outermost large glow with pulsing */}
      <motion.div
        className="fixed pointer-events-none z-50 w-32 h-32 rounded-full bg-green-400/20 blur-3xl"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            "0 0 60px rgba(34, 197, 94, 0.6), 0 0 120px rgba(34, 197, 94, 0.3), 0 0 180px rgba(34, 197, 94, 0.1)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        variants={glowVariants}
        initial="default"
        whileHover="hovering"
      />

      {/* Medium glow layer with spring animation */}
      <motion.div
        className="fixed pointer-events-none z-50 w-20 h-20 rounded-full bg-green-400/30 blur-2xl"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 40px rgba(34, 197, 94, 0.7), 0 0 80px rgba(34, 197, 94, 0.4)",
        }}
        // animate={isClicking ? "clicking" : isHovering ? "hovering" : "default"}
        animate={isClicking ? "clicking" : "default"}
        variants={glowVariants}
        transition={{ type: "spring", ...springConfig }}
      />

      {/* Inner bright glow with faster response */}
      <motion.div
        className="fixed pointer-events-none z-50 w-12 h-12 rounded-full bg-green-400/40 blur-xl"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 25px rgba(34, 197, 94, 0.8), 0 0 50px rgba(34, 197, 94, 0.5)",
        }}
        animate={isClicking ? "clicking" : "default"}
        variants={glowVariants}
        transition={{ type: "spring", damping: 20, stiffness: 800 }}
      />

      {/* Core bright center with immediate response */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-green-400/60 blur-sm"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 15px rgba(34, 197, 94, 0.9), 0 0 30px rgba(34, 197, 94, 0.6)",
        }}
        animate={isClicking ? { scale: 2, opacity: 0.4 } : { scale: 1, opacity: 0.6 }}
        transition={{ type: "spring", damping: 15, stiffness: 1000 }}
      />

      {/* Tiny center dot with no delay */}
      <motion.div
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-green-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 8px rgba(34, 197, 94, 1)",
        }}
        animate={isClicking ? { scale: 3, opacity: 0.8 } : { scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 1200 }}
      />

      {/* Click burst effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-50 w-24 h-24 rounded-full border-2 border-green-400/50"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

    {children}

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-green-400 rounded-full"
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-1 h-1 bg-green-400 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-400 rounded-full"
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
      />
    </div>
  )
}
