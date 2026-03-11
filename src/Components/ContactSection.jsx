import React from 'react'
import Container from './Container'
import PageNameCart from './PageNameCart'
import Flex from "./Flex"

import ContactImg from "../assets/contact_image.png"

const ContactSection = () => {
  return (
    <>
    <div className='h-screen'>
     <Container>
        <div>
            <PageNameCart PageName="contact us" />    
        </div>  
        <Flex className="!justify-center items-center gap-12">
            <figure className='lg:w-[560px]'>
                <img src={ContactImg} alt="Contact Page Image" />    
            </figure>   
            <div>
                <div className='space-y-5'>
                    <h3 className='text-2xl font-Outfit font-semibold uppercase'>Our OFFICE</h3>
                    <p className='text-[18px] font-Outfit text-paraColor'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p className='text-[18px] font-Outfit text-paraColor'>Tel: (415) 555‑0132 
                        <br /> Email: greatstackdev@gmail.com </p>
                </div>
                <div className='space-y-5 pt-12 pb-8'>
                    <h3 className='text-2xl font-Outfit font-semibold uppercase'>Careers at PRESCRIPTO</h3>
                    <p className='text-[18px] font-Outfit text-paraColor'>Learn more about our teams and job openings. </p>
                </div>
                <button className='py-5 px-10 text-[16px] text-textColor border-1 border-[#1F2937] cursor-pointer'>Explore Jobs</button>
            </div> 
           
        </Flex>  
    </Container>         
    </div>

    </>
  )
}

export default ContactSection
