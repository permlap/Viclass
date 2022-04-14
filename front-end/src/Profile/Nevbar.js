import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UpdateUser } from '../Redux/UserSlice';
import { useSelector } from 'react-redux';


export default  function Nevbar(prop) {
  
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const token = localStorage.getItem("access_token")
  const firstName = useSelector((state) => state.user.userInfo.firstName);
  const lastName = useSelector((state) => state.user.userInfo.lastName);
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
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My classroom</span>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
          </Typography>
                <div className="mr-6">welcome back!</div> {firstName}  {lastName}
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