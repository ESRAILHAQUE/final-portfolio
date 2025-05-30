"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "esrailbblhs@gmail.com",
      link: "mailto:esrailbblhs@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+8801770480162",
      link: "https://wa.me/8801770480162",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangladesh",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg">
              I'm interested in freelance opportunities and full-time positions. If you have any questions or want to
              work together, feel free to reach out!
            </p>

            <div className="space-y-6 pt-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium mb-4">Let's connect on social media</h4>
              <p className="text-gray-400 text-sm">Follow me for updates on my latest projects and tech insights.</p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-navy-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-navy/80 border-gray-700 focus:border-cyan-400 text-white"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-navy/80 border-gray-700 focus:border-cyan-400 text-white"
                />
              </div>
            </div>

            <div>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-navy/80 border-gray-700 focus:border-cyan-400 text-white"
              />
            </div>

            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="bg-navy/80 border-gray-700 focus:border-cyan-400 text-white"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-navy font-medium w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
