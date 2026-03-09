import React from 'react'
import Section from "./Section"
import Container from "./Container"
import Flex from "./Flex"
import Button from "./Button"

import SliderPhoto from "../assets/SliderImage.png"

const SliderSection = () => {
  return (
    <>
     <Section>
        <Container>
            <div className='bg-primary rounded-[50px]'>
                <Flex className=" items-center px-[100px]">
                    <div className='py-[90px]'>
                        <h2 className="font-bold text-white font-Outfit text-[52px] leading-[90px] pb-[36px]">
                            Book Appointment With 100+ Trusted Doctors</h2>
                        <Button className="bg-white text-btnColor">Create Account</Button>
                    </div>
                    <div>
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
