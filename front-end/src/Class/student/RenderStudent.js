import React, { useState } from 'react'


function RenderStudent(prop) {

  const [open, SetOpen] = useState(false)

  return (
   
         <li onClick={() => SetOpen(!open)} className="h-40 mt-5  ">
              <button className= "bg-cyan-500 w-32 h-32 rounded-full shadow-md border-4 hover:opacity-50 text-6xl">
              {prop.firstName[0]}
              </button>
              <div className="text-center mt-1"> 
              {prop.firstName}  {prop.lastName}
              </div>

              {/* Slide down menu */}

                {open === true &&  
                    <div className=' bg-rose-500 rounded-lg shadow-xl text-center left-82 absolute w-32'>
                      <div  className='block px-4 py-2 font-extrabold text-white hover:bg-white hover:text-red-500'>Edit</div>
                      <div  onClick={prop.handleClickToDelete}  className='block px-4 py-2 font-extrabold text-white hover:bg-white hover:text-red-500'>Delete</div>
                  </div>
                }
        </li>
   
  )
}

export default RenderStudent