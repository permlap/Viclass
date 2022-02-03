import React from 'react';
import Navbar from './NavBar';
import User from './Data/NavbarData';
function TeacherHomepage() {
const ShowItem = User.map((Item =>{
    return(
       <Navbar 
       UserImg={Item.UserImg}
       UserName={Item.UserName}
       />
    )
}))
  return (
  <div>
{ShowItem}
  </div>
  )
}

export default TeacherHomepage;
