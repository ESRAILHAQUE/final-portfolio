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
  invert?: boolean;
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
      {
        name: "Next.js",
        level: 88,
        image: "/next.png",
        category: "Frontend",
        invert: true,
      },
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
      {
        name: "Prisma",
        level: 78,
        image: "/prisma.png",
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

  const leftCardVariants = {
    hidden: { opacity: 0, x: -20, y: 30, scale: 0.95 },
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

  const rightCardVariants = {
    hidden: { opacity: 0, x: 20, y: 30, scale: 0.95 },
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

  return (
    <section
      id="skills"
      className="py-12 md:py-24 bg-navy-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
            A curated stack I love building with — modern, performant, and
            delightful.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          {ALL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-3 md:px-4 py-1.5 text-xs md:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {filteredSkills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            const variants = isLeft ? leftCardVariants : rightCardVariants;

            return (
              <motion.div
                key={skill.name}
                variants={variants}
                whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-3 md:p-4 backdrop-blur-sm">
                {/* Gradient outline on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(56,189,248,0.25), rgba(236,72,153,0.25))",
                    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  }}
                />

                {/* Aura glow */}
                <div
                  className="absolute -inset-8 md:-inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(120px 80px at 20% 20%, rgba(56,189,248,0.15), transparent), radial-gradient(120px 80px at 80% 80%, rgba(236,72,153,0.12), transparent)",
                  }}
                />

                <div className="relative flex items-center gap-2 md:gap-3">
                  {/* Icon chip */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                    <div
                      className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-tr from-cyan-400/20 to-pink-500/20"
                      aria-hidden
                    />
                    <div className="absolute inset-[3px] md:inset-[4px] rounded-lg md:rounded-xl bg-navy/80 border border-white/10 flex items-center justify-center">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={80}
                        height={80}
                        className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain ${
                          skill.invert ? "invert" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                      <h3 className="text-xs md:text-sm lg:text-base font-semibold text-white whitespace-normal break-words">
                        {skill.name}
                      </h3>
                      <span className="text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {skill.category}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] md:text-xs text-gray-400 line-clamp-2">
                      Building modern interfaces and systems with {skill.name}.
                    </p>
                  </div>
                </div>

                {/* Shine */}
                <motion.div
                  className="pointer-events-none absolute -top-6 md:-top-8 -left-6 md:-left-8 h-16 md:h-24 w-16 md:w-24 rounded-full bg-white/10 blur-2xl"
                  animate={isInView ? { x: [0, 20, 0], y: [0, -10, 0] } : {}}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-48 w-[80%] -translate-x-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
          <div className="absolute right-10 bottom-0 h-40 w-40 bg-pink-500/10 blur-2xl rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(1000px_200px_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />
        </div>
      </div>
    </section>
  );
}
