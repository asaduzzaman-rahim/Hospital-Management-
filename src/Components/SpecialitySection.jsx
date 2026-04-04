import React, { useContext }  from 'react'
import { counterContext } from '../MainContext'
import Section from "./Section"
import Container from './Container'
import Flex from "./Flex"
import HeadingPart from './HeadingPart' 


const SpecialitySection = () => {
    
    const { speciality} = useContext(counterContext);    

  return (
    <>
      <Section>
        <Container>
            <HeadingPart 
                HeadingLine="Find by Speciality" 
                DetailsLine="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." 
            />

            <div className='pt-[64px]'>
                <Flex className=" gap-9 !justify-center mx-auto !text-center text-paraColor">

                    {
                       speciality.map((items, index)=>{
                        return(
                          <div key={index} className='flex flex-col items-center justify-center gap-2.5'>
                                <img src={items.image} alt="Photo" />
                                <p>{items.speciality}</p>
                            </div>   
                        )
                       }) 
                    }

                </Flex>
            </div>
        </Container>
      </Section>
    </>
  )
}

export default SpecialitySection
