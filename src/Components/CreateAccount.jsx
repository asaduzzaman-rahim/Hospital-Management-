import React from 'react'
import Section from './Section'
import Container from './Container'
import Button from './Button'
import { useNavigate } from 'react-router'

const CreateAccount = () => {
    const NavigatePage = useNavigate()

    const handleSignUp =(e)=>{
       e.preventDefault() 
       alert("Oh Sorry..............  This Function is Working Now!")
    }

    



  return (
    <>
     <Section>
        <Container>
           <div className='max-w-[476px] border-1 border-[#DADADA] shadow-[#5F6FFF1A] py-12 px-11 mx-auto'>
                <div className='pb-6'>
                    <h2 className='text-[26px] font-Outfit font-semibold text-paraColor'>Create Account</h2>   
                    <p className='text-paraColor pt-2'>Please sign up to book appointment</p> 
                </div> 
                <form action="#" className='space-y-2.5 pb-9'>
                    <div>
                        <label className='text-[16px] font-Outfit text-paraColor' htmlFor="text">Full Name</label>
                        <input className='w-full px-2 py-2 mt-[8px] border-1 rounded-[4px] border-[#DADADA] ' type="text" />
                    </div>
                    <div>
                        <label className='text-[16px] font-Outfit text-paraColor' htmlFor="email">Email</label>
                        <input className='w-full px-2 py-2 mt-[8px] border-1 rounded-[4px] border-[#DADADA] ' type="email" />
                    </div>
                    <div>
                        <label className='text-[16px] font-Outfit text-paraColor' htmlFor="password">Password</label>
                        <input className='w-full px-2 py-2 mt-[8px] border-1 rounded-[4px] border-[#DADADA] ' type="password" />
                    </div>
                    <Button onClick={handleSignUp} className="bg-primary text-white w-full font-bold  !rounded-[6px] mt-4">Create Account</Button>
                </form>
                <p className='text-[16px] font-Outfit text-paraColor'>Already have an account? <button className='underline' 
                onClick={()=>NavigatePage("/signin")}>Login here</button></p>

            </div> 
        </Container>    
    </Section> 
    </>
  )
}

export default CreateAccount
