import React from 'react'
// import logo from '../.././img/logo1.png'
import {Link} from 'react-router-dom'
import nav from '../../data/Data'
import {BiLogIn} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import {BiExit} from 'react-icons/bi'
import "./header.css"
import { useState } from 'react'
const Header = () => {

    const [navlist, setNavlist] = useState(false)

  return (
   <>
    
    <header>
        <div className="container flex">
            <div className="logo">
                {/* <img src="" alt="" /> */} dotBooking
            </div>
            <div className="nav">
                <ul className={navlist ?  "small" : 'flex'}>
                     {nav.map((list,index)=>(
                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                     ))}
                </ul>
            </div>
            <div className="button flex">
                <button className="btn1">
                    <i><BiLogIn/></i> Login
                </button>
            </div>
                    
            <div className="toggle">
                <button onClick={()=>setNavlist(!navlist)}>
                    {navlist? <i><BiExit/></i> : <i><FaBars/></i> }
                </button>
            </div>

        </div>
    </header>
   
   </>
  )
}

export default Header