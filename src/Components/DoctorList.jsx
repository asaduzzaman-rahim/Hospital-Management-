import React from 'react'

import DoctorsCart from './DoctorsCart'
import Flex from "./Flex"

import DoctorPhoto01 from "../assets/Doctor Photo (1).png"
import DoctorPhoto02 from "../assets/Doctor Photo (2).png"
import DoctorPhoto03 from "../assets/Doctor Photo (3).png"
import DoctorPhoto04 from "../assets/Doctor Photo (4).png"
import DoctorPhoto05 from "../assets/Doctor Photo (5).png"

const TopDoctorBook = () => {
  return (
    <>

            <div className="text-center">
                <Flex className="gap-[20px] !flex-wrap justify-center lg:justify-start pb-[60px]  text-start">
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto01} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto02} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto03} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto04} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto05} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto01} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto02} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto03} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto04} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    <DoctorsCart 
                        DoctorPhoto={DoctorPhoto05} 
                        Active="Available" 
                        DoctorName="Dr. Richard James" 
                        DoctorDesignation="General physician" 
                    />
                    
                </Flex>  
            </div>

    </>
  )
}

export default TopDoctorBook

