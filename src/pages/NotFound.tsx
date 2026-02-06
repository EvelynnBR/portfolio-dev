import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen bg-gray-950 justify-center items-center">
      <h1 className="font-bold text-2xl text-gray-100 text-center">
        Ops! parece que você acessou uma URl inválida😅
      </h1>

      <Link
        to={"/"}
        className="text-gray-400 font-bold border border-gray-700 p-2 rounded-lg "
      >
        Voltar para a pagina inicial
      </Link>
    </div>
  )
}
