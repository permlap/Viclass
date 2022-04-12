import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { update } from '../../Redux/UserSlice';
import {useDispatch} from "react-redux"


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();

  
function AddUserInfo() {

  const token = localStorage.getItem("access_token")
  

    const [userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        school:""
    })

function handleChange(event){
    const {name,value} = event.target
    setUserData(preUserData =>{
        return{
            ...preUserData,
            [name] : value
        }
    })
}

function handleSubmit(event){
    event.preventDefault()
    
    try{
   axios.patch("http://localhost:3001/user/", {
          
           firstName: userData.firstName, 
           lastName:userData.lastName 
          },{
           headers:{
             Authorization: `Bearer ${token}`
           } 
          }
      ).then((response) =>{
        setUserData(response.data)
        window.location.reload(false)
      })
    
    
      
    }catch(err){
      
    }
    
    
}    

    console.log(userData)
    
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Add your information  
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userData.firstName}
                  onChange ={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={userData.lastName}
                  onChange ={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="school"
                  label="school name"
                  name="school"
                  autoComplete="family-name"
                  value={userData.school}
                  onChange ={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Enter
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default AddUserInfo