import { BrowserRouter, useRoutes } from "react-router-dom"
import { Anime} from "./pages/Anime/Anime"
import { Blocks } from "./pages/Blocks/Index"
import NavList from "./Components/navBar"
import { Production } from "./Pages/Productions/Index "
import { NotFound } from "./Pages/NotFound/NotFound"
import { Biography } from "./Pages/Biography/index "


function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Anime/> },
      { path: "production", element: <Production/> },
      { path: "block", element: <Blocks /> },
      { path: "biography", element: <Biography/>},
      { path: "*", element: <NotFound/>}
    ])
    return routes
  }
  return (
    <BrowserRouter>
      <AppRoutes/>
       <NavList/>
    
    </BrowserRouter>
  )
}

export default App
