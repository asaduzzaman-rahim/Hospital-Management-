import React from 'react'
import Container from './Container'
import Flex from './Flex' 
import Button from "./Button"

import BenarImg from "../assets/Header-Benar.png"
import GroupPhoto from "../assets/group_profiles.png"

const Benar = () => {
  return (
    <>
    <div className='pt-6 pb-[60px]'>
     <Container>
        <div className='bg-primary rounded-xl  px-10 lg:pl-[70px]'>
            <Flex className="items-end flex-wrap-reverse">
                <div className='py-[60px]  lg:pt-[100px] lg:pb-[120px] '>
                    <h1 className='text-[45px] md:text-[40px] lg:text-[63px] font-semibold font-Outfit leading-15 lg:leading-[80px] text-white'>Book Appointment <br /> With Trusted Doctors</h1>
                    <div className='flex flex-wrap items-center gap-3.5 pt-[10px] pb-[30px]'>
                        <img className='max-w-[130px] max-h-[56px]' src={GroupPhoto} alt="Group Photo" />
                        <p className=' text-[14px] md:text-[18px] font-Outfit leading-[27px] text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    </div>
                    <Button className="bg-white text-btnColor">Book Appointment</Button>

                </div>
                <div>
                    <img src={BenarImg} alt="Benar Photo" />
                </div>
            </Flex>
        </div>    
    </Container>         
    </div>

    </>
  )
}

export default Benar


