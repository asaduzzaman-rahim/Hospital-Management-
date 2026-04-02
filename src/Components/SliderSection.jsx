import React from 'react'
import Section from "./Section"
import Container from "./Container"
import Flex from "./Flex"
import Button from "./Button"

import { useNavigate } from 'react-router-dom'

import SliderPhoto from "../assets/SliderImage.png"

const SliderSection = () => {
    const Navigate = useNavigate()
  return (
    <>
     <Section>
        <Container>
            <div className='bg-primary rounded-[10px]'>
                <Flex className=" flex-nowrap justify-between items-end px-7 lg:px-[100px]">
                    <div className='py-[20px] lg:py-[90px] max-w-[270px] lg:!max-w-[790px]'>
                        <h2 className="font-bold text-white font-Outfit text-xl lg:text-[52px] lg:leading-[90px] pb-4 lg:pb-[36px]">
                            Book Appointment With 100+ Trusted Doctors</h2>
                        <Button onClick={()=>Navigate("/signup")} className="bg-white text-btnColor">Create Account</Button>
                    </div>
                    <div className='lg:w-[50%] max-w-[30%]'>
                        <img src={SliderPhoto} alt="Slider Photo" />
                    </div>
                </Flex>
            </div>    
        </Container> 
    </Section> 
    </>
  )
}

export default SliderSection
