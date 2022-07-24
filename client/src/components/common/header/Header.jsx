import React, { useContext } from 'react'
import axios from 'axios';
// import logo from '../.././img/logo1.png'
import {Link} from 'react-router-dom'
import nav from '../../data/Data'
// import {BiLogIn} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import {BiExit} from 'react-icons/bi'
import "./header.css"
import { useState } from 'react'
import logo from '../../img/logo.png'
import { AuthContext } from '../../../context/AuthContext'
const Header = () => {

    const { user, dispatch } = useContext(AuthContext);

    const [navlist, setNavlist] = useState(false);

    let isLoggedIn;
    // let usertest = 'test';
    console.log('user values:', user);
    if (user === null) {
        console.log('variable is undefined or null');
        isLoggedIn = false;
    } else {
        console.log('variable is defined');
        isLoggedIn = true;
    }

    console.log('User status is isLoggedIn: ', isLoggedIn);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.delete('/auth/logout')
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log(error)
          })
          dispatch({ type: "LOGOUT" });
        }

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />{" "}
            </Link>
          </div>
          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {console.log("isLoggedIn User", isLoggedIn)}
          {isLoggedIn ? (
            <div className="b">
              {" "}
              {user.username}{" "}
              <button className="btn1" onClick={handleSubmit}>
                <a href="/logout">Logout</a>
              </button>
            </div>
          ) : (
            <div className="b">
              <button className="btn1">
                <a href="/register">Register</a>
              </button>
              <button className="btn1">
                <a href="/login">Login</a>
              </button>
            </div>
          )}

          <div className="toggle">
            <button onClick={() => setNavlist(!navlist)}>
              {navlist ? (
                <i>
                  <BiExit />
                </i>
              ) : (
                <i>
                  <FaBars />
                </i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header