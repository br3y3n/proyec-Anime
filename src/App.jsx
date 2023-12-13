import { BrowserRouter, useRoutes } from "react-router-dom"
import {Home} from "./Pages/Home"
import { Anime } from "./Pages/Anime"
import { AnimeDetails } from "./Components/Anime/AnimeDatail"
import { Search } from "./Pages/Search/Index"
import { Biography } from "./Pages/Biography"
import { NotFound } from "./Pages/NotFound"
import { Crud } from "./Components/Crud"
import NavList from "./Components/NavBar"
import { AnimeUpdate } from "./Components/Crud/Update"




function App() {
  //routes for use all app
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element:<Home/>},
      { path: "/anime", element: <Anime/>},
      { path: "block", element: <Search/> },
      { path: "biography", element: <Biography /> },
      { path: "anime/characters/:id", element: <AnimeDetails/>},
      { path: "crud", element: <Crud/>},
      { path: "crud/animeUpdate/:id", element:<AnimeUpdate/>},
      { path: "*", element: <NotFound /> }
    ])
    return routes
  }

  return (
    <BrowserRouter>
      <NavList/>
      <AppRoutes />

    </BrowserRouter>
  )
}

export default App
