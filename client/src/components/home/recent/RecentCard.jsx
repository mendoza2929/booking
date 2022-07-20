import React from 'react'
import { list } from '../../data/PropertyList';
import {GrLocation} from 'react-icons/gr'
import useFetch from '../../hooks/useFetch'
const RecentCard = () => {
 
  const {data,loading,error} = useFetch("/hotels?featured=true&limit=3")

  return (
    <>

    { loading ? "loading" : <> <div className="content grid3 mtop">
        {
          data.map((item)=>{
            return(
              <div className="box shadow" key={item.id}>
                  <div className="img">
                    <img src={item.photos[0]}alt="" />
                  </div>
                  <div className="text">
                      <h4>{item.name}</h4>
                      <p><i><GrLocation/></i>{item.city}</p>
                      <label >{item.type}</label>
                  </div>
                  <div className="button flex">
                      <div>
                        <span>₱{item.cheapestPrice}</span>
                        <label>/Day</label>
                      </div>
                      <button className='btn3'>Check Availability</button>
                  </div>
              </div>
            )
          })
        }
      </div></>}

    </>
  )
}

export default RecentCard