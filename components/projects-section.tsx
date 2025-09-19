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
      title: "Tutor Club BD",
      description:
        "Bangladesh's largest tutor community network connecting students with verified, experienced tutors. Features include flexible scheduling, progress tracking, and comprehensive subject coverage across 50+ subjects.",
      image: "/projects/tutorclub.png",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
        "React Query",
        "Zustand",
      ],
      liveUrl: "https://tutorclubbd.com",
      githubUrl: "https://github.com/ESRAILHAQUE/tutorclub",
    },
    {
      title: "PVA Supply",
      description:
        "A comprehensive digital accounts marketplace providing verified social media accounts, banking services, and crypto solutions. Features instant delivery, 24/7 support, and premium quality guarantee.",
      image: "/projects/pvasupply.png",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "PayPal",
        "Crypto APIs",
        "JWT",
      ],
      liveUrl: "https://pvasupply.com",
      githubUrl: "https://github.com/ESRAILHAQUE/pvasupply",
    },
    {
      title: "Esas Tec",
      description:
        "Professional technology solutions company specializing in web development, mobile apps, UI/UX design, and cloud solutions. Delivering innovative software that drives business growth.",
      image: "/projects/esastec.png",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
        "Docker",
        "Figma",
      ],
      liveUrl: "https://esastec.com",
      githubUrl: "https://github.com/ESRAILHAQUE/esastec",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const leftProjectVariants = {
    hidden: { opacity: 0, x: -100, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightProjectVariants = {
    hidden: { opacity: 0, x: 100, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileProjectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    <section id="projects" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-pink-500 mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}>
          PROJECTS
        </motion.h2>

        {/* Mobile: Simple stacked layout, Desktop: Timeline layout */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-pink-500 to-cyan-400 opacity-30" />

            {/* Timeline dots with connecting lines */}
            {projects.map((_, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: `${(index * 100) / projects.length}%` }}>
                  {/* Hollow circle */}
                  <div className="w-16 h-16 bg-white border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 p-6 bg-navy-dark rounded-full" />
                  </div>

                  {/* Connecting line to project */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 ${
                      isLeft ? "-left-16" : "-right-16"
                    }`}>
                    {/* Line */}
                    <div
                      className={`w-16 h-0.5 bg-gradient-to-r ${
                        isLeft
                          ? "from-cyan-400 to-transparent"
                          : "from-transparent to-cyan-400"
                      }`}
                    />

                    {/* Arrow */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                        isLeft
                          ? "left-0 border-t-[4px] border-b-[4px] border-r-[8px] border-t-transparent border-b-transparent border-r-cyan-400"
                          : "right-0 border-t-[4px] border-b-[4px] border-l-[8px] border-t-transparent border-b-transparent border-l-cyan-400"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 lg:space-y-16">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const variants = isLeft
                ? leftProjectVariants
                : rightProjectVariants;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}>
                  {/* Project card */}
                  <div
                    className={`w-full max-w-lg mx-auto lg:mx-0 ${
                      isLeft ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                    }`}>
                    <motion.div
                      className="bg-navy-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all group"
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                        transition: { duration: 0.3 },
                      }}>
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <motion.div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-pink-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          variants={imageVariants}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.5 },
                          }}
                        />
                      </div>

                      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                        <motion.h3
                          className="text-lg md:text-xl font-semibold text-white"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                          }}>
                          {project.title}
                        </motion.h3>

                        <motion.p
                          className="text-gray-400 text-sm md:text-sm leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1,
                          }}>
                          {project.description}
                        </motion.p>

                        <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
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

                        <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <Button
                              asChild
                              size="sm"
                              className="bg-pink-500 hover:bg-pink-600 text-white transition-all text-xs md:text-sm px-3 md:px-4 py-2">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                DETAILS
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
