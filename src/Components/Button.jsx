import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className={`${className} px-9 py-2.5 text-[18px]  rounded-[47px] leading-[43px]`}>
      {children}
    </button>
  )
}

export default Button
