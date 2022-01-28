import React from 'react';
import "./HeaderList.css"
function HeaderList(props) {
   
  return(
        <div class="ml-5 mt-5 md:-ml-1 sm:mt-30 " className="container2">
           
            <ul class="mx-20 md:mx-5 "  className='blocklistCon'>
                <li class="md:w-40 md:text-center" className="blocklist">
                     <img src={props.img}></img>
                     <a href="#">{props.ListName}</a>
                 </li>
            </ul>
        </div>)
}

export default HeaderList;
