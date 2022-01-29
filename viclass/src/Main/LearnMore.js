import React from 'react';

function LearnMore() {
  return (
 
      <section class="container bg-cyan-800 w-full h-screen relative">
            <div>
                <ul class=" absolute right-0 md:mt-10 lg:px-10 xl:p-10  z-10  mt-5  h-80 w-full md:w-96 lg:w-8/12 lg:h-4/6 md:ml-5  xl:w-3/6 xl:pt-0  colorWhite drop-shadow-lg px-5 rounded-3xl md:w-69">
                    <li class="Topic">student</li>
                    <li className='ToppicDetail'>Motivate students to be more invested in their learning and each other</li>
                    <li className='Detail' >By exhibiting positive behavior, completing assignments, and reminding all works through application, students unlock real-life privileges, recognition to help themselves and their team and prepare themslef to hand in assigment without misinformation. Learning becomes a way to encourage students to advocate for one another and feel empowered in the classroom and in life.</li>              
                </ul>
            </div>
            <img class="hidden md:block max-w-full max-h-full right-100  object-contain absolute" src='/image/studeentsLearnmore.png'/>
      </section>

  )
}

export default LearnMore;
