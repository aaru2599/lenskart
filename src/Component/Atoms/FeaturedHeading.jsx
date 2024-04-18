import React from 'react'

const FeaturedHeading = ({heading}) => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <div className='border-b-2 md:w-[50px] w-[25px] border-slate-600 md:block hidden'  ></div>
        <div className='md:underline decoration-[2px]  text-slate-600 md:text-[20px] text-[14px]   font-[500]'>{heading}</div>
    </div>
  )
}

export default FeaturedHeading