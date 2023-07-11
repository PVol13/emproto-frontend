import React from 'react'
import './forgotpwd.css' 
import Image from './g10.png'
import Logo from './logo.png'

const Forgotpwd = () => {
  return (
    /*a parent div containing 2 divs - one for icon, one for card*/ 
    <div>  
        <div className='split left-split'>
            <img className="login-banner" 
            src={Image} alt=""/>
        </div>

        <div className="split right-split">
            <div className='forgot-pwd-form'>
                <img className="logo" src= {Logo} alt=""/>
                <h2 className="forgot-pwd-text">Forgot Password</h2>
                <p className ="info-text"> Please enter the email associated with your account
                </p>
                <div className="form-field-holder">
                    <label>Email</label>
                    <input type={"text"}/>
                </div>

                <button type = {"button"} className="forgot-pwd-btn">
                <p className="info-btn">
                    Send Link</p>
                </button>
                <p className="sub-text">Back to Login</p>
            </div>
        </div>
    </div>
  )
}

export default Forgotpwd;