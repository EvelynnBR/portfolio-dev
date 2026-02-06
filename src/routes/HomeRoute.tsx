import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { MainLayout } from "../components/MainLayout"
import { Frontend } from "../pages/Frontend"
import { Backend } from "../pages/Backend"
import { Certificates } from "../pages/Certificates"
import { NotFound } from "../pages/NotFound"

export function PortfolioRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/Certificates" element={<Certificates />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
