import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import Header from '../common/header/Header'
import Footer from '../home/footer/Footer'
import swal from 'sweetalert'

const Login = () => {

 const showAlert = () => {
        swal({
            title: "Good job!",
            text: "You successfully login!",
            icon: "success",
            button: "Login!",
          });
    }

     const showError = () => {
       swal({
         title: "Error Login!",
         text: "Please try again!",
         icon: "error",
         button: "Login!",
       });
     };

    const [credentials,setCredentials] = useState({
        email:undefined,
        password:undefined,
    })


    const {loading , error ,dispatch} = useContext(AuthContext)

    const navigate  = useNavigate()

    const handleChange = (e)=>{
        setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleLogin = async e =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
            navigate("/")
            showAlert();
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
            showError();
        }
    }


    return (
      <>
        <Header />
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">OutPlace</h3>
              <span className="loginDesc">Ready for a new adventure?</span>
            </div>
            <div className="loginRight">
              <form className="loginBox" onSubmit={handleLogin}>
                <span className="logInHere">User Log In</span>
                <label id="logInLabel" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  className="loginInput"
                  onChange={handleChange}
                  type="email"
                  id="email"
                />
                <label id="logInLabel" htmlFor="password">
                  Password
                </label>
                <input
                  required
                  className="loginInput"
                  type="password"
                  id="password"
                  minLength="6"
                  onChange={handleChange}
                />
                <button
                  className="loginButton"
                  type="submit"
                  disabled={loading}
                >
                  Log In
                </button>
                {error && <span>{error.message}</span>}
                <div className="logInText">
                  Don't have an account yet? <a href="/register">Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
    


export default Login