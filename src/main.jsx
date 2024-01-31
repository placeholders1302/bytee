import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import App from "./components/Home/App"
import SignInSide from './components/SignIn/SignInSide'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Explore from './components/Explore/Explore'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='login' element={<SignInSide/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
