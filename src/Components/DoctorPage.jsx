import React from 'react'
import Section from "./Section"
import Container from "./Container"
import Flex from "./Flex"
import DoctorCategory from './DoctorCategory'
import DoctorList from "./DoctorList"

const DoctorPage = () => {
  return (
    <>
     <Section>
        <Container>
            <div className='pb-9'>
                <span className='text-xl font-Outfit text-paraColor leading-7'>Browse through the doctors specialist.</span>
            </div> 
            <Flex className="gap-9">
                <div>
                    <DoctorCategory/>
                </div> 
                <div>
                    <DoctorList/>
                </div>   
            </Flex>   
        </Container>    
    </Section> 
    </>
  )
}

export default DoctorPage
