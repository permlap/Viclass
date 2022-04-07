import Hompage from "./Hompage/Main/Homepage"
import { BrowserRouter, Route , Routes } from "react-router-dom"
import SignIn from "./Auth/SignIn";
import Profile from "./Profile/Profile";
import SignUp from "./Auth/SignUp";
function App() {
 
  return (

    <div>
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