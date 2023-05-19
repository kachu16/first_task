import React from 'react'
import './modal.css';
import cross from "../../static/icons/cross.png";
import views from "../../static/icons/views.svg";
import fb from "../../static/icons/fb.svg";
import google from "../../static/icons/google.svg";
import modalImg from "../../static/modalImg.png";


const LoginModal = ({loginModal, setLoginModal, createAccountModal, setCreateAccountModal}) => {
    const handleSignIn = () => {
        setLoginModal(false);
        setCreateAccountModal(!createAccountModal);
    }
  return (

    <>
    <div id="outer_modal">
    <img id="cut_modal" src={cross} alt="" onClick={()=> setLoginModal(!loginModal)}/>
    <div id="modal">
        <div id="modalHeader">Let's learn, share & inspire each other with our passion for computer engineering.
            Sign up now 🤘🏼</div>
        <div id="signUpForm" className="modalForm ">
            <h1>Create Account</h1>
            <form action="/" method="get">
                <input type="text" name="fname" id="fname" placeholder="First Name" required/>
                <input type="text" name="lname" id="lname" placeholder="Last Name"/>
                <input type="email" name="email" id="email_1" placeholder="Email" required/>
                <div id="password_box_1">
                    <input type="password" name="password" id="password_1" placeholder="Password" required/>
                    <img  src={views} alt=""/>
                </div>
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" required/>
                <button type="submit" id="signup_button">Create Account</button>
            </form>
            <a className="signUpOpt" href="tastea.co.in"><img src={fb} alt=""/>&nbsp; Sign up with Facebook</a>
            <a className="signUpOpt" href="tastea.co.in"><img src={google} alt=""/>&nbsp; Sign up with Google</a>
        </div>

       

        <div id="formSideSection" className="formSideSection_ ">
            <span className="side ">
                <span id="">Already have an account? <a href="#" onClick={handleSignIn}>Sign In</a></span>
            </span>
 
            <img src={modalImg} alt="" className=""/>
        </div>

    </div>

</div>
    </>


  )
}

export default LoginModal;
