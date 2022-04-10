import React from 'react'
import NevbarClassIndex from './NevbarClassIndex'
import StudentIndex from './student/StudentIndex'
function ClassIndex() {
  return (
    <div >
        <NevbarClassIndex/>
        <div className="bg-slate-400 w-full h-full absolute ">
              <div className="bg-zinc-50  z-10 top-40 w-5/6 h-full ml-32">
                <StudentIndex/>
              </div>
        </div>
    </div>
  )
}

export default ClassIndex