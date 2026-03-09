import React from 'react'
import LayOut from './LayOut';

import Home from './Page/Home'
import About from './Page/About'
import SignIn from "./Page/SignIn"
import SignUp from "./Page/SignUp"
import AllDoctors from "./Page/AllDoctors"
import Contact from "./Page/Contact"

// *! React DOM Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AllPage = createBrowserRouter([
  {path: "/", 
  Component: LayOut,
  children:[
    {index: true, Component: Home},
    {path:"about", Component: About},
    {path:"alldoctors", Component: AllDoctors},
    {path:"contact", Component: Contact},
    {path:"signin", Component: SignIn},
    {path:"signup", Component: SignUp},
  ]
}
])

const App = () => {
  return (
    <div>
      <RouterProvider router={AllPage}/>
    </div>
  )
}

export default App
