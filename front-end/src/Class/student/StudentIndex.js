import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RenderStudent from './RenderStudent';
import axios from 'axios';

function StudentIndex() {
  const token = localStorage.getItem("access_token")
  const classId = JSON.parse(window.localStorage.getItem('classId'))
  const[open,setOpen] = useState(false)
  const[getStudentData,setGetStudentData] =useState(null)

  const [studentData,setStudentData] = useState({
    firstName:"",
    lastName:"",
    numberId:""
})

 
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
   })
  },[studentData])

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


    function handleChange(event){
        const{name,value} = event.target
        setStudentData(preclassData =>{
          return{
            ...preclassData,
            [name]:value
          }
        })
      }


 function ClickToSummit(event){
        event.preventDefault()
   
      try{
     axios.post(`http://localhost:3001/student/create-student/${classId}`,
        {
         firstName:studentData.firstName,
         lastName:studentData.lastName
         
        },
        {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
        ).then((response) =>{
            setStudentData(response.data)
      
            setOpen(!open)
            
        })
      }catch(err){
    
      }
      
      }  



    
  return (
    <ul className="z-20 mt-20 ml-10 gap-9 flex padding flex-wrap ">
        <li className="mt-5 ">
            <button onClick={clickToCreateStudent} className="bg-yellow-300  w-32 h-32 rounded-full shadow-md border-4 hover:opacity-50">
            <AddIcon sx={{ fontSize: 80 }}/> 
            </button>
            <div className="text-center mt-1"> 
            Create you student 
            </div>
        </li>
        
            {students}
    
        <li>
                    {open === true &&    <div  class=" ml-96 mt-20 overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          
                                <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                        Create your student
                                    </h3>
                                    <button type="button" onClick={clickToCreateStudent} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                    </button>
                                </div>
                                <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                                        <input onChange={handleChange} value={studentData.firstName} type="text" name="firstName" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ex: Jonathan" required/>
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                        <input onChange={handleChange} value={studentData.lastName}  type="text" name="lastName" id="lastName" placeholder="Ex: John" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    </div>
                                    <div class="flex justify-between">
                                    </div>
                                    <button onClick={ClickToSummit} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create student</button>
                                    
                                </form>
                            </div>
                        </div>
                  </div>}
            </li>
    </ul>
  )
}

export default StudentIndex