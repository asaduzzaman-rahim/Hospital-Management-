import React from 'react'
import Container from './Container'
import Flex from './Flex' 
import Button from "./Button"

import BenarImg from "../assets/Header-Benar.png"
import GroupPhoto from "../assets/group_profiles.png"

const Benar = () => {
  return (
    <>
     <Container>
        <div className='bg-primary rounded-xl my-6 pl-[70px]'>
            <Flex className="items-end ">
                <div className='pt-[100px] pb-[158px] '>
                    <h1 className='text-[63px] font-semibold font-Outfit leading-[80px] text-white'>Book Appointment <br /> With Trusted Doctors</h1>
                    <div className='flex gap-3.5 pb-[30px]'>
                        <img src={GroupPhoto} alt="Group Photo" />
                        <p className='text-[18px] font-Outfit leading-[27px] text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    </div>
                    <Button className="bg-white text-btnColor">Book Appointment</Button>

                </div>
                <div>
                    <img src={BenarImg} alt="Benar Photo" />
                </div>
            </Flex>
        </div>    
    </Container> 
    </>
  )
}

export default Benar


