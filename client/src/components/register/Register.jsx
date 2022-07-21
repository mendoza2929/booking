import React, {useRef} from 'react'
// import {Card, Form, Button, Container} from 'react-bootstrap'
import Header from '../common/header/Header'
import Footer from '../home/footer/Footer'
import './register.css'
const Register = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        if(confirmPasswordRef.current.value !== passwordRef.current.value){
            passwordRef.current.setCustomValidity("Password don't match!");
        }
    }

  return (
    <>
    <Header/>
      <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">OutPlace</h3>
          <span className="loginDesc">
            Discover new journeys <br></br> & experiences with us.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <span className='registerHere'>Register here</span>
            <label htmlFor="username">Username</label>
            <input
              required
              ref={usernameRef}
              className="loginInput"
            />
             <label htmlFor="email">Email</label>
            <input
              required
              ref={emailRef}
              className="loginInput"
              type="email"
            />
             <label htmlFor="password">Password</label>
            <input
              required
              ref={passwordRef}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              required
              ref={confirmPasswordRef}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Register
            </button>
            <div className='logInText'>Already have an account? <a href='/login'>Log In</a></div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register