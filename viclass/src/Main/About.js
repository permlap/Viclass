import React from 'react';

function About() {
  return (
    //   Hero section abtout
   <section class="justify-center md:mt-10 relative  mt-10 h-96 md:h-screen    w-full bgYellow ">
    <div class="md:mt-10 lg:px-10 xl:p-10  z-10  mt-5 absolute h-80 w-full md:w-96 lg:w-8/12 lg:h-4/6 md:ml-5   colorWhite drop-shadow-lg px-5 rounded-3xl md:w-69">
      <ul class="flex flex-col text-left  ">
        <li class="text-5xl font-extrabold colorYellow mt-12">About Us</li>
        <li class="text-xs  lg:text-2xl ml-8 mt-5 ">We are a tool for supporting teachers who desire to build up
 a classroom where students are able to both learn and enjoy 
at the same time. We have provided many different features to 
encourage students in participating in learning such as gamification
 in worksheets or multiple choices, the features where teachers 
can keep tracking how are students' progress in each assignment </li>
      </ul>
    </div>
    <img class="hidden md:block md:w-56 md:h-96 md:mt-69 lg:w-96 lg:h-5/6  z-0 absolute mt-20  right-0" src='/image/studentBG.png'></img>
    
    

   </section>
     
     )
}

export default About;
