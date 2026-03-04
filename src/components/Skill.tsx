import { ICONS } from "../utils/icons"

const {
  html,
  css,
  js,
  ts,
  react,
  vite,
  tailwindcss,
  node,
  express,
  zod,
  prisma,
  jwt,
  bcrypt,
  postgres,
  docker,
  git,
  github,
} = ICONS

export function Skill() {
  return (
    <div className="flex flex-col mt-20 justify-self-center px-6">
      <h2 className="text-[24px] md:text-3xl font-bold text-purple-700 text-center mb-10 z-10">
        Minhas Habilidades
      </h2>

      <div className="flex flex-wrap justify-center md:justify-start gap-2.5 max-w-150 z-10">
        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={html.icon} alt={html.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">HTML</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={css.icon} alt={css.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">CSS</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={js.icon} alt={js.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">JavaScript</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={ts.icon} alt={ts.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">TypeScript</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={react.icon} alt={react.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">React</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={vite.icon} alt={vite.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Vite</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img
            src={tailwindcss.icon}
            alt={tailwindcss.alt}
            className="w-10 mb-1.5"
          />
          <p className="text-gray-400 font-bold text-xs">Tailwind CSS</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={node.icon} alt={node.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Node.js</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={express.icon} alt={express.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Express</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={zod.icon} alt={zod.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Zod</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={prisma.icon} alt={prisma.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Prisma ORM</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={jwt.icon} alt={jwt.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">JWT</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={bcrypt.icon} alt={bcrypt.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Bcrypt</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={postgres.icon} alt={postgres.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">PostgreSQL</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={docker.icon} alt={docker.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Docker</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={git.icon} alt={git.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">Git</p>
        </div>

        <div className="flex flex-col bg-gray-900 w-26 p-3 rounded-lg border-2 border-gray-600 justify-center items-center">
          <img src={github.icon} alt={github.alt} className="w-10 mb-1.5" />
          <p className="text-gray-400 font-bold text-xs">GitHub</p>
        </div>
      </div>
    </div>
  )
}
