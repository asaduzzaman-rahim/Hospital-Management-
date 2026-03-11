import React from 'react'
import Container from "./Container"
import Flex from "./Flex"

const WhyChoose = () => {
  return (
    <>
    <div className='h-screen'>
     <Container>
        <div  className='pt-20 pb-[30px]'>
            <h5 className='text-2xl font-Outfit uppercase'>Why <span className='font-semibold '>Choose us</span></h5>
        </div>
        <Flex>
            <div className='space-y-11 pr-[127px] pb-[110px] pt-[60px] pl-[67px] border-1 border-[#ABABAB]'>
                <h4 className='font-semibold font-Outfit text-[18px] uppercase text-textColor'>Efficiency:</h4>
                <p className='text-[18px] font-Outfit text-paraColor'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='space-y-11 pr-[127px] pb-[110px] pt-[60px] pl-[67px] border-1 border-[#ABABAB]'>
                <h4 className='font-semibold font-Outfit text-[18px] uppercase text-textColor'>Efficiency:</h4>
                <p className='text-[18px] font-Outfit text-paraColor'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='space-y-11 pr-[127px] pb-[110px] pt-[60px] pl-[67px] border-1 border-[#ABABAB]'>
                <h4 className='font-semibold font-Outfit text-[18px] uppercase text-textColor'>Efficiency:</h4>
                <p className='text-[18px] font-Outfit text-paraColor'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
        </Flex>    
    </Container>         
    </div>

    </>
  )
}

export default WhyChoose
