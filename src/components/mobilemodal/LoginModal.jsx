import React from 'react';
import './mobileModal.css';
import cross from "../../static/icons/cross.png";
import views from "../../static/icons/views.svg";
import fb from "../../static/icons/fb.svg";
import google from "../../static/icons/google.svg";

const LoginModal = ({mobileLogin, setMobileLogin,mobileCreateAccount, setmobileCreateAccount}) => {
    const handleLoginModal = () => {
        setMobileLogin(!mobileLogin);
        setmobileCreateAccount(!mobileCreateAccount);;
    }
  return (
    <div id="mob_modal" className="show_mob_modal">
    <div className="form_heading">
      <h2 id="mob_form_title">Sign In</h2>
      <img src={cross} alt="" onClick={()=> setMobileLogin(!mobileLogin)} style={{cursor: 'pointer'}}/>
    </div>
    
    <div id="signInForm" className="modalForm mob_modalForm ">
      <form action="/" method="get">
        <input
          type="email"
          name="email"
          id="email_2"
          placeholder="Email"
          required=""
        />
        <div id="password_box_2">
          <input
            type="password"
            name="password"
            id="password_2"
            placeholder="Password"
            required=""
          />
          <img src={views} alt="" />
        </div>
        <div className="mob_form_btn">
          <button type="submit" id="signup_button">
            Sign In
          </button>
          <a className="form_for" onClick={handleLoginModal} style={{cursor: 'pointer'}}>
            or, Create Account
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
      <a className="signUpOpt" href="#dummy">
        Forgot Password?
      </a>
    </div>
    <span>
      By signing up, you agree to our Terms &amp; conditions, Privacy policy
    </span>
  </div>
  )
}

export default LoginModal
