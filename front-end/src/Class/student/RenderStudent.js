import React from 'react'

function RenderStudent(prop) {
  return (
    <div>
         <li className="h-40 block ml-20 ">
            <button className= "bg-cyan-500 w-32 h-32 rounded-full shadow-md border-4 hover:opacity-50 text-6xl">
            {prop.firstName[0]}
            </button>
            <div className="text-center mt-1"> 
            {prop.firstName}  {prop.lastName}
            </div>
        </li>
    </div>
  )
}

export default RenderStudent