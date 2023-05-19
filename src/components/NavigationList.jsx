import React, {useState} from 'react'
import '../assets/css/NavigationList.css';
import down from '../static/icons/dropdownVector.svg';
import share from  '../static/join.svg';
import LoginModal from './modal/LoginModal';
import CreateModal from './modal/CreateModal';

function NavigationList() {

  const [loginModal, setLoginModal] = useState(false);
  const [createAccountModal , setCreateAccountModal] = useState(false);


  return (
    <>
    {
      loginModal && <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} createAccountModal={createAccountModal} setCreateAccountModal={setCreateAccountModal}/>
    }
    {
      createAccountModal && <CreateModal loginModal={loginModal} setLoginModal={setLoginModal} createAccountModal={createAccountModal} setCreateAccountModal={setCreateAccountModal}/>
    }
    <div id="inner_container_1">
      <ul className="naviagtion_list">
        <a href="#dummy" className="naviagtion_list_item active-item">
          All Post(32)
        </a>
        <a href="#dummy"className="naviagtion_list_item">
          Article
        </a>
        <a href="#dummy" className="naviagtion_list_item">
          Event
        </a>
        <a href="#dummy" className="naviagtion_list_item">
          Education
        </a>
        <a href="#dummy" className="naviagtion_list_item">
          Job
        </a>
      </ul>
      <div id="writePostBtns">
        <button id="writePostBtn">
          Write a Post <img src={down} alt="" />
        </button>
        <button id="joinBtn"  onClick={()=>setLoginModal(!loginModal)}>
          <img src={share} alt=""/>
          Join Group
        </button>
      </div>
    </div>
    <div id="mob_inner_container_1">
      <span id="mob_post_count">Posts(386)</span>
      <div className="dropmenu">
        <button className="dropmenuBtn">
          Filter: All
          <img src={down} alt="" />
        </button>
      </div>
    </div>
  </>
  )
}

export default NavigationList