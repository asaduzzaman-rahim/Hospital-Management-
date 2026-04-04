import React, { useContext, useState, useEffect }  from 'react'
import { counterContext } from '../MainContext'
import Section from "./Section"
import Container from "./Container"
import Flex from "./Flex"
import DoctorCategory from './DoctorCategory'
import DoctorList from "./DoctorList"
import DoctorsCart from './DoctorsCart'


const DoctorPage = () => {

    const { allDoctors } = useContext(counterContext);
    const [selected, setSelected] = useState("") 
    const [categoryList, setCategoryList] = useState([])
    

    useEffect(()=>{
      const uniqueCatugory = [...new Set(allDoctors.map((item)=> item.speciality))]
      setCategoryList(uniqueCatugory)
    },[allDoctors])

    const FilterDoctors = selected ? allDoctors.filter((items)=> items.speciality === selected) : allDoctors    
    
    

  return (
    <>
     <Section>
        <Container>
            <div className='pb-9'>
                <span className='text-xl font-Outfit text-paraColor leading-7'>Browse through the doctors {categoryList.length} specialist.</span>
            </div> 
            <Flex className="gap-9 lg:justify-start">
                <div>
                      <div className='flex flex-row flex-wrap lg:flex-col justify-center gap-[14px]'>
                           { 
                          categoryList.map((items, index)=>{
                              return(
                                  <button key={index} onClick={()=>setSelected(items == selected ? "" : items)} 
                                  className={` ${selected == items ? "bg-[#E2E5FF] text-textColor" : "hover:border-[#E2E5FF]" } md:w-[236px] px-[18px] py-[15px] text-[16px] text-paraColor  border-[#B4B4B4] border-1 rounded-[8px] cursor-pointer`}>
                                    {items}</button>
                              )
                          })
                          } 
                      </div>
                </div> 
                <Flex className="!flex-wrap lg:!justify-start gap-7.5">
                    {
                        FilterDoctors.map((items,index)=>{
                            return(
                                <DoctorsCart key={index} 
                                    id={items._id}
                                    DoctorPhoto={items.image}
                                    DoctorName={items.name}
                                    DoctorDesignation={items.speciality}
                                    Active="Available"
                                />
                            )
                        })
                    }
                </Flex>   
            </Flex>   
        </Container>    
    </Section> 
    </>
  )
}

export default DoctorPage
