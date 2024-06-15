import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './sections/Login.tsx';
import Home from './sections/Home.tsx';
import Profile from './sections/Profile.tsx';
import LandingPage from './sections/LandingPage.tsx';
import { register } from 'swiper/element/bundle'


const router  = createBrowserRouter([
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Login/> },
  { path: "/forgot-my-password", element: <Login/> },
  { path: "/home", element: <Home/>},
  { path: "/profile", element: <Profile/>},
  { path: "/dashboard", element: <Profile />},
  { path: "/", element: <LandingPage />},

  {/*{ path: "/home", element: <ProtectedRoute><Home/></ProtectedRoute> },
{ path: "/profile", element: <ProtectedRoute><Profile/></ProtectedRoute> }*/},

])

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
