import React from 'react'
import "./contact.css"
import Back from '.././common/Back'
import img from '.././img/bg4.jpg'
import {AiOutlineSend} from 'react-icons/ai'
import Header from '../common/header/Header'
const Contact = () => {
  return (
       <>
    <Header/>
       <section className="contact mb">
        <Back name='Contact Us' title='Get Helps & friendly Support' cover={img}/>
        
        <div className="container">
            <form action="" className='shadow'>
                <h1>dotBooking</h1>
                <span>Fillup the Form</span>
                <div>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Inform us of your inquiries...'></textarea>
                <button className='btn7'>Submit <i><AiOutlineSend/></i></button>
            </form>
        </div>
      
       </section>
       
       </> 
  )
}

export default Contact