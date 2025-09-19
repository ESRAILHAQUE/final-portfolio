"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Code, Rocket } from "lucide-react";
import { TypingTerminal } from "@/components/typing-terminal";
import { TimeGreeting } from "@/components/time-greeting";
import { AnimatedText } from "@/components/animated-text";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden py-8 md:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* Left Column - Enhanced Text Content */}
          <motion.div
            className="space-y-4 md:space-y-6 lg:space-y-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* Greeting with Icon */}
            <motion.div
              className="flex items-center gap-2 md:gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
              </motion.div>
              <h2 className="text-lg md:text-2xl font-medium text-gray-300">
                <TimeGreeting />
              </h2>
            </motion.div>

            {/* Main Title with Gradient */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}>
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Esrail Haque
                </span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-1 md:gap-2 lg:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}>
                <Code className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-pink-500" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack Developer
                </h3>
                <Rocket className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-pink-500" />
              </motion.div>
            </div>

            {/* Animated Tagline */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 rounded-lg blur-sm" />
              <div className="relative bg-navy-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-2 md:p-3 lg:p-4">
                <AnimatedText
                  text="Turning ideas into elegant digital experiences"
                  className="text-sm md:text-lg lg:text-xl text-gray-200 font-medium"
                  delay={0.5}
                />
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              className="space-y-2 md:space-y-3 lg:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                I craft digital experiences with clean code and modern
                technologies. Passionate about building scalable web
                applications that make a difference.
              </p>

              {/* Stats */}
              <div className="flex gap-3 md:gap-6 lg:gap-8 pt-2 md:pt-3 lg:pt-4">
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-cyan-400">
                    50+
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-pink-500">
                    4+
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-purple-500">
                    100%
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <Button className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-3 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 rounded-lg transition-all duration-300 text-xs md:text-sm lg:text-base w-full sm:w-auto">
                  <a
                    href="/Esrail_Resume.pdf"
                    download="Esrail_Haque_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    📄 Download Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <Button
                  className="relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-3 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 rounded-lg transition-all duration-300 text-xs md:text-sm lg:text-base w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  💬 Let's Talk
                </Button>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center pt-4 md:pt-6 lg:pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}>
              <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
                Scroll to explore
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <ChevronDown className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-cyan-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Terminal Only */}
          <motion.div
            className="mt-6 md:mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            {/* Terminal with Glow Effect */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}>
              <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 rounded-lg sm:rounded-xl md:rounded-2xl blur-xl" />
              <div className="relative">
                <TypingTerminal />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
