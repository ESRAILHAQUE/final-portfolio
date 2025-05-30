"use client"

import { Linkedin, Github, MessageCircle, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Custom Twitter/X icon component
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/md-esrail-haque-a7467b217",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/ESRAILHAQUE",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801770480162",
      icon: MessageCircle,
      color: "hover:text-green-500",
    },
    {
      name: "Twitter",
      href: "https://x.com/HaqueEsrail",
      icon: TwitterIcon,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/md.esrailhaque.71",
      icon: Facebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mdesrailhaque2865",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
  ]

  return (
    <div className="fixed left-6 bottom-0 z-20 hidden md:block">
      <div className="flex flex-col items-center space-y-0 mt-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${social.color} transition-colors p-1  rounded-lg hover:bg-gray-800/50`}
              title={social.name}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          </motion.div>
        ))}
        <div className="h-24 w-px bg-gray-600 mt-4"></div>
      </div>
    </div>
  )
}
