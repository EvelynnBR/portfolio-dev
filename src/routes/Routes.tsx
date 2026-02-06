import { BrowserRouter } from "react-router-dom"

import { PortfolioRoute } from "./HomeRoute"

export function Routes(){
  return(
    <BrowserRouter>
      <PortfolioRoute />
    </BrowserRouter>
  )
}