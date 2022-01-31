import { FiPlay,FiMenu,FiX } from "react-icons/fi";
import './NavBar.css';
import React, { useState } from 'react';

import { Link as Scroll } from 'react-scroll'

function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false)
    return(
       
        <nav className="NavBar">
         <div className="container">
             <div className="headerCon">
                 
                 <ul className={click ? "menu active" : "menu"}>
                     
                     <li className="menuLink" onClick={closeMobileMenu}>
                         <Scroll to="about" smooth={true}><a href="#">About us</a></Scroll>
                    </li>
                 
                    <li className="menuLink"onClick={closeMobileMenu}>
                    <Scroll to="Leanmore" smooth={true}><a href="#">Learn more</a></Scroll>
                    </li>
                    <li className="menuLink"onClick={closeMobileMenu}>
                    <Scroll to="Contact" smooth={true}><a href="#">Contact</a></Scroll>
                    </li>
                     
                    </ul>
                    <div className="logo">
                     <a href="#">Account login</a>
                     <img src="/image/login.png"></img>
                 </div>
                 <div className="mobileMenu" onClick={handleClick}>
                 {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                 </div>
                

             </div>

         </div>
                 
                
            
        </nav>
    )
}
export default NavBar