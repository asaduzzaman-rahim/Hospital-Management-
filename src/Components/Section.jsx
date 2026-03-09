import React from 'react'

const Section = ({className, children}) => {
  return (
    <div className={`${className} py-[60px]`}>
      {children}
    </div>
  )
}

export default Section
