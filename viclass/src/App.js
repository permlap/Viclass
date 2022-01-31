import React, {useState} from 'react';
import './App.css';
import Header from './Hompage/component/Header';
import NavBar from './Hompage/component/NavBar';
import About from "./Hompage/Main/About"

import LearnMore from './Hompage/Main/LearnMore';

function App() {
 
  return (
    <div className="App">
     
      <Header/>
      <NavBar/>
      <About/>
      <LearnMore/>

    </div>
  );
}

export default App;