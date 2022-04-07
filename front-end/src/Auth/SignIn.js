import  React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"
import swal from 'sweetalert';

  
  const theme = createTheme();
  
  export default function SignIn() {

    const [userData,setuserData] = useState({
        email:"",
        password:"",
        NoAccount:false
    })


    function handleChange(event){
        const {name, value} = event.target
        setuserData(preuserData =>{
            return{
                ...preuserData,
                [name]:value
            }
        })
      
    }



   async function handleSubmit (event){
        event.preventDefault()
        console.log(userData)
        try{
        const response = await axios.post("http://localhost:3001/auth/sign-in",
        JSON.stringify({email:userData.email, password:userData.password}),
        {
            headers:{
                'Content-Type': 'application/json',
            }
        }
        )
        if ('access_token' in response.data) {
            swal("Success", {
              buttons: false,
              timer: 2000,
            })
            .then((value) => {
              localStorage.setItem('access_token', response.data.access_token);
      
            
              window.location.href = "/profile";
             });
            }

        }catch(err){
            console.log(err.response.data.message)
             if(err.response.data){
                    swal("Failed",err.response.data.message);
            }else if(err.response.data.statusCode === 403){
                    swal("Failed",err.response.data.message);
            }
        }
    }
    
    function handleClick(){
      localStorage.setItem('noAccount', true);
    }
  
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               type="email"
               autoComplete="email"
               value={userData.email}
               onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userData.password}
                onChange={handleChange}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/sign-up" onClick={handleClick} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
         
        </Container>
      </ThemeProvider>
    );
  }