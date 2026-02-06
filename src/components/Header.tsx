import { useState } from "react"

import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { ICONS } from "../utils/icons"

const { nav } = ICONS

export function Header() {
  const [navMobile, setNavMobile] = useState(false)
  return (
    <header className="flex justify-between p-4 lg:p-8">
      <h1 className="flex md:flex text-gray-100 font-bold text-lg">
        Evelyn Bezerra
      </h1>
      <nav className="relative">
        <button
          type="button"
          onClick={() => setNavMobile(true)}
          className="md:hidden cursor-pointer"
        >
          <img src={nav.icon} alt={nav.alt} />
        </button>

        <div
          className={`${navMobile ? "flex" : "hidden"} flex-col absolute bg-gray-900 p-4 right-0 top-0 rounded-lg md:hidden text-gray-200 gap-3 flex-wrap`}
        >
          <Link
            to={"/"}
            onClick={() => setNavMobile(false)}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Home
          </Link>
          <Link
            to={"/frontend"}
            onClick={() => setNavMobile(false)}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Frontend
          </Link>
          <Link
            to={"/backend"}
            onClick={() => setNavMobile(false)}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Backend
          </Link>
          <Link
            to={"/certificates"}
            onClick={() => setNavMobile(false)}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Certificações
          </Link>
          <HashLink
            smooth
            to={"#contact"}
            onClick={() => setNavMobile(false)}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Contato
          </HashLink>
        </div>

        <div className="hidden md:flex text-gray-200 gap-3 flex-wrap">
          <Link
            to={"/"}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Home
          </Link>
          <Link
            to={"/frontend"}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Frontend
          </Link>
          <Link
            to={"/backend"}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Backend
          </Link>
          <Link
            to={"/certificates"}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Certificações
          </Link>
          <HashLink
            smooth
            to={"#contact"}
            className="hover:text-purple-700 transition ease-linear duration-200"
          >
            Contato
          </HashLink>
        </div>
      </nav>
    </header>
  )
}
