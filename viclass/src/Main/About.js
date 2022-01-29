import React from 'react';

function About() {
  return (
    //   Hero section abtout
   <section class="relative md:mt-10  mt-5 h-96 md:h-96 w-screen bgYellow  ">
    <div class="top-10 md:top-2  md:mt-10 lg:px-5 xl:p-10  z-10    h-4/6  md:w-4/6 lg:w-8/12 lg:h-5/6 md:ml-5  xl:w-4/6  xl:pt-0  colorWhite drop-shadow-lg px-5 rounded-3xl absolute">
      <ul class="flex flex-col text-left  ">
        <li class="text-5xl font-extrabold colorYellow mt-12">About Us</li>
        <li class="Detail">We are a tool for supporting teachers who desire to build up
 a classroom where students are able to both learn and enjoy 
at the same time. We have provided many different features to 
encourage students in participating in learning such as gamification
 in worksheets or multiple choices, the features where teachers 
can keep tracking how are students' progress in each assignment. </li>
      </ul>
    </div>
    <img class="hidden md:block max-w-full max-h-full right-0  object-contain absolute"  src='/image/studentBG.png'/>
    
    

   </section>
     
     )
}

export default About;
