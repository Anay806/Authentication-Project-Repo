import React from 'react'
import add from "../assets/add_icon.png"
import order from "../assets/order_icon.png"
import { NavLink } from 'react-router-dom'

const Sidebaar = () => {
  return (
    <div className='w-[18%] h-[100vh] border border-gray-400 solid  border-top-0 font-[1vw, 10px] '>
      <div className='pt-[50px] pl-[20%] flex flex-col gap-[30px] '>
        <NavLink to='/add' className='flex items-center gap-[12px] border border-[1px] solid border-[#a9a9a9] border-right-0 p-[8px 10px] rounded-[3px 0px 3px] cursor-pointer'>
          <img src={add} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='flex items-center gap-[12px] border border-[1px] solid border-[#a9a9a9] border-right-0 p-[8px 10px] rounded-[3px 0px 3px] cursor-pointer'>
          <img src={order} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/order' className='flex items-center gap-[12px] border border-[1px] solid border-[#a9a9a9] border-right-0 p-[8px 10px] rounded-[3px 0px 3px] cursor-pointer'>
          <img src={order} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebaar
