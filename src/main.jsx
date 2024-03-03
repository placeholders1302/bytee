import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home';
import StudentProfile from './pages/Profile/StudentProfile';
import TeacherProfile from './pages/Profile/TeacherProfile';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import Search from './pages/Search.jsx/Search';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='user' element={<StudentProfile/>}/>
      <Route path='teacher' element={<TeacherProfile/>}/>
      <Route path='explore' element={<ExplorePage/>}></Route>
      <Route path='search' element={<Search/>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-5tvxg1qkelajs51e.us.auth0.com'
      clientId='6SBKRAzwNXczcC44FkdarWjfqfBtJWlq'
      redirectUri='http://localhost:5173/user'
    >      
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
