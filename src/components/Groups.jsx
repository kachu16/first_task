import React from "react";
import thumb from '../static/icons/thumb.svg';
import data from "./groupdata";

function Groups() {

  return (
    <div id="groups">
      <div>
        <img src={thumb} alt="" style={{marginRight : '5px'}}/>
        <span>RECOMMENDED GROUPS</span>
      </div>
    {
      data.map((user,index)=> (
        <div key={index} className="groups_chat">
        <span>
          <img src={user.img} alt="" />
          <span>{user.name}</span>
        </span>
        <button onClick={()=>{user.follow = (!user.follow)}} className={user.follow? "follow_btn followed":"follow_btn"} >
          {user.follow ? "followed":"follow"}
        </button>
      </div>
      ))
    }

      <a id="seemore_group" href="/">
        See More...
      </a>
    </div>
  );
}

export default Groups;
