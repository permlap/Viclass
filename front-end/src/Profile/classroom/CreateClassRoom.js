import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrAdd } from "react-icons/gr";
import AddClassRoomInfo from './AddClassRoomInfo';
import RenderClassRoom from './RenderClassRoom';


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
const Myclass = GetMyClass.map((list) =>{

  return(
      <RenderClassRoom
      key={list.id}
      createAt={list.createAt}
      classTitle={list.classTitle}
      classLevel={list.classLevel}
      handleClick = {()=>handleClick(list.id)}
      />
  )
  })

 
 
  return (
<div className='relative'>
    <div className='flex justify-start flex-wrap absolute top-20'>
        {/* blcok to create a class */}
        <button onClick={handleClick} class="mt-10 ml-5 bg-blue-500 hover:bg-blue-700 text-5xl w-32  text-white font-bold py-2 px-4 rounded-xl">
             <div className='ml-5'><GrAdd/></div>
        </button>
    
        
       {Myclass}

    </div>
    {CreateClass === true && <AddClassRoomInfo/>}
</div>
  )
}

export default CreateClassRoom