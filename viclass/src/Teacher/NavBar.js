import React from 'react';
import { FiMenu } from "react-icons/fi";

function NavBar(props) {

  return (<div>
        <nav>
            <ul>
                <li><FiMenu/></li>
                <li><img src={props.UserImg}></img></li>
                <li> Hello, {props.UserName}</li>
            </ul>
        </nav>

  </div>)
}

export default NavBar;
