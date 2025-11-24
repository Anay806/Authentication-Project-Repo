import React from 'react'
import logo from "../assets/logo.png"
import image from "../assets/profile_image.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-[20px] '>
      <img src={logo} alt="" className='w-[10% 80px]' />
      <img src={image} alt="" className='w-[10% 80px]' />
      
    </div>
  )
}

export default Navbar
