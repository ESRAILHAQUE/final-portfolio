"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function TechIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  const technologies = [
    {
      name: "MongoDB",
      color: "bg-green-500",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "React",
      color: "bg-blue-400",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Express",
      color: "bg-gray-700",
      image:
        "/express.png",
    },
    {
      name: "Node.js",
      color: "bg-green-600",
      image:
        "/node.png",
    },
    {
      name: "Next.js",
      color: "bg-black",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind",
      color: "bg-cyan-500",
      image:
        "/tailwind.png",
    },
    {
      name: "Bootstrap",
      color: "bg-purple-600",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "PostgreSQL",
      color: "bg-blue-600",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "GraphQL",
      color: "bg-pink-500",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "Redux",
      color: "bg-purple-700",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "TypeScript",
      color: "bg-blue-500",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      color: "bg-yellow-400",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Position icons in a circle
    const icons = container.querySelectorAll(".tech-icon");
    const radius = 140;
    const centerX = 160;
    const centerY = 160;
    const totalIcons = icons.length;

    icons.forEach((icon, index) => {
      const angle = (index / totalIcons) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle) - 25;
      const y = centerY + radius * Math.sin(angle) - 25;

      const htmlIcon = icon as HTMLElement;
      htmlIcon.style.left = `${x}px`;
      htmlIcon.style.top = `${y}px`;
    });
  }, []);

  const iconVariants = {
    initial: { scale: 0, opacity: 0, rotate: -180 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 },
    },
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0, rotate: -90 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const rotatingContainerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  return (
    <div className="relative w-[320px] h-[320px] mx-auto">
      {/* Outer decorative circles */}
      <motion.div
        className="absolute w-[320px] h-[320px] border border-cyan-400/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute w-[280px] h-[280px] border border-pink-500/10 rounded-full top-5 left-5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      {/* Main rotating container */}
      <motion.div
        ref={containerRef}
        className="relative w-[320px] h-[320px]"
        variants={rotatingContainerVariants}
        animate="animate">
        {/* Inner circle border */}
        <motion.div
          className="absolute w-[280px] h-[280px] border-2 border-cyan-400/30 rounded-full top-5 left-5"
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />

        {/* Tech Icons */}
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-icon absolute w-16 h-16 bg-navy-dark/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center cursor-pointer border border-gray-700/50 shadow-lg group"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            custom={index}
            title={tech.name}>
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src={tech.image || "/placeholder.svg"}
                alt={tech.name}
                width={40}
                height={64}
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg?height=32&width=32";
                }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${tech.color
                    .replace("bg-", "")
                    .replace("-500", "")
                    .replace("-400", "")
                    .replace("-600", "")
                    .replace("-700", "")} 0%, transparent 70%)`,
                  filter: "blur(8px)",
                }}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              />
            </div>

            {/* Tooltip */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}>
              {tech.name}
            </motion.div>
          </motion.div>
        ))}

        {/* Center logo/brand */}
        {/* <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}>
          <span className="text-white font-bold text-lg">EH</span>
        </motion.div> */}
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
