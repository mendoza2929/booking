import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/header/Header'
import useFetch from '../hooks/useFetch'
import {ImLocation2} from 'react-icons/im'
import f1 from '../.././components/img/explore1.jpg'
import f2 from '../.././components/img/explore10.jpg'
import f3 from '../.././components/img/explore10.jpg'
import f4 from '../.././components/img/explore10.jpg'
import "./result.css"
const Result = () => {
    const location = useLocation()
    console.log(location)
    const {data,loading,error} =useFetch(`/hotels`)

    const photos = [
      {
      cover:f1
      },
      {
        cover:f2
      },
      {
        cover:f3
      },
    ]
  return (
    <>
       <Header/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='booknow'>Reserve or Book now!</button>
          <h1 className="hotelTitle">Cebu</h1>
            <div className="hotelAddress">
                <i><ImLocation2/></i>
                <span>Cebu</span>
            </div>
            <span className="hotelPrices">
              Book a stay over ₱300 at this property 
            </span>
            <div className="hotelImages">
              {
                photos.map((photo)=>(
                  
                    <div className="hoteImgWrapper">
                      <img src={photo.cover} alt="" className="hotelImg" />
                    </div>
                 
                ))
              }
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className='hotelTitle'>Cebu Hotel</h1>
                <p className='hotelDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Perspiciatis, impedit nam asperiores, fuga eveniet, aliquid quae excepturi
                    labore distinctio praesentium cum. Quasi fuga reprehenderit eaque. 
                    Ab voluptate doloribus accusamus cum!
                </p>
              </div>
              <div className="hotelDeTailsPrice">
                    <h1>Located in Cebu</h1>
                    <h2>
                      <b>₱300</b> (9 nights)
                    </h2>
                    <button>Reserve or Book Now!</button>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Result