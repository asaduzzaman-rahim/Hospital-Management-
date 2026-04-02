import React from 'react'

const Button = ({children,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${className} md:px-9 md:py-2.5 px-5 py-1.5 text-[18px]  rounded-[47px] leading-[43px] cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button
