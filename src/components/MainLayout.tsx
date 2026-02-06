import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Contact } from "./Contact"
import { Footer } from "./Footer"

export function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-950">
      <Header />
      <div className="h-px bg-gray-800 mb-10 md:mb-20"></div>
      <main>
        <Outlet />
      </main>
      <Contact id="contact" />

      <div className="h-px bg-gray-800 mt-10 md:mt-20 mb-8"></div>

      <Footer />
    </div>
  )
}
