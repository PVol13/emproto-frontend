import React, { PureComponent } from 'react'
import './forgotpwd.css' 
import './createpwd.css'
import Logo from './logo.png'

export class Createpwd extends PureComponent {
  render() {
    return (
      <div>
        <div className="split right-split">
            <div className='forgot-pwd-form'>
                <img className="logo" src= {Logo} alt=""/>
                <h2 className="forgot-pwd-text">Create new password</h2>
                <p className ="info-text">Your new password must be different from previous password</p>
                <div className="form-field-holder">
                    <label>New Password</label>
                    <input type={"password"}/>
                    <p className='pwd-details'>*Must be atleast 8 characters</p>
                    <label>Confirm Password</label>
                    <input type={"password"}></input>
                </div>

                <button type = {"button"} className="forgot-pwd-btn">
                <p className="info-btn">
                    Reset Password</p>
                </button>
                <p className="sub-text">Back to Login</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Createpwd