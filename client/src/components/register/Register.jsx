import React, {useState} from 'react'
import axios from 'axios';
// import {Card, Form, Button, Container} from 'react-bootstrap'
import Header from '../common/header/Header'
import Footer from '../home/footer/Footer'
import './register.css'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const showAlert = () => {
    swal({
        title: "Good job!",
        text: "You successfully Register!",
        icon: "success",
        button: "Register!",
      });
}

  const showError = () => {
    swal({
        title: "Error Password Not Match!",
        text: "Error Please try again!!",
        icon: "error",
        button: "Register!",
      });
    }

  const showExist = () => {
    swal({
      title: "Error User already exist!",
      text: "Error Please try again!!",
      icon: "error",
      button: "Register!",
    });
  };
  
  
    const [customerRegister, setCustomerRegister] = useState(
      { username: '' ,email: '', password: '', isAdmin: false,  confirmPassword: ''}
  );

  const handleChange = (event) => {
      setCustomerRegister({...customerRegister, [event.target.name]: event.target.value})
  }
  const navigate  = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(customerRegister);
      const res = await axios.post("/auth/register", customerRegister)
      if ( res.status === 200 ) {
        showAlert();
        navigate("/login");
      } 
    } catch (e) {
      console.log("response", e.response.data);
      if (e.response.data === "User already exists") showExist();
      if (e.response.data === "Passwords do not match!") showError();
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
          <form className="registerBox" onSubmit={handleSubmit}>
            <span className='registerHere'>Register here</span>
            <label id='registerLabel' htmlFor="username">Username</label>
            <input
              required
              className="registerInput"
              type="text"
              name="username" 
              value={customerRegister.username} 
              onChange={handleChange}
            />
             <label id='registerLabel' htmlFor="email">Email</label>
            <input
              required
              className="registerInput"
              type="email"
              name="email" 
              value={customerRegister.email} 
              onChange={handleChange}
            />
             <label id='registerLabel' htmlFor="password">Password</label>
            <input
              required
              className="registerInput"
              type="password"
              minLength="6"
              name="password" 
              value={customerRegister.password} 
              onChange={handleChange}
            />
            <label id='registerLabel' htmlFor="confirmPassword">Confirm Password</label>
            <input
              required
              className="registerInput"
              type="password"
              name="confirmPassword" 
              value={customerRegister.confirmPassword} 
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