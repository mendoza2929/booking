import React from 'react'
import Award from './awards/Award'
import Featured from './featured/Featured'
import Hero from './Hero'
import "./home.css"
import Location from './location/Location'
import Recent from './recent/Recent'
import MailList from './mailList/MailList'
import Footer from './footer/Footer'
const Home = () => {
  return (
   <>
   
    <Hero/>
    <Featured/>
    <Recent/>
    <Award/>
    <Location/>
    <MailList/>
    <Footer/>
   </>
  )
}

export default Home