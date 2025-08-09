"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Express.js", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather and forecasts for multiple cities with beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Chart.js", "Weather API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with markdown support, comment system, and SEO optimization built with Next.js and headless CMS.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Contentful", "TypeScript", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}>
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-navy-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all"
              variants={projectVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}>
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-pink-500/20 z-10 opacity-0"
                  whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                />
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                />
              </div>

              <div className="p-6 space-y-4">
                <motion.h3
                  className="text-xl font-semibold text-white"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-cyan-400 rounded-md text-xs"
                      variants={techBadgeVariants}
                      custom={techIndex}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(56, 189, 248, 0.2)",
                        transition: { duration: 0.2 },
                      }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-400 hover:bg-gray-800 transition-all">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>
    </section>
  );
}
