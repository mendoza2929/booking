import React, { useContext, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../common/header/Header'
import useFetch from '../hooks/useFetch'
import {ImLocation2} from 'react-icons/im'
import "./result.css"
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../reservation/Reserve'
const Result = () => {
    const location = useLocation()
    const id =location.pathname.split("/")[2]

    const [modal,setModal]=useState(false)
    
    const {data,loading,error} =useFetch(`/hotels/find/${id}`)

    const {user} = useContext(AuthContext)

    const navigate  = useNavigate()

    const {value , options} = useContext(SearchContext)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2){
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    const days=(dayDifference(value[0], value[1]))


    const handleClick = () =>{
        if(user){
          setModal(true)
        }else{
          navigate("/login")
        }
    }
    
  return (
    <>
       <Header/>
      {loading ? "loading" : <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
                <i><ImLocation2/></i>
                <span>{data.address}</span>
            </div>
            <span className="hotelPrices">
              Book a stay over ₱{data.cheapestPrice} at this property 
            </span>
            <div className="hotelImages">
              {
                data.photos?.map((photo)=>(
                  
                    <div className="hoteImgWrapper">
                      <img src={data.photos} alt="" className="hotelImg" />
                    </div>
                 
                ))
              }
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className='hotelTitle'>{data.title}</h1>
                <p className='hotelDesc'>
                  {data.desc}
                </p>
              </div>
              <div className="hotelDeTailsPrice">
                    <h1>Located in {data.address}</h1>
                    <h2>
                      <b>₱{days * data.cheapestPrice * options.room}</b> ({days}{""} Days)
                    </h2>
                    <button className='reserve-btn' onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
        </div>
      </div>}
            {modal && <Reserve setOpen={setModal} hotelId={id}/>}
    </>
  )
}

export default Result