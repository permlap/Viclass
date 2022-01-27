import React from 'react';
import "./HeaderList.css"
function HeaderList(props) {
   
  return(
        <div class="ml-20 mt-10" className="container2">
           
            <ul  className='blocklistCon'>
                <li className="blocklist">
                     <img src={props.img}></img>
                     <a href="#">{props.ListName}</a>
                 </li>
            </ul>
        </div>)
}

export default HeaderList;
