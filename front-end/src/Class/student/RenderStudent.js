import React from 'react'
import { useSelector } from 'react-redux'

function RenderStudent(prop) {


  return (
   
         <li className="h-40 mt-5  ">
            <button className= "bg-cyan-500 w-32 h-32 rounded-full shadow-md border-4 hover:opacity-50 text-6xl">
            {prop.firstName[0]}
            </button>
            <div className="text-center mt-1"> 
            {prop.firstName}  {prop.lastName}
         
            </div>
        </li>
   
  )
}

export default RenderStudent