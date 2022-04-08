import React, {useEffect, useState} from 'react'


function RenderClassRoom(prop) {
   
   
  return (
    <ul className='flex'>
        <li onClick={prop.handleClick} class="mt-10 ml-5 bg-slate-500 w-60 h-36 rounded-xl">
                <div  className='text-center text-xl font-bold pt-10'>{prop.classTitle}</div>
                <div className='text-center text-xl font-bold pt-3'>{prop.classLevel}</div>
        </li>
    </ul>   
  )
}

export default RenderClassRoom