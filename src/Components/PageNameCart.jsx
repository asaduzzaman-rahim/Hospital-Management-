import React from 'react'

const PageNameCart = ({PageName, className}) => {
  return (
    <div className={`${className} py-12 text-3xl font-Outfit font-semibold text-center uppercase leading-[100%]`}>
      <h2>{PageName}</h2>
    </div>
  )
}

export default PageNameCart
