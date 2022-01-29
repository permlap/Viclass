import "./Header.css"
import React, { useEffect, useState } from 'react';
import HeaderList from "./HeaderList";
import DataHeader from "./DataHeader"
import { FiChevronDown } from "react-icons/fi";
import Grow from '@mui/material/Grow';
import { Link as Scroll } from 'react-scroll'


const icon = (
  <div className="Topic absolute right-0 top-16  sm:top-32 md:top-20 lg:top-32 xl:top-40" >
                <div className="HeadTopic ml-2">Viclass room</div>
                <div className="line"></div>
                <div className="TopicDetail ml-6">Join us to create the new era of learning </div>
                <div className="TopicDetailNarrow drop-shadow-md  mt-6 ml-28  animate-bounce  ">
                      <a href="#"> <Scroll to="ToVisit" smooth={true}><FiChevronDown/></Scroll>
                      </a>
               </div>
            </div>
);



function Header() {
  const showItem = DataHeader.map((list) =>{
    return(
      <HeaderList
      img = {list.img}
      ListName ={list.ListName}
      />
    )
  })
const [checked, setChecked] = useState(false);
useEffect(() => {
  setChecked(true);
}, []);
  return (
     
    <div className="container">
      <div>
           
      <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1300 } : {})}
        >
          {icon}
        </Grow>
        <img className="headimage z-0" src="/image/Headimage.png"/> 
      </div>
      <h2 class="font-bold text-left text-3xl ">who are you in school?</h2>
      <div class="flex flex-initial ml-20" className="ShowItem">
      {showItem}
        </div>
        
    </div>
      
  )
}

export default Header;
