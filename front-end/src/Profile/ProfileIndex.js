import Nevbar from './Nevbar'
import React from 'react'
import AddUserInfo from './component/AddUserInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CreateClassRoom from './TeacherRoom/CreateClassRoom'
import Hompage from '../Hompage/Main/Homepage'

function Profile() {
  const token = localStorage.getItem("access_token")
  const [userData, setUserData] = useState(null)
  
  if(!token){
    window.location.href="/"
  }
  
   useEffect(() =>{

    axios.get("http://localhost:3001/user/me",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response)=>{
      setUserData(response.data)
    })

  },[])

  if(!userData){
    return null
  }else if(!userData.firstName && !userData.lastName){
    return <AddUserInfo/>
  }
  

  
 
 
  return (
    <div>
      <Nevbar/>
      <CreateClassRoom/>
     
    </div>
  )
}

export default Profile