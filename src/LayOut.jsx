import React from 'react'
import NavBer from './Components/NavBer'
import FooterSection from './Components/FooterSection'

import { Outlet } from 'react-router-dom'


const LayOut = () => {
  return (
    <>
    <NavBer/>
      <Outlet/>
    <FooterSection/>
    </>
  )
}

export default LayOut
