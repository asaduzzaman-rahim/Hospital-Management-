import React from 'react'
import Section from "./Section"
import Container from './Container'
import Flex from "./Flex"
import HeadingPart from './HeadingPart' 

import Physician from "../assets/General_physician.svg"

const SpecialitySection = () => {
  return (
    <>
      <Section>
        <Container>
            <HeadingPart 
            HeadingLine="Find by Speciality" 
            DetailsLine="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." />

            <div className='pt-[64px]'>
                <Flex>
                    <div>
                        <img src={Physician} alt="Photo" />
                        <p>General Physician</p>
                    </div>
                </Flex>
            </div>
        </Container>
      </Section>
    </>
  )
}

export default SpecialitySection
