"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TimeGreeting() {
  const [greeting, setGreeting] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateGreeting = () => {
      const hour = new Date().getHours()

      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning")
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon")
      } else if (hour >= 17 && hour < 22) {
        setGreeting("Good Evening")
      } else {
        setGreeting("Good Night")
      }
    }

    updateGreeting()

    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <span>Good Day</span> // Fallback for SSR
  }

  return (
    <motion.span
      className="inline-flex items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {greeting}, I'm{" "}
      <motion.span
        className="text-cyan-400 mx-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Esrail
      </motion.span>
      <motion.span
        className="inline-block ml-1"
        animate={{
          rotate: [0, 14, -8, 14, -4, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      >
        👋
      </motion.span>
    </motion.span>
  )
}
