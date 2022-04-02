import React from 'react';

function Contact(props) {
  return (<div>
      <section class="container  p-3 lg:p-5 text-center    ">
          <ul >
              <li>
                  <img class="md:w-20 ml-8  hover:opacity-25" src={props.img}/>
              </li>
              <li>
                  {props.text}
              </li>
          </ul>
          
      </section>
  </div>)
}

export default Contact;