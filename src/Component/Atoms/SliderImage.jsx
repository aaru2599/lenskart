import React from 'react'

const SliderImage = ({imageData}) => {
    console.log("imageData",imageData);
  return (
    <div><img src={imageData} alt="" /></div>
  )
}

export default SliderImage