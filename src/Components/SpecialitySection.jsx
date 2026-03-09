import React from 'react'
import Section from "./Section"
import Container from './Container'
import Flex from "./Flex"
import HeadingPart from './HeadingPart' 

import Physician from "../assets/General_physician.svg"
import Dermatologist from "../assets/Dermatologist.svg"
import Gastroenterologist from "../assets/Gastroenterologist.svg"
import Gynecologist from "../assets/Gynecologist.svg"
import Neurologist from "../assets/Neurologist.svg"
import Pediatricians from "../assets/Pediatricians.svg"

const SpecialitySection = () => {
  return (
    <>
      <Section>
        <Container>
            <HeadingPart 
            HeadingLine="Find by Speciality" 
            DetailsLine="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." />

            <div className='pt-[64px]'>
                <Flex className=" gap-9 !justify-center !text-center text-paraColor">
                    <div>
                        <img src={Physician} alt="Photo" />
                        <p>General Physician</p>
                    </div>
                    <div>
                        <img src={Dermatologist} alt="Photo" />
                        <p> Dermatologist</p>
                    </div>
                    <div>
                        <img src={Gastroenterologist} alt="Photo" />
                        <p>Gastroenterologist</p>
                    </div>
                    <div>
                        <img src={Gynecologist} alt="Photo" />
                        <p>Gynecologist</p>
                    </div>
                    <div>
                        <img src={Pediatricians} alt="Photo" />
                        <p>Pediatricians</p>
                    </div>
                    <div>
                        <img src={Physician} alt="Photo" />
                        <p>General Physician</p>
                    </div>
                    <div>
                        <img src={Neurologist} alt="Photo" />
                        <p>Neurologist</p>
                    </div>
                </Flex>
            </div>
        </Container>
      </Section>
    </>
  )
}

export default SpecialitySection
