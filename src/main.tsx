import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './sections/Login.tsx';
import Register from './sections/Register.tsx';
import Home from './sections/Home.tsx';
import Profile from './sections/Profile.tsx';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },

  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/home",
    element: <Home/>
  },

  {
    path: "/profile",
    element: <Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
