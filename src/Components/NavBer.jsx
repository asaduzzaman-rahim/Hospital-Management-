import React from 'react'
import Container from "./Container"
import Button from "./Button"
import Flex from './Flex'

import Logo from "../assets/Logo.png"

const NavBer = () => {
  return (
    <>
        <Container>
            <nav className='py-4 border-b-1 border-[##ADADAD]'>
                <Flex>
                    <figure>
                        <img src={Logo} alt="Logo" />
                    </figure>
                    <ul className='flex gap-5 items-center font-poppins font-medium text-[16px] uppercase text-textColor'>
                        <li>Home</li>    
                        <li>All Doctors</li>    
                        <li>About</li>    
                        <li>Contact</li>    
                    </ul> 
                    <Button className="bg-primary text-white">Create Account</Button>   
                </Flex>
            </nav> 
        </Container>
    </>
  )
}

export default NavBer
