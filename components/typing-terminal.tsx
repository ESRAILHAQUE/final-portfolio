"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import { motion } from "framer-motion"

export function TypingTerminal() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)

  const codeLines = [
    "$ npm create next-app@latest portfolio",
    "$ cd portfolio && npm install",
    "$ npm install framer-motion",
    "$ code .",
    "",
    "// Building something amazing...",
    "const developer = {",
    "  name: 'Esrail Haque',",
    "  stack: ['MongoDB', 'Express', 'React', 'Node'],",
    "  frontend: ['Next.js', 'TypeScript', 'Tailwind'],",
    "  backend: ['GraphQL', 'PostgreSQL', 'Redux'],",
    "  passion: 'Creating digital experiences',",
    "  status: 'Available for hire' ✨",
    "};",
    "",
    "console.log('Ready to build amazing things!');",
    "> Ready to build amazing things! 🚀",
  ]

  useEffect(() => {
    if (!isTyping) return

    const timer = setTimeout(
      () => {
        const currentLine = codeLines[currentLineIndex]

        if (currentCharIndex < currentLine.length) {
          // Typing current line
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1)
            return newLines
          })
          setCurrentCharIndex((prev) => prev + 1)
        } else {
          // Move to next line
          if (currentLineIndex < codeLines.length - 1) {
            setCurrentLineIndex((prev) => prev + 1)
            setCurrentCharIndex(0)
            setDisplayedLines((prev) => [...prev, ""])
          } else {
            // Finished typing, restart after delay
            setTimeout(() => {
              setCurrentLineIndex(0)
              setCurrentCharIndex(0)
              setDisplayedLines([])
            }, 3000)
          }
        }
      },
      currentCharIndex === 0 && codeLines[currentLineIndex] === "" ? 500 : Math.random() * 100 + 50,
    )

    return () => clearTimeout(timer)
  }, [currentLineIndex, currentCharIndex, isTyping, codeLines])

  return (
    <motion.div
      className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl max-w-2xl"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Terminal Header */}
      <motion.div
        className="bg-gray-800 px-4 py-3 flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="flex space-x-2">
          <motion.div
            className="w-3 h-3 bg-red-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
          <motion.div
            className="w-3 h-3 bg-yellow-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </div>
        <motion.div
          className="flex items-center space-x-2 ml-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <Terminal className="h-4 w-4 text-gray-400" />
          <span className="text-gray-400 text-sm">terminal</span>
        </motion.div>
      </motion.div>

      {/* Terminal Content */}
      <motion.div
        className="p-4 h-80 overflow-hidden font-mono text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            className="mb-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className={getLineColor(line, index)}>{line}</span>
            {index === currentLineIndex && (
              <motion.span
                className="bg-cyan-400 text-gray-900"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                ▋
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function getLineColor(line: string, index: number): string {
  if (line.startsWith("$")) return "text-green-400"
  if (line.startsWith("//")) return "text-gray-500"
  if (line.includes("const") || line.includes("console")) return "text-purple-400"
  if (line.includes(":")) return "text-cyan-400"
  if (line.includes("'") || line.includes('"')) return "text-yellow-400"
  if (line.startsWith(">")) return "text-green-300"
  return "text-gray-300"
}
