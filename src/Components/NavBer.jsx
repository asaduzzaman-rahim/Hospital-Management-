import React from 'react'
import Container from "./Container"
import Button from "./Button"
import Flex from './Flex'

import { Link } from 'react-router-dom'


import Logo from "../assets/Logo.png"

const NavBer = () => {
  return (
    <>
        <Container>
            <nav className='py-4 border-b-1 border-[##ADADAD] '>
                <Flex>
                    <figure>
                        <Link to={"/"}><img src={Logo} alt="Logo" /></Link>
                    </figure>
                    <ul className='flex gap-5 items-center font-poppins font-medium text-[16px] uppercase text-textColor'>
                        <Link to={"/"}>Home</Link>    
                        <Link to={"alldoctors"}>All Doctors</Link>    
                        <Link to={"about"}>About</Link>    
                        <Link to={"contact"}>Contact</Link>    
                    </ul> 
                    <Link to={"signup"}> <Button className="bg-primary text-white">Create Account</Button> </Link>  
                </Flex>
            </nav> 
        </Container>
    </>
  )
}

export default NavBer
