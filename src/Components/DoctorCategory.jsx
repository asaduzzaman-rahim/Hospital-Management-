import React from 'react'

const DoctorCategory = () => {

    const DoctorCategoryName = ["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Neurologist", "Gastroenterologist" ]

  return (
    <div className='flex flex-col gap-[14px]'>
        { DoctorCategoryName.map((items, index)=>{
            return(
                <button id={index} className='w-[236px] px-[18px] py-[15px] text-[16px] text-paraColor  border-[#B4B4B4] border-1 rounded-[8px] cursor-pointer'>{items}</button>
            )
        })
        }
    </div>
  )
}

export default DoctorCategory
