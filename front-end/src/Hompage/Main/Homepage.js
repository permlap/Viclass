import React from 'react';
import About from './About';
import NavBar from '../component/NavBar';
import Header from '../component/Header';
import LearnMore from './LearnMore';
function Hompage() {
  return (
      <div>
          <NavBar/>
          <Header/>
          <About/>
          <LearnMore/>
      </div>
  )
}

export default Hompage;
