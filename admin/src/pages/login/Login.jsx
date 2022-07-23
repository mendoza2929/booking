import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {GrUserAdmin} from 'react-icons/gr'

// import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'



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
            if(res.data.isAdmin){
              dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
              navigate("/")
            }else{
              dispatch({type:"LOGIN_FAILURE",payload:{message:"You are not the administrator.!"}})
            }
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    }




  return (
   <>
   
    {/* <div className="login">
        <div className="container">
            <input type="text" placeholder="username" id="email" onChange={handlChange}/>
            <input type="password" placeholder="password" id="password" onChange={handlChange}/>
            <button disabled={loading} onClick={handleLogin}>login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div> */}
    <div className="login">
                    <div className="loginWrapper">
                        <div className="loginLeft">
                            <h3 className="loginLogo">OutPlace</h3>
                            <span className="loginDesc">
                            Ready for a new adventure?
                            </span>
                        </div>
                    <div className="loginRight">
                        <form className="loginBox" onSubmit={handleLogin}>
                            <span className='logInHere'>Admin Log In</span>
                            <label id='logInLabel' htmlFor="email">Email</label>
                            <input
                            required
                            className="loginInput"
                            onChange={handlChange}
                            type="email"
                            id='email'
                            />
                            <label id='logInLabel' htmlFor="password">Password</label>
                            <input
                                required
                                className="loginInput"
                                type="password"
                                id='password'
                                minLength="6"
                                onChange={handlChange}
                            />
                              <button className="loginButton" disabled={loading} onClick={handleLogin}>login</button>
                              {error && <span>{error.message}</span>}
                          
                        </form>
                        </div>
                    </div>
                </div>





   
   </>
  )
}
    



export default Login