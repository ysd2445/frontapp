import React from 'react'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import LoginPage from './components/Login'
import ProtectRoute from './components/protectedroute'
import Browse from './components/Browse'
import SearchPage from './components/SearchPage'
import SignUpPage from './components/SignUp'
import FIrstPage from './components/FIrstPage'
const router = createBrowserRouter([
  {
    path:"/Login",
    element:<ProtectRoute><LoginPage/></ProtectRoute>
  },
  {
    path:"/",
    element:<FIrstPage/>
  },
  {
    path:"/browse",
    element:<ProtectRoute><Browse/></ProtectRoute>
  },
  {
    path:"/search",
    element:<ProtectRoute><SearchPage/></ProtectRoute>
  },
  {
    path:"/signup",
    element:<SignUpPage/>
  },
])
function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
