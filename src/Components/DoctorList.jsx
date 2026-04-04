import React from 'react'

import DoctorsCart from './DoctorsCart'
import Flex from "./Flex"

import DoctorPhoto01 from "../assets/Doctor Photo (1).png"


const TopDoctorBook = () => {
  return (
    <>

            <div className="text-center">
                <div className="gap-[20px] !flex-wrap justify-center lg:justify-start pb-[60px]  text-start">
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto01} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                   
                    
                </div>  
            </div>

    </>
  )
}

export default TopDoctorBook

