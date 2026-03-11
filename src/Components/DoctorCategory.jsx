import React, { useState } from 'react'

const DoctorCategory = () => {

    const DoctorCategoryName = ["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist" ]

    const [selected, setSelected] = useState("") 
  return (
    <div className='flex flex-col gap-[14px]'>
        { DoctorCategoryName.map((items, index)=>{
            return(
                <button key={index} onClick={()=>setSelected(items)}
                className={` ${selected == items ? "bg-[#E2E5FF] text-textColor" : "hover:border-[#E2E5FF]" } w-[236px] px-[18px] py-[15px] text-[16px] text-paraColor  border-[#B4B4B4] border-1 rounded-[8px] cursor-pointer`}>{items}</button>
            )
        })
        }
    </div>
  )
}

export default DoctorCategory
