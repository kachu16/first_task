import React, { useState } from 'react'
import logo from '../static/navbar/whole.png'
import searchVector from '../static/icons/searchVector.svg'
import dropdownVector from '../static/icons/dropdownVector.svg'
import penIcon from '../static/icons/pen.png'
import arrowBack from '../static/icons/arrow_back.png'
import navBtn from '../static/icons/navigationBtn.png';
import '../assets/css/Header.css';
import CreateModal from './mobilemodal/CreateModal';
import LoginModal from './mobilemodal/LoginModal'


function Header() {

  const [mobileLogin, setMobileLogin] = useState(false);
  const [mobileCreateAccount, setmobileCreateAccount] = useState(false);

  return (
    <>
    {
      mobileCreateAccount && <CreateModal mobileLogin={mobileLogin} setMobileLogin={setMobileLogin} mobileCreateAccount={mobileCreateAccount} setmobileCreateAccount={setmobileCreateAccount}/>
    }
    {
      mobileLogin && <LoginModal mobileLogin={mobileLogin} setMobileLogin={setMobileLogin} mobileCreateAccount={mobileCreateAccount} setmobileCreateAccount={setmobileCreateAccount}/>
    }

    <header>
  <nav id="navbar">
    <a href="#dummy">
      <img id="logo" src={logo} alt="ATG.WORLD" />
    </a>
    <form id="navSearch" action="/" method="get">
      <img src={searchVector} alt="🔍" />
      <input type="text" placeholder="Search for your favorite groups in ATG" />
    </form>
    <a id="loginStatus" href="#dummy">
      Create account. <span>It's free</span>
      <img  src={dropdownVector} alt="" />
    </a>
    <img id='topNavBtn' src={navBtn} alt="" />
  </nav>
  <div id="homePageImg">
    <div />
    <div id="img-overflow-text">
      <h1>Computer Engineering</h1>
      <p>142,765 Computer Engineers follow this</p>
    </div>
  </div>
  <button id="leaveBtn">Leave Group</button>
  <a id="backBtn">
    <img src={arrowBack} alt="" />
  </a>
  <button id="mobJoinBtn">
    <img src={penIcon} alt="" onClick={()=>setMobileLogin(!mobileLogin)}/>
  </button>
</header>

    </>
  )
}

export default Header