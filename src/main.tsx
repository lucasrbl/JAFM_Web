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


const router  = createBrowserRouter([
  { path: "/", element: <Login/> },
  { path: "/register", element: <Login/> },
  { path: "/forgot-my-password", element: <Login/> },
  { path: "/home", element: <Home/>},
  { path: "/profile", element: <Profile/>},

  {/*{ path: "/home", element: <ProtectedRoute><Home/></ProtectedRoute> },
{ path: "/profile", element: <ProtectedRoute><Profile/></ProtectedRoute> }*/},

])

ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
