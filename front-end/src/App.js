import Hompage from "./Hompage/Main/Homepage"
import { BrowserRouter, Route , Routes } from "react-router-dom"
import SignIn from "./Auth/SignIn";
import Profile from "./Profile/Profile";
import SignUp from "./Auth/SignUp";
import './App.css';
function App() {
  const token = localStorage.getItem("access_token");
  const noAccount = localStorage.getItem("noAccount");

 
  return (

    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Hompage/>}/> 
           <Route path="/sign-in" element={<SignIn/>}/> 
           <Route path="/sign-up" element={<SignUp/>}/> 
           <Route path="/profile" element={<Profile/>}/> 
         </Routes>
     
      </BrowserRouter>
    </div>
    
   
  );
}

export default App;