import React, {useState} from 'react';
import './App.css';
import Hompage from './Main/Homepage';
import {BrowserRouter, Router} from "react-router-dom"
import TeacherHomepage from "./Teacher/TeacherHomepage"
function App() {
 
  return (

    <div className="App">
      {/* <Hompage/> */}
      <TeacherHomepage/>
    </div>
   
  );
}

export default App;