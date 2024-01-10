import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

function Nav() {
  return (
    <div className='fixed top-0 navbar w-full  p-4 z-40'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <i>
          <img className='h-9 ml-14' src="https://template.hasthemes.com/daxone/daxone/assets/images/logo/logo-1.png" alt="logo" />
        </i>
        <ul className='flex gap-4 ml-4 text-black pt-1 pr-2'>
          <li className='hover:text-red-500 mt-3  transition duration-300'>Home</li>
          <li className='hover:text-red-500 mt-3  transition duration-300'>Shop</li>
          <li className='hover:text-red-500  mt-3 transition duration-300'>Mens</li>
          <li className='hover:text-red-500  mt-3 transition duration-300'>Page</li>
          <li className='hover:text-red-500  mt-3 transition duration-300'>Blog</li>
          <li className='hover:text-red-500  mt-3 transition duration-300'>Contact</li>
        </ul>
      </div>
  
      <div className='flex items-center gap-4 p1-3'>
        <i><span className='hover:text-red-500 transition duration-300 mt-3'><BsCart2 /></span></i>
        <i><span className='hover:text-red-500 transition duration-300 mt-3'>2 items</span></i>
        <i><span className='hover:text-red-500 transition duration-300 mt-4'><IoSearchOutline /></span></i>
      </div>
    </div>
  </div>
  


  )
}

export default Nav