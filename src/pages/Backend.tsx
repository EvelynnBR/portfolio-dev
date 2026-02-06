import { RouterLink } from "../components/RouterLink"

import { ICONS } from "../utils/icons"

const { taskManager, github, creditCard } = ICONS

const projects = [
  {
    id: 1,
    icon: taskManager.icon,
    alt: taskManager.alt,
    title: "API — Gerenciador de Tarefas",
    description:
      "Arquiteturas robustas e APIs escaláveis. Desenvolvo APIs robustas e escaláveis com foco em alta performance, segurança e integrações eficientes. Construo backends sólidos, bem arquitetados e prontos para crescer junto com o produto.",
    tech: [
      {
        node: "Node.js",
        express: "Express",
        ts: "Typescript",
        prisma: "Prisma ORM",
        postgres: "PostgreSQL",
        docker: "Docker",
      },
    ],

    url: "https://github.com/EvelynnBR/Task-manager",
    variant: "base",
    iconLink: github.icon,
    altLink: github.alt,
    legend: "Repositório",
  },

  {
    id: 2,
    icon: creditCard.icon,
    alt: creditCard.alt,
    title: "API — Refund",
    description:
      "API completa para gerenciamento de solicitações de reembolso corporativo, desenvolvida com as melhores práticas e tecnologias modernas do ecossistema Node.js",
    tech: [
      {
        node: "Node.js",
        ts: "Typescript",
        express: "Express",
        prisma: "Prisma ORM",
        postgres: "SQLite",
      },
    ],

    url: "https://github.com/EvelynnBR/refund_api",
    variant: "base",
    iconLink: github.icon,
    altLink: github.alt,
    legend: "Repositório",
  },
]

export function Backend() {
  return (
    <div className="px-6 my-7 md:my-15">
      <div>
        <h1 className="text-purple-700 font-bold text-2xl md:text-[40px] text-center mb-4">
          Sistemas Backend
        </h1>
        <p className="text-gray-400 text-[16px] mb-7 md:mb-15 md:max-w-157 md:mx-auto">
          Arquiteturas robustas e APIs escaláveis. Desenvolvo APIs robustas e
          escaláveis com foco em alta performance, segurança e integrações
          eficientes. Construo backends sólidos, bem arquitetados e prontos para
          crescer junto com o produto.
        </p>

        <section className="flex flex-col justify-center items-center gap-15">
          {projects.map((prev) => (
            <div className="bg-gray-800/50 rounded-3xl p-4 md:p-8 md:max-w-206.5 border border-gray-700">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-950 w-fit p-2 rounded-lg border-2 border-gray-600">
                  <img src={prev.icon} alt={prev.alt} />
                </div>
                <h1 className="font-bold text-gray-100">{prev.title}</h1>
              </div>

              <p className="text-[16px] text-gray-400 mt-6">
                {prev.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {prev.tech?.map((techObj) =>
                  Object.values(techObj).map((tech) => (
                    <div className="bg-gray-950 w-fit p-1.5 rounded-lg border border-gray-600">
                      <span key={tech} className="text-gray-300 text-xs">
                        {tech}
                      </span>
                    </div>
                  )),
                )}
              </div>

              <RouterLink
                url={prev.url}
                variant="base"
                icon={prev.iconLink}
                alt={prev.altLink}
                legend={prev.legend}
                className="bg-gray-950 border-gray-700 text-gray-100 mt-6 md:mt-10"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
