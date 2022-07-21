import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import "./login.css"
import { useNavigate } from 'react-router-dom'

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
   
    <div className="login">
        <div className="container">
            <input type="text" placeholder="username" id="username" onChange={handlChange}/>
            <input type="password" placeholder="password" id="password" onChange={handlChange}/>
            <button disabled={loading} onClick={handleLogin}>login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
   
   </>
  )
}

export default Login