import React, {useState} from 'react';
import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import About from "./Main/About"

import LearnMore from './Main/LearnMore';

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