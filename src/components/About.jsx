import React from 'react'
import { BiUser } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'

const About = () => {
  return (
    <div className='flel flex-col space-y-12'>
      {/* 
      
About
Every great design begin with
an even better story

Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.

      */}

      <div className="btn">
        <button className='flex flex-row gap-4 px-4 py-1 bg-transparent border rounded-lg'> <BiUser className='text-xl'/> About</button>
      </div>

      <div className="mid-content text-[50px] tracking-tight  font-light">
        <p>Every great design begin with
        an even <span className='text-green-400'>better story</span></p>
      </div>
     <div className="text-gray-400">
        <p>Since beginning my journey as a freelance designer nearly
             8 years ago, I've done remote work for agencies, 
             consulted for startups, and collaborated with talented people
              to create digital products for both business and consumer use. 
              I'm quietly confident, naturally curious, and perpetually working 
              on improving my chopsone design problem at a time.
        </p>
     </div>

    </div>
  )
}

export default About
