import React, { useContext, useState, useEffect }  from 'react'
import { counterContext } from '../MainContext'

const DoctorCategory = () => {

      const { allDoctors} = useContext(counterContext);
    const [selected, setSelected] = useState("") 
    const [categoryList, setCategoryList] = useState("")
    

    useEffect(()=>{
      const uniqueCatugory = [...new Set(allDoctors.map((item)=> item.speciality))]
      setCategoryList(uniqueCatugory)
    },[allDoctors])
      

      

  return (
    <div className='flex flex-col gap-[14px]'>
          { 
          categoryList.map((items, index)=>{
              return(
                  <button key={index} onClick={()=>setSelected(items)}
                  className={` ${selected == items ? "bg-[#E2E5FF] text-textColor" : "hover:border-[#E2E5FF]" } w-[236px] px-[18px] py-[15px] text-[16px] text-paraColor  border-[#B4B4B4] border-1 rounded-[8px] cursor-pointer`}>
                  {items}</button>
              )
          })
          }
    </div>
  )
}

export default DoctorCategory
