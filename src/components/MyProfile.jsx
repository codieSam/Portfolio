import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaFacebook, FaFacebookF } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { GrFacebook } from 'react-icons/gr'
import { LuFacebook } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import { PiFacebookLogoLight, PiFacebookLogoThin } from 'react-icons/pi'
import { RiFacebookCircleLine  } from 'react-icons/ri'

const MyProfile = () => {
  return (
    <div className='border border-gray-500 rounded-4xl w-[25%] h-[680px] flex flex-col items-center '>
        <div className="px-6 py-4 flex flex-row ">
      <div className="logo">
        <span className='text-3xl font-bold tracking-wide'>SAMRAT</span>
        <span className='align-top text-xl'>S</span>
      </div>
      <div className="text text-right">
        <span>Web designer & deveoper</span>
      </div>
      </div>
      <div className="image px-4 py-4  rounded-4xl ">
        <img src="/profile.jpg" className='h-[250px] w-[230px] rounded-[25%]' alt="Profile Img" />
      </div>
      <div className="texts text-2xl text-center font-semilight my-4">
        <p>samrat@Design</p>
        <p>Based in Nepal, Butwal</p>
        
        <p className='text-sm text-gray-400 my-6'>&copy; 2025 Samrat. All Rights Reserved</p>

      </div>
      <div className="icons flex flex-row gap-4">
        <PiFacebookLogoLight className='h-12 w-12 text-gray-500'/>
        <PiFacebookLogoLight className='h-12 w-12 text-gray-500'/>
        <PiFacebookLogoLight className='h-12 w-12 text-gray-500'/>
        <PiFacebookLogoLight className='h-12 w-12 text-gray-500'/>
       
      </div>
      <div className="button my-6">
        <button className='px-12 rounded-4xl py-2 cursor-pointer bg-green-500 text-white flex text-xl'> <MdEmail className='text-3xl mr-2'/> Hire me!</button>
      </div>
    </div>
  )
}

export default MyProfile
