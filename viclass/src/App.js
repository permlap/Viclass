import React, {useState} from 'react';
import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import About from "./Main/About"

function App() {
 
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;