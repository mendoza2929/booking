import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import Header from '../common/header/Header'
import Footer from '../home/footer/Footer'

const Login = () => {

    const [credentials,setCredentials] = useState({
        email:undefined,
        password:undefined,
    })


    const {loading , error ,dispatch} = useContext(AuthContext)

    const navigate  = useNavigate()

    const handlChange = (e)=>{
        setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleLogin = async e =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
            navigate("/")
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    }


  

  return (
    <>
    {/* <div className="login">
        <div className="container">
            <input type="text" placeholder="username" id="username" onChange={handlChange}/>
            <input type="password" placeholder="password" id="password" onChange={handlChange}/>
            <button disabled={loading} onClick={handleLogin}>login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  */}

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
    <form className="loginBox" onSubmit={handleLogin}>
      <span className='registerHere'>User Log In</span>
      <label htmlFor="email">Email</label>
      <input
        required
        className="loginInput"
        onChange={handlChange}
        type="text"
        id='email'
      />
       <label htmlFor="password">Password</label>
      <input
        required
        className="loginInput"
        type="password"
        id='password'
        minLength="6"
        onChange={handlChange}
      />
      <button className="loginButton" type="submit" disabled={loading}>
        Log In
      </button>
      {error && <span>{error.message}</span>}
      <div className='logInText'>Don't have an account yet? <a href='/register'>Register</a></div>
    </form>
  </div>
</div>
</div>
<Footer/>

    </>
  );
}
    

   
  

export default Login