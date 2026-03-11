import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from "./Flex"

import DoctorPhoto01 from "../assets/Doctor Photo (1).png"


const Appointment = () => {
  return (
    <>
     <Section>
        <Container>
            <div>
                <Flex className="gap-6.5 lg:justify-start">
                    <div className="bg-primary h-[273px] w-[273px] flex justify-center items-end rounded-xl">
                         <img  src={DoctorPhoto01} alt="Doctor Photo" />
                    </div>
                    <div className='p-10.5 border-1 border-[#d0d0d0] rounded-xl w-full'>
                        <div>
                            <h1 className='text-4xl font-Outfit font-medium text-textColor'>Dr. Richard James</h1>
                            <h4 className='text-xl pt-3 font-Outfit text-paraColor flex items-center gap-2'>MBBS - General Physician 
                            <span className='text-[16px] px-3.5 py-2 border-1 border-[#d0d0d0] rounded-[90%]'>2 Years</span></h4>
                        </div>
                        <div className='pt-5 pb-7 space-y-4 max-w-[900px]'>
                            <h3 className='text-[18px] font-Outfit font-medium text-textColor'>About</h3>
                            <p className='leading-6 text-paraColor'>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.</p>
                        </div>
                        <h3 className='text-[22px] font-normal text-paraColor font-Outfit'>Appointment fee: <span className='text-black'>$50</span> </h3>
                    </div>
                </Flex>    
            </div>    
        </Container>    
    </Section> 
    </>
  )
}

export default Appointment
