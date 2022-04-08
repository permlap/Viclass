import React,{useState, useEffect} from 'react'
import axios from 'axios'
function AddClassRoomInfo({ onClick, count }) {

const token = localStorage.getItem("access_token")
  
  const [classData,setclassData] = useState({
    classTitle:"",
    classLevel:"",
  })

  function handleChange(event){
    const{name,value} = event.target
    setclassData(preclassData =>{
      return{
        ...preclassData,
        [name]:value
      }
    })
  }

 function onClick(event){
    event.preventDefault()

  try{
 axios.post("http://localhost:3001/class",
    {
      classTitle:classData.classTitle,
      classLevel:classData.classLevel,
     
    },
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
    ).then((response) =>{
      setclassData(response.data)
      window.location.reload(false)
 
    })
  }catch(err){

  }
  
  }
  return (
    <div class="  relative top-72 ">
    <form  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 absolute w-1/4 ">
      <div class="mb-4 ">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Class name
        </label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="classTitle" 
        type="text" 
        name='classTitle' 
        placeholder="what is your classroom's name"
        value={classData.classTitle}
        onChange={handleChange}
        />

      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Class level
        </label>
        <input class="shadow appearance-none border border-red-500 rounded 
        w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline" 
        id="classLevel" 
        type="text" 
        name='classLevel' 
        placeholder="What is your class level"
        value={classData.classLevel}
        onChange={handleChange}
        />
        
      </div>
      <div class="flex items-center justify-between">
        <button onClick={onClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Create !
        </button>
      </div>
    </form>
   
  </div>
  )
}

export default AddClassRoomInfo