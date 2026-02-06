import { RouterLink } from "./RouterLink"
import { ICONS } from "../utils/icons"

const { whatsapp, gmail, github, linkedin, instagram } = ICONS

type Props = {
  id: string
}

export function Contact({ id }: Props) {
  return (
    <div>
      <h2 className="text-[24px] md:text-3xl font-bold text-purple-700 text-center mb-10">
          Contato
        </h2>
      <div
        id={id}
        className="flex flex-col md:flex-row justify-self-center bg-gray-900/40 border border-gray-800 lg:w-179.75 md:justify-between md:items-center md:rounded-3xl"
      >
        <div className="flex flex-col md:w-110 p-6 justify-center items-center">
          <h2 className="text-purple-700 text-[17px] md:text-[20px] font-bold text-center mb-2 md:mb-4">
            Ideias ousadas merecem código à altura.
          </h2>
          <p className="text-gray-400">
            Estou disponível para novos projetos freelance e oportunidades
            full-time. Me mande um email e vamos conversar sobre sua ideia.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 w-full">
            <RouterLink
              variant="whatsapp"
              url="https://wa.me/5599999999999?text=Olá, gostaria de mais informações"
              icon={whatsapp.icon}
              alt={whatsapp.alt}
              legend="(98) 9 8426-4190"
            />

            <RouterLink
              variant="base"
              url="https://mail.google.com/mail/?view=cm&fs=1&to=evelynnbr24@gmail.com.com&su=Assunto&body=Olá, gostaria de falar com você"
              icon={gmail.icon}
              alt={gmail.alt}
              legend="evelynnbr24@gmail.com"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-900 gap-6 md:w-fit md:h-fit p-4 md:p-6 md:rounded-3xl md:mr-6">
          <p className="text-gray-400">Minhas redes</p>

          <div className="flex gap-2 md:gap-4">
            <a
              href="https://github.com/EvelynnBR/"
              target="_blank"
              className="md:hover:opacity-75 transition ease-linear"
            >
              <div className="bg-gray-950 w-fit p-3 rounded-lg border-2 border-gray-600">
                <img src={github.icon} alt={github.alt} className="w-6" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/evelynbrdev/"
              target="_blank"
              className="md:hover:opacity-75 transition ease-linear "
            >
              <div className="bg-gray-950 w-fit p-3 rounded-lg border-2 border-gray-600">
                <img src={linkedin.icon} alt={linkedin.alt} className="w-6" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/evelynnbr23"
              target="_blank"
              className="md:hover:opacity-75 transition ease-linear "
            >
              <div className="bg-gray-950 w-fit p-3 rounded-lg border-2 border-gray-600">
                <img src={instagram.icon} alt={instagram.alt} className="w-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
