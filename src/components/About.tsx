export function About() {
  return (
    <div className="flex flex-col my-20 px-6 md:justify-self-center md:max-w-240">
      <h2 className="text-[24px] z-10 md:text-3xl font-bold text-purple-700 text-center mb-10">
        Sobre Mim
      </h2>

      <div className="flex flex-col text-[16px] text-gray-400 gap-4 z-10">
        <p>
          Sou uma Desenvolvedora Full Stack apaixonada por construir aplicações
          web eficientes, escaláveis e amigáveis. Com uma base sólida tanto em
          tecnologias frontend quanto backend, eu conecto lógica complexa a
          designs bonitos.
        </p>

        <p>
          Quando não estou programando, estou constantemente aprendendo novas
          tecnologias ou contribuindo para projetos open-source. Acredito no
          código limpo, melhoria contínua e no poder da tecnologia para resolver
          problemas do mundo real.
        </p>
      </div>
    </div>
  )
}
