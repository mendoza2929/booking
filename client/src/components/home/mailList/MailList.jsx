import "./mailList.css"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import { useRef } from "react";
const MailList = () => {
  const showAlert = () => {
    swal({
        title: "Good job!",
        text: "You successfully Subscribe!",
        icon: "success",
        button: "Subscribe!",
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
    <div className="mail">
    <h1 className='mailTitle'>The first to know, always</h1>
    <span className="mailTitle">Want to keep up with our best offers? Join now.</span>
    <form ref={form}  onSubmit={sendEmail} className="mailInputContainer">
        <input type="text" placeholder="Your Email" name="email"/>
        <button onClick={showAlert}>Subscribe</button>
        
    </form>

    </div>
  )
}

export default MailList;