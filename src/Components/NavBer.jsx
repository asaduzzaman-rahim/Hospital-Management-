import React, { useState } from 'react'
import Container from "./Container"
import Button from "./Button"
import Flex from './Flex'

import { Link } from 'react-router-dom'

import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

import Logo from "../assets/Logo.png"

const NavBer = () => {

    const [navber, setNavber] = useState(false)

    const handleClick = ()=>{
        setNavber(!navber)
    }

  return (
    <>
        <Container>
            <nav className='py-4 lg:py-0 border-b-1 border-[##ADADAD] '>
                <Flex className="justify-between !flex-nowrap lg:!justify-start items-center relative">
                    <figure className=' lg:w-[60%]'>
                        <Link to={"/"}><img src={Logo} alt="Logo" /></Link>
                    </figure>
                    <div className={`${navber?  "top-20  bg-[#00327e] lg:bg-white z-10" :"top-20 left-[-500px]"} lg:flex justify-between  w-full space-y-3.5 lg:static absolute  left-0  rounded-2xl p-5 transition-all duration-1000`}>
                        <ul className='lg:flex gap-5 lg:pt-4 font-poppins font-medium text-[16px] uppercase text-white lg:text-textColor space-y-2.5'>
                                <li><Link to={"/"}>Home</Link></li>    
                                <li><Link to={"alldoctors"}>All Doctors</Link></li>    
                                <li><Link to={"about"}>About</Link></li>    
                                <li><Link to={"contact"}>Contact</Link></li>    
                            </ul> 
                            <Link to={"signup"}> <Button className="bg-primary text-white">Create Account</Button> </Link> 
                    </div>
                    <button onClick={handleClick} className='text-4xl block lg:hidden cursor-pointer'>{ !navber ? <LuMenu/> : <RxCross1 />}</button>
                </Flex>
            </nav> 
        </Container>
    </>
  )
}

export default NavBer
