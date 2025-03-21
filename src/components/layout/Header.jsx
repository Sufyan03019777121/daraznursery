import React from 'react'
import Navbar from './Navbar'
import Electric_car_img from "../../assets/images/Especification home.png"
import home_1_car from "../../assets/images/home_1_car.png"
import shape_small from "../../assets/images/shape small.png"
import shape_big_img from "../../assets/images/shape big.svg"
import "../../styles/components/header.css"


const Header = () => {
  return (
    <div className=' body_color vh-100 text-center position-relative'>
      <img className='shape_big_img position-absolute w-50' src={shape_big_img} alt="" />
      <Navbar />
      <div className='pt-5 '>
        <h1 className='white_color h1_font_size_in_header h1_font_size mt-5'>Choose The Best Car</h1>
        <h3 className='white_color h3_font_size '>Porsche Mission E</h3>
        <img className='Electric_car_img' src={Electric_car_img} alt="elec" /><br />
        <img className='home_1_car_img mt-3' src={home_1_car} alt="home_1_car" /><br />
      </div>

      <img className='position-absolute shape_small_img ' src={shape_small} alt="shape_small" />
         
    </div>
    // Machines With 
    // Future Technology
    // See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time.
  )
}

export default Header
