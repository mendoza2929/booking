import React from 'react'
import Back from '../common/Back'
import img from '../img/bg3.webp'
import Featured from '.././home/featured/Featured'
import Header from '../common/header/Header'
const Services = () => {
  return (
    <>
    <Header/>
    <section className="section services mb">
        <Back name='Services' title='Services - All Services' cover={img}/>
    
        <div className="featured container">
            <Featured/>
        </div>
    </section>
    
    </>
  )
}

export default Services