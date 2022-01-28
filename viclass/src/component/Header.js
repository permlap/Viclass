import "./Header.css"
import React from 'react';
import HeaderList from "./HeaderList";
import DataHeader from "./DataHeader"
import { FiChevronDown } from "react-icons/fi";
function Header() {
  const showItem = DataHeader.map((list) =>{
    return(
      <HeaderList
      img = {list.img}
      ListName ={list.ListName}
      />
    )
  })

  return (
     
    <div>
      <div className="container">
            <img src="/image/headBackground.png"></img>
            <div className="Topic">
              
                <div className="HeadTopic">Viclass room</div>
                <div className="line"></div>
                <div className="TopicDetail">Join us to create the new era of learning </div>
                <div className="TopicDetailNarrow drop-shadow-md  mt-6 ml-28  animate-bounce  "><a href="#"> <FiChevronDown/></a></div>
            </div>
            
      </div>
      <h2 class="font-bold text-left text-3xl">who are you in school?</h2>
      <div class="flex flex-initial ml-20" className="ShowItem">
        
        {showItem}
        </div>
    </div>
      
  )
}

export default Header;
