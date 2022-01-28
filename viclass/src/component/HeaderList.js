import React from 'react';
import "./HeaderList.css"
function HeaderList(props) {
   
  return(
        <div class="ml-10 mt-10 md:-ml-1" className="container2">
           
            <ul  className='blocklistCon'>
                <li class="md:w-40 md:text-center" className="blocklist">
                     <img src={props.img}></img>
                     <a href="#">{props.ListName}</a>
                 </li>
            </ul>
        </div>)
}

export default HeaderList;
