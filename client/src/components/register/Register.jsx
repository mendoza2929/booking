import React, {useState} from 'react'
import axios from 'axios';
// import {Card, Form, Button, Container} from 'react-bootstrap'
import Header from '../common/header/Header'
import Footer from '../home/footer/Footer'
import './register.css'
const Register = () => {
  


    const [customerSignUp, setCustomerSignUp] = useState(
      { username: '' ,email: '', password: '', isAdmin: false,  confirmPassword: ''}
  );

  const handleChange = (event) => {
      setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(customerSignUp)
      axios.post('http://localhost:8800/api/users/register', customerSignUp)
        .then(function (response) {
            console.log(response)
            console.log('sample try')
        })
        .catch(function (error) {
            console.log(error)
            console.log('sample catch')
        })
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
          <form className="registerBox" onSubmit={handleSubmit}>
            <span className='registerHere'>Register here</span>
            <label id='registerLabel' htmlFor="username">Username</label>
            <input
              required
              className="registerInput"
              type="text"
              name="username" 
              value={customerSignUp.username} 
              onChange={handleChange}
            />
             <label id='registerLabel' htmlFor="email">Email</label>
            <input
              required
              className="registerInput"
              type="email"
              name="email" 
              value={customerSignUp.email} 
              onChange={handleChange}
            />
             <label id='registerLabel' htmlFor="password">Password</label>
            <input
              required
              className="registerInput"
              type="password"
              minLength="6"
              name="password" 
              value={customerSignUp.password} 
              onChange={handleChange}
            />
            <label id='registerLabel' htmlFor="confirmPassword">Confirm Password</label>
            <input
              required
              className="registerInput"
              type="password"
              name="confirmPassword" 
              value={customerSignUp.confirmPassword} 
              onChange={handleChange}
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