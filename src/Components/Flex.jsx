import React from 'react'

const Flex = ({className, children}) => {
  return (
    <div className={`${className} flex flex-wrap  lg:flex-nowrap justify-center lg:justify-between`}>
      {children}
    </div>
  )
}

export default Flex 
