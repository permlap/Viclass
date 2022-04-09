import React, {useEffect, useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
function RenderClassRoom(prop) {
   const [open, setOpen] = useState(false)

   function handleClickOpenMenu(){
     setOpen(!open)
   }
  return (
   <div>
    <ul className='block'>
      <button onClick={handleClickOpenMenu} class="mt-10 ml-5 bg-slate-500 w-60 h-36 rounded-xl border-4 hover:bg-slate-400 hover:border-red-700 ">
        <li >
                <div className='ml-48 text-4xl -mt-5 text-white hover:text-red-900 text-right w-10' onClick={prop.handleClickToDelete} ><ClearIcon/></div>
                <div  className='text-center text-xl font-bold '>{prop.classTitle}</div>
                <div className='text-center text-xl font-bold pt-3'>{prop.classLevel}</div>
        </li>
      </button>
      {open  &&<div className=' bg-rose-500 rounded-lg shadow-xl text-center ml-5 absolute w-60'>
        <a href='/class' onClick={prop.handleClickToId} className='block px-4 py-2 font-extrabold text-white hover:bg-white hover:text-red-500'>Start</a>
        <a href='#' className='block px-4 py-2 font-extrabold text-white hover:bg-white hover:text-red-500'>Edit</a>
      </div>}
    </ul>  
    </div>   
   
    
  )
}

export default RenderClassRoom