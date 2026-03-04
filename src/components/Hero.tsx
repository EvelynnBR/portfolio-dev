import { HashLink } from "react-router-hash-link"
import { IMAGES } from "../utils/image"
import cv from "../files/CV-Evelyn-Bezerra-Ramos.pdf"

const { profile } = IMAGES

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row px-6 justify-self-center gap-4 md:12 md:gap-8">
      <div className="flex flex-col z-10 mx-auto w-full md:w-105 md:mt-15">
        <span className="flex flex-col text-purple-500 text-center mb-4">
          Desenvolvedora Full-Stack
        </span>
        <h1 className="text-gray-100 font-bold text-4xl text-center md:text-start md:text-6xl mb-3">
          Evelyn Bezerra
        </h1>
        <p className="text-gray-400 text-lg">
          Criando sistemas de backend robustos e experiências de frontend
          intuitivas com clareza e propósito. Transformando ideias complexas em
          soluções elegantes.
        </p>
        <div className="flex mt-8 md:mt-16 gap-4 md:gap-8">
          <HashLink
            smooth
            to={"#contact"}
            className="flex flex-col h-8 md:h-10 px-1.5 items-center rounded-lg text-gray-200 justify-center font-medium w-full md:w-fit hover:opacity-75 transition ease-linear bg-purple-800"
          >
            Entre em contato
          </HashLink>
          <a
            href={cv}
            download
            className="flex flex-col h-8 md:h-10 px-1.5 items-center rounded-lg text-gray-200 justify-center font-medium w-full md:w-fit hover:opacity-75 transition ease-linear border-2 border-purple-800 bg-transparent hover:cursor-pointer"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
      <img
        src={profile.profile}
        alt={profile.alt}
        className="flex flex-col z-10 mx-auto mt-8 md:m-0 w-101.75 h-121.25 rounded-3xl"
      />
    </div>
  )
}
