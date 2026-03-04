import { Link } from "react-router-dom"
import { About } from "../components/About"
import { Hero } from "../components/Hero"
import { Skill } from "../components/Skill"

export function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />

      <section className="flex flex-col my-20 px-6 md:justify-self-center md:max-w-240">
        <h2 className="text-[24px] md:text-3xl font-bold text-purple-700 text-center mb-10 z-10">
          Explore meu trabalhos
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to={"/frontend"}
            className="flex flex-col border bg-gray-950 border-gray-100/20 p-4 gap-3.5 md:p-8 rounded-3xl hover:outline-2 hover:outline-purple-600 hover:-translate-y-1 hover:shadow-[0_0px_32px_4px] hover:shadow-purple-950 transition ease-linear z-10"
          >
            <h3 className="text-purple-700 font-bold  text-lg">Frontend</h3>

            <p className="text-gray-400 text-xs md:w-44.5">
              Interfaces Interativas, Dashboards e Web Apps.
            </p>
          </Link>

          <Link
            to={"/backend"}
            className="flex flex-col border bg-gray-950 border-gray-100/20 p-4 gap-3.5 md:p-8 rounded-3xl hover:outline-2 hover:outline-purple-600 hover:-translate-y-1 hover:shadow-[0_0px_32px_4px] hover:shadow-purple-950 transition ease-linear z-10"
          >
            <h3 className="text-purple-700 font-bold  text-lg">Backend</h3>

            <p className="text-gray-400 text-xs md:w-44.5">
              APIs, Banco de Dados e Arquitetura de Servidores.
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}
