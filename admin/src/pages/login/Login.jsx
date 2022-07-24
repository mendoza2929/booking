import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {GrUserAdmin} from 'react-icons/gr'

// import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import "./login.scss"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  FormText,
  Button,
} from "react-bootstrap";


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
                <div className="adminLogin">
                    <div className="aloginWrapper">
                        <div className="aloginLeft">
                            <h3 className="aloginLogo">OutPlace</h3>
                            <span className="aloginDesc">
                            </span>
                        </div>
                    <div className="aloginRight">
                        <form className="aloginBox" onSubmit={handleLogin}>
                            <span className='alogInHere'>Admin Log In</span>
                            <label id='alogInLabel' htmlFor="email">Email</label>
                            <input
                            required
                            className="aloginInput"
                            onChange={handlChange}
                            type="email"
                            id='email'
                            />
                            <label id='alogInLabel' htmlFor="password">Password</label>
                            <input
                                required
                                className="aloginInput"
                                type="password"
                                id='password'
                                minLength="6"
                                onChange={handlChange}
                            />
                            <button className="aloginButton" type="submit" disabled={loading}>
                                Log In
                            </button>
                            {error && <span>{error.message}</span>}
                            <div className='alogInText'>Don't have an account yet? <a href='/register'>Register</a></div>
                        </form>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Login