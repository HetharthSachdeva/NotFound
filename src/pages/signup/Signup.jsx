import React, {useState} from 'react'
import './Signup.css'
import { signup, login } from '../../config/firebase'

const Signup = () => {

  const [currState, setCurrState] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(currState==="Sign Up"){
      signup(username, email, password);
    }  
    else{
        login(email, password).then(() => {
           
           console.log("Login successful");
        }).catch((error) => {
            console.error("Login failed: ", error);
        });

    }
    
  }  

  return (
    <div className="login">
      <form onSubmit={onSubmitHandler} action="" className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up"?<input onChange={(e)=>setUsername(e.target.value)} value={username} className="form-input" placeholder='Username' required/>:null}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-input" placeholder='Email Address'/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" className="form-input" placeholder='Password'/>
        
        <div className="login-term">
          {currState==="Sign Up"?<input type="checkbox" required/>:null}
          {currState==="Sign Up"?<p>Agree that Hetharth Sachdeva is the best person ever</p>:null}
        </div>
        {currState==="Sign Up"? <button type='submit' className="form-button">Create Account</button>:<button type='submit' className="form-button">Login Now</button>}
        <div className="login-forgot">
          {currState==="Sign Up"? <p className="login-toggle">Already have an account ? <span onClick={()=>setCurrState("Login")}>Login</span></p>:<p className="login-toggle">Don't have an account ? <span onClick={()=>setCurrState("Sign Up")}>Sign Up</span></p>}
        </div>
      </form>
    </div>
  )
}

export default Signup