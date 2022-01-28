import React from 'react';

function About() {
  return (
    //   Hero section abtout
   <section class="relative  mt-40 Superhight w-full bgYellow ">
    <div class=" ml-10  mt-20 absolute width52 h-96 colorWhite drop-shadow-lg px-5 rounded-3xl ">
      <ul class="flex flex-col text-lef ">
        <li class="text-5xl font-extrabold colorYellow mt-16 ml-5">About Us</li>
        <li class="ml-8 mt-5">We are a tool for supporting teachers who desire to build up
 a classroom where students are able to both learn and enjoy 
at the same time. We have provided many different features to 
encourage students in participating in learning such as gamification
 in worksheets or multiple choices, the features where teachers 
can keep tracking how are students' progress in each assignment </li>
      </ul>
    </div>
    <img class=" absolute mt-20  hight51 width52  right-0" src='/image/studentBG.png'></img>
    
    

   </section>
     
     )
}

export default About;
