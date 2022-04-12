import Hompage from "./Hompage/Main/Homepage"
import { BrowserRouter, Route , Routes } from "react-router-dom"
import SignIn from "./Auth/SignIn";
import Profile from "./Profile/ProfileIndex";
import SignUp from "./Auth/SignUp";
import './App.css';
import ClassIndex from "./Class/ClassIndex";
function App() {



  return (

    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Hompage/>}/> 
           <Route path="/sign-in" element={<SignIn/>}/> 
           <Route path="/sign-up" element={<SignUp/>}/> 
           <Route path="/profile" element={<Profile/>}/> 
           <Route path="/class" element={<ClassIndex/>}/> 
         </Routes>
     
      </BrowserRouter>
    </div>
    
   
  );
}

export default App;