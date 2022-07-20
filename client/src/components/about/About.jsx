import React from 'react'
import Back from '../common/Back'
import img from '.././img/bg2.jpg'
import Footer from '../home/footer/Footer'
import SecurityIcon from '@mui/icons-material/Security';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import SavingsIcon from '@mui/icons-material/Savings';
import HandshakeIcon from '@mui/icons-material/Handshake';


// import Heading from '../.././components/common/Heading'

import "./about.css"
import Header from '../common/header/Header'
const About = () => {
  return (
   <>
    <Header/>
    <section className="about">
        <Back name='About US' title='Who We are' cover={img}/>
         </section>
        <div className="mainSection">
            <div className="contentBox">
                <h1>Discover what Outplace is all about</h1>
                <p>We connect homeowners with families and vacationers looking for something more than a hotel for their trip. Our community offers families an array of rental property types such as condos, cabins, lake rentals, beach houses, and more.</p>
                <p className='aboutText'>Discover properties in destinations that everyone dreams of visiting. All it takes is a quick Outplace property search to securely book your next condo, cabin, or house anywhere in the Philippines, all within your budget. </p>
            </div>
            <div className="imgContainer">
                <img src={img} style={{width:'360px'}} alt="" />
            </div>
        </div>

        <div className="mainSection-1">
            <div className="contentBox1">
                <h2 className='mission'>Mission</h2>
                <h5>To create a world where anyone can belong anywhere and we are focused on creating an end-to-end travel platform that will handle every part of your trip.</h5>
            </div>
            <div className="contentBox1">
                <h2>Vision</h2>
                <h5 className='vision'>On our commitment to providing a trusted resource for travellers with valued advice and insights from the Outplace community, based on the wisdom of the crowds.</h5>
            </div>
        </div>


        <div className="mainSection">
        
            <div className="contentBox">
                <h1>Here’s what makes a vacation rental perfect for you</h1>
                <p>Whether you're planning a family vacation with your pet, a relaxing weekend getaway, or an adventurous excursion, vacation rentals are ideal for trips of all types.</p>
                <p>You can also find vacation home rentals with additional features such as waterfront views, a private pool or hot tub, or outdoor entertainment space.</p>
            </div>
            <div className="imgContainer">
                <img src={img} style={{width:'360px'}} alt="" />
            </div>
        </div>

        <div className="mainSection-2">
            <div className="contentBox1">
            <SecurityIcon style={{fontSize:'50px'}}/>
               <p><b>Peace of mind</b></p>
                <p>Our Book with Confidence guarantee gives you 24/7 support.</p>
            </div>
            <div className="contentBox1">
                <EnhancedEncryptionIcon style={{fontSize:'50px'}}/>
                <p><b>All the privacy of home</b></p>
                <p>Enjoy full kitchens, laundry, pools, yards and more.</p>
            </div>
            <div className="contentBox1">
                <SavingsIcon style={{fontSize:'50px'}}/>
                <p><b>More for less</b></p>
                <p>More space, more privacy, more amenities — more value.</p>
            </div>
            <div className="contentBox1">
                <HandshakeIcon style={{fontSize:'50px'}}/>
                <p><b>A place for everyone</b></p>
                <p>We stand for diversity, inclusion and families everywhere</p>
            </div>
        </div>
        <Footer/>
   
   </>
  )
}

export default About