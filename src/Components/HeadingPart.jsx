import React from 'react'

const HeadingPart = ({HeadingLine, DetailsLine}) => {
  return (
    <div className='text-center mx-auto max-w-[573px]'>
      <h2 className='text-[40px] font-Outfit text-textColor font-medium '>{HeadingLine}</h2>
      <p className='text-[18px] leading-7 text-paraColor font-Outfit'>{DetailsLine}</p>
    </div>
  )
}

export default HeadingPart