import React from 'react'
import Section from "./Section"
import Container from "./Container"
import Flex from "./Flex"

import { Link } from 'react-router-dom'

import FooterLogo from "../assets/Footer Logo.svg"

const FooterSection = () => {
  return (
    <>
        <Section>
            <Container>
                <footer>
                    <Flex className=" gap-x-[200px] gap-y-[30px] pb-[42px]  border-b-1 border-[#BDBDBD]">
                        <div className='max-w-[646px] grid gap-[40px]'>
                            <figure>
                                <img src={FooterLogo} alt="" />
                            </figure>
                            <p className='text-[18px] leading-[30px] text-paraColor '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                            <h5 className="text-[22px] leading-7 font-Outfit font-semibold text-paraColor uppercase">Company</h5>
                            <ul className='pt-[40px] text-xl leading-7 font-Outfit text-paraColor space-y-3.5'>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"about"}>About Us</Link></li>
                                <li><Link to={"contact"}>Contact Us</Link></li>
                                <li><Link to={"PrivitePolice"}>Privite Police</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[22px] leading-7 font-Outfit font-semibold text-paraColor uppercase">GET IN TOUCH</h5>
                            <ul className='pt-[40px] text-xl leading-7 font-Outfit text-paraColor space-y-3.5'>
                                <li>+88 012 3456 7890</li>
                                <li>greatstackdev@gmail.com</li>
                            </ul>
                        </div>
                    </Flex>
                    <div className="pt-[30px] text-center">
                        <p className="text-xl leading-[30px] text-paraColor ">Copyright © 2024 GreatStack - All Right Reserved.</p>
                    </div>
                </footer>    
            </Container>    
        </Section> 
    </>
  )
}

export default FooterSection
