import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CreateStudent from './CreateStudent';
import RenderStudent from './RenderStudent';
import axios from 'axios';
function StudentIndex() {
  const token = localStorage.getItem("access_token")
  const classId = JSON.parse(window.localStorage.getItem('classId'))
  const[open,setOpen] = useState(false)
  const[getStudentData,setGetStudentData] =useState(null)

  function clickToCreateStudent(){
    setOpen(!open)
  }

  useEffect(()=>{
    axios.get(`http://localhost:3001/student/get-students/${classId}`,{
      headers:{
          Authorization: `Bearer ${token}`
        }
      }).then((response)=>{
        setGetStudentData(response.data)   
     console.log(getStudentData)
   })
  },[])

  if(!getStudentData){
    return null
  }

  const students = getStudentData.map((list) =>{
    return(
      <RenderStudent
        key={list.id}
        firstName={list.firstName}
        lastName={list.lastName}
      />
    )
  })

  return (
    <ul className="z-20 top-36 absolute ml-10 flex flex-wrap ">
        <li className="h-40  ">
            <button onClick={clickToCreateStudent} className="bg-yellow-300  w-32 h-32 rounded-full shadow-md border-4 hover:opacity-50 " type="button" data-modal-toggle="defaultModal">
            <AddIcon sx={{ fontSize: 80 }}/> 
            </button>
            <div className="text-center mt-1"> 
            Create you student
            </div>
        </li>
        
            {students}
    
        <li>
              {open === true &&<CreateStudent setOpen={setOpen}/>}
        </li>
    </ul>
  )
}

export default StudentIndex