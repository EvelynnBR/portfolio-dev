import { IMAGES } from "../utils/image"

const { gitEGitHub, htmlECss, javascript, node, react, fullstack } =
  IMAGES.certificado

const certificate = [
  {
    id: "1",
    img: gitEGitHub.image,
    alt: gitEGitHub.alt,
    title: "O Básico de Git e GitHub",
    paragraph: `Git, comandos básicos, repositórios, comandos para trabalhar local, comandos pra trabalhar com repositórios remotos, criação de commits, GitHub, controle de versão com o GitHub.`,
  },

  {
    id: "2",
    img: htmlECss.image,
    alt: htmlECss.alt,
    title: "Fundamentos de HTML e CSS",
    paragraph: `Estrutura do HTML, tags HTML, semântica, acessibilidade, conceitos de CSS, seletores CSS, animações em CSS, grid e flexbox, formulários, inputs, variáveis em CSS, responsividade.`,
  },

  {
    id: "3",
    img: javascript.image,
    alt: javascript.alt,
    title: "JavaScript",
    paragraph: `Sintaxe básica, tipos de dados, operadores, variáveis, controle de uxo (if, else, switch), laços (for, while,
      do...while), funções, arrays, objetos, manipulação do DOM, eventos, callbacks, promessas, async/await, escopo,
      hoisting, classes e herança, módulos, funções assíncronas, pacotes, APIs, JSON, compiladores, bundlers, JavaScript
      antes do framework`,
  },

  {
    id: "4",
    img: node.image,
    alt: node.alt,
    title: "Introdução ao Node.js",
    paragraph: `Fundamentos do Node.js, desenvolvimento de APIs REST com Express, TypeScript, gerenciamento de
      bancos de dados com PostgreSQL e Prisma, autenticação e autorização, testes automatizados, uso de containers
      com Docker e deploy de aplicações Node.js.`,
  },

  {
    id: "5",
    img: react.image,
    alt: react.alt,
    title: "Introdução ao React",
    paragraph: `Certificações focadas em desenvolvimento full-stack, cobrindo frontend, backend, APIs, bancos de dados e boas práticas modernas. Formação contínua orientada a projetos reais, código limpo e aplicações escaláveis.`,
  },

  {
    id: "6",
    img: fullstack.image,
    alt: fullstack.alt,
    title: "especialização/formação em Fullstack",
    paragraph: `Fundamentos da programação Web, Configuração  de ambiente de desenvolvimento, Git e Github,
      Fundamentos e conceitos avançados de HTML, CSS e JavaScript, Fundamentos do TypeScript, Desenvolvimento de
      aplicações back-end com Node.js, Desenvolvimento de aplicações front-end com React, Banco de dados, Docker,
      Testes automatizados, Tailwind CSS, Requisições HTTP e APIs, Deploy de aplicações front-end e back-end.`,
  },
]

export function Certificates() {
  return (
    <div className="px-6 my-7 md:my-15">
      <h1 className="text-purple-700 font-bold text-2xl md:text-[40px] text-center mb-4">
        Certificações Full-Stack
      </h1>
      <p className="text-gray-400 text-[16px] text-center mb-7 md:mb-15">
        Certificações focadas em desenvolvimento full-stack, cobrindo frontend,
        backend, APIs, bancos de dados e boas práticas modernas. Formação
        contínua orientada a projetos reais, código limpo e aplicações
        escaláveis.
      </p>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-6 lg:justify-center lg:flex-wrap">
        {certificate.map((prev) => (
          <div
            id={prev.id}
            className="flex flex-col bg-gray-900 w-fit mx-auto lg:mx-0 rounded-2xl"
          >
            <img
              src={prev.img}
              alt={prev.alt}
              className="w-full md:w-120 rounded-t-2xl"
            />
            <div className="flex flex-col w-full md:w-120 p-6">
              <h2 className="text-center font-bold text-purple-700 text-[20px] mb-3">
                {prev.title}
              </h2>
              <span className="text-gray-400 text-[16px]">
                {prev.paragraph}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
