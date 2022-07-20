import React from 'react'
import "./contact.css"
import Back from '.././common/Back'
import img from '.././img/bg4.jpg'
import {AiOutlineSend} from 'react-icons/ai'
import Header from '../common/header/Header'
// import {AiOutlineSend} from 'react-icons/ai'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const Contact = () => {
  return (
       <>
    <Header/>
       <section className="contact mb">
        <Back name='Contact Us' title='Get Helps & friendly Support' cover={img}/>
        
        <Back title='Get Helps & friendly Support' cover={img}/>
        
        <div className='contactInfo'>
            <form>
                <div className='loc'>
                    
                  <h5 className='contactText'> <LocationOnIcon style={{ fontSize: '20px' }}/> 31st St cor 2nd Ave BGC, Taguig</h5>
                </div>
                <div className='open'>
                  <h5 className='contactText'> <AccessTimeFilledIcon style={{ fontSize: '20px' }}/> Mon - Fri 8:00am - 5:00pm</h5>
                </div>
                <div className='phone'>
                  <h5 className='contactText'> <CallIcon style={{ fontSize: '20px' }} /> 08-123-4567 || 08-123-4568 </h5>
                </div>
                <div className='email'>
                  <h5 className='contactText'><EmailIcon style={{ fontSize: '20px' }}/> inquire@outplace.com</h5>
                </div>
            </form>
        </div>
      
        <div className="container">
            <form action="" className='shadow contactForm'>
                <span className='span'>Let's keep in touch!</span>
                <div>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email' />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Inform us of your inquiries...'></textarea>
                {/* <button className='btn7'>Submit</button> */}
                <input type="submit" value='submit' className="btn7" />
            </form>
        </div>
      
       </section>
       
       </> 
  )
}

export default Contact