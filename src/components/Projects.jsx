import React from 'react'

const Projects = () => {
  let experience = 10;
  let project = 185;
  return (
    <div>
      <div className="Projects flex flex-row space-x-24">
      
     
<div className="text-gray-400">
<h1 className='text-green-400 text-[80px]'>{experience}+</h1>
<p>YEARS OF </p>
<p>EXPERIENCE</p>
</div>
<div className="text-gray-400">
<h1 className='text-green-400 text-[80px]'>{project}+</h1>
<p>PROJECTS COMPLETED ON</p>
<p>15 COUNTRIES</p>
</div>


      </div>
    </div>
  )
}

export default Projects
