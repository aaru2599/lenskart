import React from 'react'
import HomeSlider from '../Molecules/HomeSlider'
import { HomeSliderData } from '../Data/HomeSliderData'

const Home = () => {
    const data=HomeSliderData
  return (
    <div className=''>
      <HomeSlider data={data}/>  
    </div>
  )
}

export default Home