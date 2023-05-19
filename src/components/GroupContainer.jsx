import React, {useState} from "react";
import Groups from "./Groups";
import '../assets/css/GroupContainer.css'
import info from '../static/icons/info.svg'
import loc from '../static/icons/location.svg'
import pen from '../static/icons/pen.svg'
import cross from '../static/icons/cross.png';

function GroupContainer() {
  const [typing, setTyping] = useState(false);

  return (
    <div id="groups_container" >
      <div id="groupFindInput" className={`${typing ? "red-border" : "gray-border"}`} >
        <img src={loc} alt="" />
        <input type="text" placeholder="Enter your location " onClick={()=>setTyping(!typing)} onMouseLeave={()=>setTyping(!typing)}/>
        {
                typing===true ? (
            <img  src={pen}  alt="" style={{height:'20px', cursor:'pointer'}}  />

                ) : (
            <img  src={cross}  alt="" style={{height:'20px', cursor:'pointer'}}  />

                )
            }
      </div>
      <div id="group_inp_des">
        <img src={info} alt="" />
        <span>
          {" "}
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>

      <Groups/>
    </div>
  );
}

export default GroupContainer;
