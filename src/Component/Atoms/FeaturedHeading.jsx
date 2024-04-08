import React from 'react'

const FeaturedHeading = ({heading}) => {
  return (
    <div className='flex items-center gap-2'>
        <div className='border-b-2 w-[50px] border-slate-600'></div>
        <div className='underline text-slate-600 text-[26px] text-[500]'>{heading}</div>
    </div>
  )
}

export default FeaturedHeading