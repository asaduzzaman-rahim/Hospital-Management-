import React from 'react'
import Section from "./Section"
import Container from './Container'
import HeadingPart from './HeadingPart'
import DoctorsCart from './DoctorsCart'
import Flex from "./Flex"
import Button from './Button' 

import DoctorPhoto01 from "../assets/Doctor Photo (1).png"
import DoctorPhoto02 from "../assets/Doctor Photo (2).png"
import DoctorPhoto03 from "../assets/Doctor Photo (3).png"
import DoctorPhoto04 from "../assets/Doctor Photo (4).png"
import DoctorPhoto05 from "../assets/Doctor Photo (5).png"

const TopDoctorBook = () => {
  return (
    <>
     <Section>
        <Container>
             <HeadingPart 
                HeadingLine="Top Doctors to Book" 
                DetailsLine="Simply browse through our extensive list of trusted doctors." />   
            <div className="text-center">
                <Flex className="gap-[20px] !flex-wrap justify-center pb-[60px] pt-[40px] text-start">
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
                <button className='px-[84px] py-[18px] text-xl font-Outfit rounded-[50px] bg-[#EAEFFF] text-paraColor cursor-pointer '>more</button>                  
            </div>

        </Container>    
    </Section> 
    </>
  )
}

export default TopDoctorBook

