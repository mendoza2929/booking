import React, {useRef} from 'react'
// import {Card, Form, Button, Container} from 'react-bootstrap'
import Header from '../common/header/Header'
import Footer from '../home/footer/Footer'
import './register.css'
const Register = () => {
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
      <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">OutPlace</h3>
          <span className="registerDesc">
            Discover new journeys <br></br> & experiences with us.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <span className='registerHere'>Register here</span>
             <label id='registerLabel' htmlFor="email">Email</label>
            <input
              required
              ref={emailRef}
              className="registerInput"
              type="email"
            />
             <label id='registerLabel' htmlFor="password">Password</label>
            <input
              required
              ref={passwordRef}
              className="registerInput"
              type="password"
              minLength="6"
            />
            <label id='registerLabel' htmlFor="confirmPassword">Confirm Password</label>
            <input
              required
              ref={confirmPasswordRef}
              className="registerInput"
              type="password"
            />
            <button className="registerButton" type="submit">
              Register
            </button>
            <div className='registerText'>Already have an account? <a href='/login'>Log In</a></div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register