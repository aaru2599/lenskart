import React from 'react'

const FilterHeading = ({heading}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='text-[16px] font-bold'>{heading}</div>
        <div className='text-slate-500'>Clear</div>
        
    </div>
  )
}

export default FilterHeading