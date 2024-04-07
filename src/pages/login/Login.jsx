import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import './Login.css' ;
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate() ; 

  return (
    <div className="login">
       <div className="loginContainer">
        <h2 >Log in</h2>
        <div className="inputArea">
          <label htmlFor="userName" className="flexGap"><div>username</div>
            <input type="text" id="userName" placeholder="type your username"/>
          </label>
          <label htmlFor="password" className="flexGap">
            <div>password</div>
            <input type="password" id="password" placeholder="type your password"/>
          </label>
          <input onClick={()=> navigate('/')} type="submit" value="Login" className="btnSubmit"/> 
          <div className="signupArea">
          <p>or sign up using </p>
          <div className="logos">
          <FaFacebook />
          <BsTwitterX />
          <FcGoogle />
          </div>
        </div>
        </div>
       
        <div className="orSignup">
          <p >or sign up using</p>
          <button onClick={()=>navigate('/signup')}  className="btnSubmit signupBtn">Sign up</button>
        </div>
       </div>

    </div>
  )
}

export default Login