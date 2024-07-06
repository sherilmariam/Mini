import React, {useState} from 'react'
import './Loginpopup.css'
import { assets } from '../../Assets/assets'

const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
     <form className='login-popup-container'>
         <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
         </div>
         <div className='login-popup-inputs'>
            {currState==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
        
         <input type='email' placeholder='Your Email' required />
         <input type='password' placeholder='Your Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>By Continuing, I agree to the terms of use & Privacy policy</p>
        </div>
        {currState==="Login"? <p>Create a new account? <span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>: <p>Already have an Account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
       
       
     </form>

    </div>
  )
}

export default Loginpopup