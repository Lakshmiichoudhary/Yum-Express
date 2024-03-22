import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import store from './Store/Store.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Menu from './Components/Menu.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/home",
        element: <Menu />
      },
      {
      path: "/about",
      element : <About />
      },
      {
        path: "/contact",
        element : <Contact />
      }
    ],
    errorElement: <ErrorPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
)
