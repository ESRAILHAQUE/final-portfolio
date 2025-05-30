"use client"

import { Github, Linkedin, Mail, Heart, MessageCircle, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"

// Custom Twitter/X icon component
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ESRAILHAQUE",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/md-esrail-haque-a7467b217",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Email",
      href: "mailto:esrailbblhs@gmail.com",
      icon: Mail,
      color: "hover:text-cyan-400",
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Esrail Haque</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer passionate about creating scalable web applications with modern technologies and
              clean code.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">📧 esrailbblhs@gmail.com</p>
              <p className="text-sm text-gray-500">📱 +8801770480162</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-gray-800`}
                  title={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Available for freelance work and full-time opportunities</p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Esrail Haque
          </p>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
