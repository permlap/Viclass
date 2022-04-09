import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrAdd } from "react-icons/gr";
import AddClassRoomInfo from './AddClassRoomInfo';
import RenderClassRoom from './RenderClassRoom';
import NaveBar from "../../Class/NevbarClassIndex"

function CreateClassRoom() {
    const token = localStorage.getItem("access_token"); 
    const [GetMyClass, setGetMyClass] = useState(null);
    const [CreateClass, setCreateClass] = useState(false)
  

 function handleClick(){
     setCreateClass(!CreateClass)
     console.log(CreateClass)
 }

 useEffect(()=>{
    axios.get("http://localhost:3001/class/my-classes",{
       headers:{
           Authorization: `Bearer ${token}`
         }
       }).then((response)=>{
       setGetMyClass(response.data)   
      console.log(GetMyClass)
    })
},[])

if(!GetMyClass){
    return null
}


function handleClickToDelete(id){
  axios.delete(`http://localhost:3001/class/${id}`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>{
    
    axios.get("http://localhost:3001/class/my-classes",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response)=>{
      setGetMyClass(response.data)
    })
  
  })
}

function handleClickToId(id){
  localStorage.setItem("classId",JSON.stringify(id))
  console.log(id)
}
const Myclass = GetMyClass.map((list) =>{

  return(
    
      <RenderClassRoom
      key={list.id}
      createAt={list.createAt}
      classTitle={list.classTitle}
      classLevel={list.classLevel}
      handleClickToDelete = {()=>handleClickToDelete(list.id)}
      handleClickToId ={() =>handleClickToId(list.id)}
      />

      
  )
  })

 
 
  return (
           
              <div className='relative '>
                <div className='flex  flex-wrap absolute top-20 '>
                 
                    <button onClick={handleClick} class="mt-16 ml-5 bg-blue-500 hover:bg-blue-700 text-5xl w-32 h-20  text-white font-bold py-2 px-4 rounded-xl">
                        <div className='ml-5'><GrAdd/></div>
                    </button>
      
                  {Myclass}
                  
                </div>
                {CreateClass === true && <AddClassRoomInfo />}
              </div>
            
  )
}

export default CreateClassRoom