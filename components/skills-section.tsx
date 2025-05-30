"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST API", level: 85 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    }),
  }

  return (
    <section id="skills" className="py-20 bg-navy-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div key={groupIndex} className="space-y-6" variants={categoryVariants}>
              <motion.h3
                className="text-xl font-semibold text-white mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                {skillGroup.category}
              </motion.h3>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    variants={skillVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between">
                      <motion.span
                        className="text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        className="text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.2 + skillIndex * 0.1 + 0.2 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="relative w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-lg"
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                        whileHover={{
                          boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                          transition: { duration: 0.3 },
                        }}
                      />

                      {/* Animated glow effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full opacity-50 blur-sm"
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
