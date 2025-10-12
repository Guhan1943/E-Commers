import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='login-signup-page'>
      <div className="login_signup-container">
        <h1>signup</h1>
        <div className="login_signup-field">
          <input type="text"  placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>continue</button>
        <p className='loginsignup-login'>Already have an account <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='' name='' />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}
