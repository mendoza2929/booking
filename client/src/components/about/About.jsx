import React from 'react'
import Back from '../common/Back'
import img from '.././img/bg2.jpg'


import Heading from '../.././components/common/Heading'

import "./about.css"
import Header from '../common/header/Header'
const About = () => {
  return (
   <>
    <Header/>
    <section className="about">
        <Back name='About US' title='Who We are' cover={img}/>
        <div className="container flex mtop">
            <div className="left row">
                <Heading title='Check our out company story and work process'/>
                <p>Do you want to work on your product with a team that follows a well-defined design process, meets deadlines, and delivers flawless results?. Our design team is a small design studio within a large software company that can help you create an engaging product quickly and easily.</p>
            
                <button className='btn2'>More About Us</button>
            </div>
            <div className="right row">
                <img src={img} alt="" />
            </div>
        </div>
    </section>
   
   </>
  )
}

export default About