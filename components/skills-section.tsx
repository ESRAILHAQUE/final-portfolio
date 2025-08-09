"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type SkillCategory = "Frontend" | "Backend";

type Skill = {
  name: string;
  level: number; // 0 - 100
  image: string;
  category: SkillCategory;
};

const ALL_CATEGORIES: Array<"All" | SkillCategory> = [
  "All",
  "Frontend",
  "Backend",
];

export function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] =
    useState<(typeof ALL_CATEGORIES)[number]>("All");

  const skills: Skill[] = useMemo(
    () => [
      // Frontend
      { name: "JavaScript", level: 92, image: "/js.png", category: "Frontend" },
      { name: "TypeScript", level: 86, image: "/ts.png", category: "Frontend" },
      { name: "React", level: 92, image: "/react.png", category: "Frontend" },
      { name: "Next.js", level: 88, image: "/next.png", category: "Frontend" },
      {
        name: "Tailwind CSS",
        level: 90,
        image: "/tailwind.png",
        category: "Frontend",
      },
      { name: "Redux", level: 82, image: "/redux.png", category: "Frontend" },
      { name: "Bootstrap", level: 78, image: "/bs.png", category: "Frontend" },
      // Backend
      { name: "Node.js", level: 86, image: "/node.png", category: "Backend" },
      {
        name: "Express.js",
        level: 84,
        image: "/express.png",
        category: "Backend",
      },
      { name: "MongoDB", level: 82, image: "/mongo.png", category: "Backend" },
      {
        name: "PostgreSQL",
        level: 72,
        image: "/postgresql.png",
        category: "Backend",
      },
    ],
    []
  );

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [skills, activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 bg-navy-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A selection of tools I use to craft performant, scalable, and
            delightful user experiences.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {ALL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}>
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4 sm:p-5 backdrop-blur-sm">
              {/* Subtle glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.15), transparent 40%)",
                }}
              />

              <div className="flex items-center gap-3 sm:gap-4">
                {/* Circular progress with image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div
                    className="absolute inset-0 rounded-full"
                    aria-hidden
                    style={{
                      background: `conic-gradient(rgba(56,189,248,0.9) ${
                        skill.level * 3.6
                      }deg, rgba(56,189,248,0.12) 0deg)`,
                    }}
                  />
                  <div className="absolute inset-1 rounded-full bg-navy/80 border border-white/10 flex items-center justify-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                    {skill.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-1.5 w-20 sm:w-24 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                      />
                    </div>
                    <span className="text-xs text-gray-400 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-48 w-[80%] -translate-x-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
          <div className="absolute right-10 bottom-0 h-40 w-40 bg-pink-500/10 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
