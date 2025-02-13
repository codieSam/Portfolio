import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsMenuApp } from 'react-icons/bs'
import { FcServices } from 'react-icons/fc'
import { SiAboutdotme } from 'react-icons/si'


const RightMenu = () => {
  return (
    <div className='flex flex-col justify-center space-y-16'>
      <div className="menuBtn">
        <BsMenuApp className='text-2xl'/>
      </div>
      <div className="menuList border h-auto rounded-4xl ">
        <div className="mx-2 my-2 flex flex-col space-y-4">
        <BiUser  className='text-2xl text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
        <BiUser  className='text-2xl hover:text-green-500'/>
       
        
       
        </div>
      </div>
    </div>
  )
}

export default RightMenu
