import React, {useEffect, useState} from 'react'
import axios from 'axios';

function RenderClassRoom(prop) {
   
   
  return (
    <ul className='flex'>
        <li class="mt-10 ml-5 bg-slate-500 w-60 h-36 rounded-xl">
                <div className='text-center text-xl font-bold pt-10'>{prop.classTitle}</div>
                <div className='text-center text-xl font-bold pt-3'>{prop.classLevel}</div>
        </li>
    </ul>   
  )
}

export default RenderClassRoom