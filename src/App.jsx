import { BrowserRouter, useRoutes } from "react-router-dom"
import { Anime} from "./pages/Anime/Anime"
import { Blocks } from "./pages/Blocks/Index"
import NavList from "./Components/navBar"
import { Production } from "./Pages/Productions/Index "
import { NotFound } from "./Pages/NotFound/NotFound"
import { Biography } from "./Pages/Biography/index "
import { AnimeDetails } from "./Components/Anime/AnimeDatail/AnimeDetails"


function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Anime/> },
      { path: "production", element: <Production/> },
      { path: "block", element: <Blocks /> },
      { path: "biography", element: <Biography/>},
      { path: "characters/:id", element: <AnimeDetails/>},
      { path: "*", element: <NotFound/>}
    ])
    return routes
  }

  return (
    <BrowserRouter>
       <NavList/>
      <AppRoutes/>
    
    </BrowserRouter>
  )
}

export default App
