"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { TechIcons } from "@/components/tech-icons"
import { TypingTerminal } from "@/components/typing-terminal"
import { TimeGreeting } from "@/components/time-greeting"
import { AnimatedText } from "@/components/animated-text"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 pt-4">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <div>
              <motion.h2
                className="text-2xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <TimeGreeting />
              </motion.h2>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                I'm <span className="text-cyan-400">Esrail Haque</span>
              </motion.h1>

              <motion.h3
                className="text-3xl md:text-4xl font-bold text-pink-500 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                Full-Stack Developer
              </motion.h3>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <AnimatedText
                  text="Turning ideas into elegant digital experiences"
                  className="text-lg text-gray-300 italic"
                  delay={0.5}
                />
              </motion.div>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-lg mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                I craft digital experiences with clean code and modern
                technologies. Passionate about building scalable web
                applications that make a difference.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                  <a
                    href="/Esrail_Resume.pdf"
                    download="Esrail_Haque_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    RESUME
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-500/10"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  Let's Talk
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}>
              <p className="text-gray-300 mr-2">Do scroll & Explore Me!</p>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}>
                <ChevronDown className="h-4 w-4 text-cyan-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Terminal and Tech Icons */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <TypingTerminal />

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}>
              <TechIcons />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
