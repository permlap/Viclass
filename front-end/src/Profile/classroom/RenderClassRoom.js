import React, {useEffect, useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
function RenderClassRoom(prop) {
   

   
  return (
    <ul className='flex'>
        <li onClick={prop.handleClick} class="mt-10 ml-5 bg-slate-500 w-60 h-36 rounded-xl">
                <div className='ml-48 text-4xl place-items-end font-black text-white hover:text-red-900 text-right w-10' onClick={prop.handleClickToDelete} ><ClearIcon/></div>
                <div  className='text-center text-xl font-bold '>{prop.classTitle}</div>
                <div className='text-center text-xl font-bold pt-3'>{prop.classLevel}</div>
        </li>
    </ul>   
  )
}

export default RenderClassRoom