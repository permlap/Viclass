import React from 'react'
import { useDispatch } from 'react-redux'
import NevbarClassIndex from './NevbarClassIndex'
import StudentIndex from './student/StudentIndex'
import axios from 'axios'
import { UpdateUser } from '../Redux/UserSlice'

function ClassIndex() {
  const token = localStorage.getItem("access_token")
  const dispatch = useDispatch()
    
  React.useEffect(()=>{

    axios.get('http://localhost:3001/user/me', {
     headers: {
       Authorization: `Bearer ${token}`
     }
   }).then((response) =>{

     dispatch(UpdateUser(response.data))
   })
 
  },[])



 
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