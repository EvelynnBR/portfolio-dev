import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { type ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Contact } from "./Contact"
import { Footer } from "./Footer"

export function MainLayout() {
  const [loaded, setLoaded] = useState(false)

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "default",
        },
      },
      fpsLimit: 180,
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      
      particles: {
        color: {
          value: ["#5BCEFA", "#F5A9B8", "#FFFFFF"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setLoaded(true)
    })
  }, [])
  return (
    <div className="w-full min-h-screen bg-gray-950">
      {loaded && <Particles id="tsparticles" options={options} />}
      <Header />
      <div className="h-px bg-gray-800 mb-10 md:mb-20"></div>
      <main>
        <Outlet />
      </main>
      <Contact id="contact" />

      <div className="h-px bg-gray-800 mt-10 md:mt-20 mb-8"></div>

      <Footer />
    </div>
  )
}
