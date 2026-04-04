import React, { createContext, useState } from 'react'
import { doctors, specialityData } from "./assets/assets_frontend/assets"

export const counterContext = createContext()

const MainContext = ({children}) => {

    const [allDoctors, setAllDoctors] = useState(doctors)
    const [speciality, setSpeciality] = useState(specialityData)

    const globalOBJ = { allDoctors, setAllDoctors, speciality, setSpeciality }

  return (
    <counterContext.Provider value={globalOBJ}>
      {children}
    </counterContext.Provider>
  )
}

export default MainContext