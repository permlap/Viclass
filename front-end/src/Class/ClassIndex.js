import React from 'react'
import NevbarClassIndex from './NevbarClassIndex'
import StudentIndex from './student/StudentIndex'
function ClassIndex() {

 
  return (
    <div className='h-full'>
        <NevbarClassIndex/>
        <div className="bg-slate-400 w-full  ">
              <div className="z-10 w-5/6 ml-32 bg-zinc-200">
                <StudentIndex/>
               
              </div>
        </div>
    </div>
  )
}

export default ClassIndex