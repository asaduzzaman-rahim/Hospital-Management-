import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'

const Error404 = () => {

  const navigate = useNavigate()
  
  return (
    <>
      <div className='py-[140px] text-center '>
          <h2 className='text-[110px] font-medium leading-[115px] '>404 Not Found</h2>
          <p className='pt-[40px] pb-[80px]'>Your visited page not found. You may go home page.</p>
          <Button onClick={()=> navigate("/")}  className="bg-primary rounded-none text-white">Back to Home Page</Button>
      </div>        
    </>             

   
  )
}

export default Error404
