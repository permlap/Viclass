import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function RenderStudent(prop) {

  const [open, SetOpen] = useState(false)
  const [score,setScore] = useState(0)


async function ClickPlus(){
  setScore(score + 1)
    
  }
  
  function ClickDelete(){
    setScore(score - 1)
 

}



  return (
    <div>
   
         <li className="h-80 mt-5 border " >
            <img onClick={() => SetOpen(!open)} className= "w-32 h-32 bg-fuchsia-200 rounded-full shadow-md border-4 hover:opacity-50 text-6xl" src={`color-bg/${prop.lastName}.png`} />
              <div className="text-center mt-1"> 
              {prop.firstName}  {prop.lastName}
              </div>

              {/* Slide down menu */}
                {open === true &&  
                  <div  className="absolute" onClick={prop.handleClickToId}>
                    <button  onClick={ClickDelete}className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'> <ArrowBackIosNewIcon/> </button>
                    <button  onClick={ClickPlus}className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> <ArrowForwardIosIcon/> </button>
                  </div>
                }

              <div className="mt-24 ml-14 text-5xl antialiased font-black text-rose-900">
                {score}
              </div>
        </li>

    </div>
   
  )
}

export default RenderStudent