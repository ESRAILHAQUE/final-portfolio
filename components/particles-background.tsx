"use client"

import { useCallback, useEffect, useState } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export function ParticlesBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, [])

  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#0d1123",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#38bdf8", "#ffffff", "#ec4899"],
          },
          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.5,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
