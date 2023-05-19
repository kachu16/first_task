import React from 'react';
import './mobileModal.css';
import cross from "../../static/icons/cross.png";
import views from "../../static/icons/views.svg";
import fb from "../../static/icons/fb.svg";
import google from "../../static/icons/google.svg";

const CreateModal = ({mobileLogin, setMobileLogin,mobileCreateAccount, setmobileCreateAccount}) => {
    const handleCreateModal = () => {
        setmobileCreateAccount(!mobileCreateAccount);
        setMobileLogin(!mobileLogin);
    }
  return (
    <div id="mob_modal" className="show_mob_modal">
    <div className="form_heading">
      <h2 id="mob_form_title">Sign Up</h2>
      <img src={cross} alt=""  onClick={()=>setmobileCreateAccount(false)} style={{cursor: 'pointer'}}/>
    </div>
    <div id="signUpForm" className="modalForm mob_modalForm">
      <form action="/" method="get">
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="First Name"
          required=""
        />
        <input type="text" name="lname" id="lname" placeholder="Last Name" />
        <input
          type="email"
          name="email"
          id="email_1"
          placeholder="Email"
          required=""
        />
        <div id="password_box_1">
          <input
            type="password"
            name="password"
            id="password_1"
            placeholder="Password"
            required=""
          />
          <img src={views} alt="" />
        </div>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          placeholder="Confirm Password"
          required=""
        />
        <div className="mob_form_btn">
          <button type="submit" id="signup_button">
            Create Account
          </button>
          <a className="form_for" onClick={handleCreateModal} style={{cursor: 'pointer'}}>
            or, login
          </a>
        </div>
      </form>
      <a className="signUpOpt" href="#dummy">
        <img src={fb} alt="" />
        &nbsp; Sign up with Facebook
      </a>
      <a className="signUpOpt" href="#dummy">
        <img src={google} alt="" />
        &nbsp; Sign up with Google
      </a>
    </div>
    
    <span>
      By signing up, you agree to our Terms &amp; conditions, Privacy policy
    </span>
  </div>
  )
}

export default CreateModal
