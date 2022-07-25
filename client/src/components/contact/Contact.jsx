import React from 'react'
import "./contact.css"
import Back from '.././common/Back'
import img from '.././img/bg4.jpg'
import Header from '../common/header/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import  { useRef } from 'react'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
const Contact = () => {

  const showAlert = () => {
    swal({
        title: "Good job!",
        text: "You successfully Send Message!",
        icon: "success",
        button: "Message!",
      });
}

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_up11p9j', 'template_hwwtz1h', form.current, 'rkPdNgdyIpvgB4dzJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
       <>
    <Header/>
       <section className="contact mb">
        
        <Back title='Get Helps & friendly Support' cover={img}/>
        
        <div className='contactInfo'>
            <form className='contactDetails'>
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
            <form ref={form} className='shadow contactForm' onSubmit={sendEmail}>
                <span className='spanContact'>Let's keep in touch!</span>
                <div className='inputContact'>
                    <input type="text" placeholder='Name' name="name"/>
                    <input type="email" placeholder='Email' name="email"/>
                </div>
                <textarea name="message " id="" cols="30" rows="10" placeholder='Inform us of your inquiries...'></textarea>
                <button onClick={showAlert} type="submit" value='submit' className="btn7">Submit</button>
            </form>
        </div>
      
       </section>
       
       </> 
  )
}

export default Contact