import React from 'react'
import FilterHeading from '../Atoms/FilterHeading'
import FilterFrame from '../Atoms/FilterFrame'
import { FrameShapeData } from '../Data/FrameShapeData'

const FrameShape = () => {
    const data=FrameShapeData;
  return (
    <div>
        <FilterHeading heading={"Frame Shape"}/>
        <FilterFrame data={data}/>
    </div>
  )
}

export default FrameShape