import { RouterLink } from "../components/RouterLink"
import { IMAGES } from "../utils/image"
import { ICONS } from "../utils/icons"

const { lpPatins, adivinhe, velotask } = IMAGES
const { link, github } = ICONS

export function Frontend() {
  return (
    <div className="px-6 my-7 md:my-15">
      <h1 className="text-purple-700 font-bold text-2xl md:text-[40px] text-center mb-4">
        Projetos Frontend
      </h1>
      <p className="text-gray-400 text-[16px] text-center mb-7 md:mb-15">
        Crio experiências digitais modernas com React, unindo design,
        performance e usabilidade.
      </p>
      <section className="flex flex-col justify-self-center gap-15 md:gap-20">
        <div className="flex flex-col gap-4 md:gap-6 md:items-center md:flex-row">
          <img
            src={lpPatins.laPatins}
            alt={lpPatins.alt}
            className="rounded-lg"
          />
          <div className="md:w-112.5">
            <h2 className="text-gray-200 font-bold text-lg md:text-2xl mb-2.5">
              Lading page de patins animados.
            </h2>
            <p className="text-gray-400 text-[16px]">
              Nesse projeto desenvolvi uma lading page de patins animados e com
              transições suaves.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">HTML</span>
              </div>
              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">CSS</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 md:flex-row">
              <RouterLink
                url="https://evelynnbr.github.io/Snitap/"
                variant="base"
                icon={link.icon}
                alt={link.alt}
                legend="Ver Projeto"
                className="bg-gray-50 border-none text-gray-950"
              />

              <RouterLink
                url="https://github.com/EvelynnBR/Snitap"
                variant="base"
                icon={github.icon}
                alt={github.alt}
                legend="Repositório"
                className="bg-gray-950 border-gray-700 text-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 md:items-center md:flex-row">
          <img
            src={adivinhe.adivinhe}
            alt={adivinhe.alt}
            className="rounded-lg"
          />
          <div className="md:w-112.5">
            <h2 className="text-gray-200 font-bold text-lg md:text-2xl mb-2.5">
              Adivinhe - Adivinhação de Palavras
            </h2>
            <p className="text-gray-400 text-[16px]">
              Um jogo interativo de adivinhação de palavras desenvolvido com
              React e TypeScript.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">React</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">TypeScript</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">Vite</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">CSS</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 md:flex-row">
              <RouterLink
                url="https://adivinhe-dev.netlify.app/"
                variant="base"
                icon={link.icon}
                alt={link.alt}
                legend="Ver Projeto"
                className="bg-gray-50 border-none text-gray-950"
              />

              <RouterLink
                url="https://github.com/EvelynnBR/adivinhe"
                variant="base"
                icon={github.icon}
                alt={github.alt}
                legend="Repositório"
                className="bg-gray-950 border-gray-700 text-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 md:items-center md:flex-row">
          <img
            src={velotask.velotask}
            alt={velotask.alt}
            className="rounded-lg"
          />
          <div className="md:w-112.5">
            <h2 className="text-gray-200 font-bold text-lg md:text-2xl mb-2.5">
              Velotask - Gerenciador de tarefas
            </h2>
            <p className="text-gray-400 text-[16px]">
              O VeloTask é uma plataforma desenvolvida para simplificar a
              organização pessoal e profissional.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">React</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">TypeScript</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">Vite</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">TailwindCSS</span>
              </div>

              <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                <span className="text-gray-300 text-xs">React Router</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 md:flex-row">
              <RouterLink
                url="https://velotask.vercel.app/"
                variant="base"
                icon={link.icon}
                alt={link.alt}
                legend="Ver Projeto"
                className="bg-gray-50 border-none text-gray-950"
              />

              <RouterLink
                url="https://github.com/EvelynnBR/velotask-web"
                variant="base"
                icon={github.icon}
                alt={github.alt}
                legend="Repositório"
                className="bg-gray-950 border-gray-700 text-gray-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
