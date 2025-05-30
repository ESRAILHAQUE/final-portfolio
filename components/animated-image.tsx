"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function AnimatedImage({
  src,
  alt,
  className = "",
  width = 400,
  height = 400,
  priority = false,
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <motion.div
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 opacity-75 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.div
        className="relative overflow-hidden rounded-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
