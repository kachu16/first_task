import './modal.css';
import cross from "../../static/icons/cross.png";
import views from "../../static/icons/views.svg";
import fb from "../../static/icons/fb.svg";
import google from "../../static/icons/google.svg";
import modalImg from "../../static/modalImg.png";

const CreateModal = ({loginModal, setLoginModal, createAccountModal, setCreateAccountModal}) => {
    const handleSignIn = () => {
        setCreateAccountModal(false);
        setLoginModal(!loginModal);
    }
  return (
    <div id="outer_modal" className="hid">
    <img id="cut_modal" src={cross} alt="" onClick={()=>setCreateAccountModal(!createAccountModal)}/>
    <div id="modal">
        <div id="modalHeader">Let's learn, share & inspire each other with our passion for computer engineering.
            Sign up now 🤘🏼</div>


        <div id="signInForm" className="modalForm" style={{width: "26vw"}}>
            <h1>Sign In</h1>
            <form action="/" method="get">
                <input type="email" name="email" id="email_2" placeholder="Email" required/>
                <div id="password_box_2">
                    <input type="password" name="password" id="password_2" placeholder="Password" required/>
                    <img src={views} alt=""/>
                </div>
                <button type="submit" id="signin_button">Sign In</button>
            </form>

            
            <a className="signUpOpt" href="#"><img src={fb} alt=""/>&nbsp; Sign up with Facebook</a>
            <a className="signUpOpt" href="#"><img src={google} alt=""/>&nbsp; Sign up with Google</a>
            <a className="signUpOpt" href="#">Forgot Password?</a>
        </div>

        <div id="formSideSection" className="formSideSection_ ">

            <span className="side">
                <span id="">Don’t have an account yet? <a href="#" onClick={handleSignIn} >Create new for free!</a></span>
            </span>
            <img src={modalImg} alt="" className=""/>
        </div>

    </div>

</div>
  )
}

export default CreateModal;