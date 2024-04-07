import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import './Register.css'
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigation  = useNavigate() ; 
  return (
    <div className="login">
       <div className="loginContainer">
        <h2 >Register</h2>
        <div className="inputArea">
          <label htmlFor="userName" className="flexGap lightFont"><div>username</div>
            <input type="text" id="userName" className="lightFont" placeholder="type your username"/>
          </label>
          <label htmlFor="userName" className="flexGap"><div>Email Id</div>
            <input  type="text" id="userName" placeholder="type your Email Id"  className="lightFont"/>
          </label>
          <label htmlFor="password" className="flexGap">
            <div  className="lightFont">password</div>
            <input type="password" id="password" placeholder="type your password"/>
          </label>
          <label htmlFor="password" className="flexGap">
            <div  className="lightFont">Confirm Password</div>
            <input type="password" id="password" placeholder="type your password"/>
          </label>
          <input onClick={()=> navigation('/')}  type="submit" value="Signup" className="btnSubmit"/> 
          <div className="signupArea">
          <p>or sign up using </p>
          <div className="logos">
          <FaFacebook />
          <BsTwitterX />
          <FcGoogle />
          </div>
        </div>
        </div>
       </div>

    </div>
  )
}

export default Register