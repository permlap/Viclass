import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';



export default  function NevbarClassIndex() {
 
  const classId = JSON.parse(window.localStorage.getItem('classId'))
  const [anchorEl, setAnchorEl] = useState(null);
  const token = localStorage.getItem("access_token")
  const [classData,setClassData] =useState(null)
  const UserfirstName = useSelector((state)=> state.user.firstName)
  const UserLastName = useSelector((state)=> state.user.lastName)
  

    useEffect(()=>{

  axios.get(`http://localhost:3001/class/${classId}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
  }).then((response) =>{
      setClassData(response.data)
      console.log(classData)
  })

    },[])

 
 if(!classData){
   return null
 }
 
 
    

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar>
      
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{classData.classTitle} {classData.classLevel}</span>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
          </Typography>
                <div className="mr-6">Enjoy teaching!</div> {UserfirstName}  {UserLastName}
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                 <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
               
              
              </Menu>
            </div>
          </div>
      </nav>
      </AppBar>
    </Box>

    </div>
  );
}