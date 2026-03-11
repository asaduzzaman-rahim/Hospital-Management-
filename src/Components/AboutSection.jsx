import React from 'react'
import PageNameCart from './PageNameCart'
import Flex from "./Flex"
import Container from "./Container"

import AboutImg from "../assets/about_image.jpg"

const AboutSection = () => {
  return (
    <>
    <Container>
      <div>
        <PageNameCart PageName="about us" />
      </div>
        <Flex className=" gap-16 lg:justify-start">
            <figure className='lg:w-[445px]'>
                <img src={AboutImg} alt="About Image" />
            </figure>
            <div className='space-y-10 text-[18px]  font-Outfit w-[894px]'>
                <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                <span className='font-bold'>Our Vision</span>
                <p className='mt-8'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
            </div>
        </Flex>
    </Container>

    </>
  )
}

export default AboutSection
