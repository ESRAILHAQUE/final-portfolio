"use client"

import { useEffect } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  speed?: number
}

export function AnimatedText({ text, className = "", once = true, delay = 0, speed = 0.05 }: AnimatedTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const wordVariants: Variants = {
    hidden: {},
    visible: {},
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * speed + delay,
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.p
      ref={ref}
      aria-label={text}
      role="heading"
      className={`w-full inline-block ${className}`}
      initial="hidden"
      animate={controls}
      variants={wordVariants}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          custom={index}
          variants={letterVariants}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  )
}
