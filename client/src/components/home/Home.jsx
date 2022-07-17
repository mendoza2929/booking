import React from 'react'
import Award from './awards/Award'
import Featured from './featured/Featured'
import Hero from './Hero'
import "./home.css"
import Location from './location/Location'
import Recent from './recent/Recent'
const Home = () => {
  return (
   <>
   
    <Hero/>
    <Featured/>
    <Recent/>
    <Award/>
    <Location/>
    
   </>
  )
}

export default Home