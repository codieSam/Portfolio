import React from 'react'
import { BiHome } from 'react-icons/bi'


const MainProfile = () => {
 
  return (
    <div className='mx-auto w-full overflow-hidden'>
      <div className="button items-start overflow-hidden">
        <button className='cursor-pointer px-8 rounded-4xl border border-gray-400 py-2 text-xl tracking-wide flex gap-4'><BiHome className='text-2xl'/> INTRODUCE</button>
      </div>
      <div className="text text-[65px] my-12">
      Say Hi from <span className='text-green-400'>Samrat</span>,
      <p> Web Designer and Developer</p>
      </div>
      <div className="smallText text-gray-500">
        <p className=''>I design and code beautifully simple things and i love what i do.</p>
        <p> Just simple like that!</p>
      </div>
      
    </div>
  )
}

export default MainProfile
