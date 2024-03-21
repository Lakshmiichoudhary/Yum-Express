import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Components/Login"
import Menu from "./Components/Menu"

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login />
    },
    {
      path:"/home",
      element: <Menu />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

