import React from 'react'
import { list } from '../../data/PropertyList';
import {GrLocation} from 'react-icons/gr'

const RecentCard = () => {
  return (
    <>

      <div className="content grid3 mtop">
        {
          list.map((val,index)=>{
            const {cover,location,name,price,type} = val;
            return(
              <div className="box shadow" key={index}>
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                  <div className="text">
                      <h4>{name}</h4>
                      <p><i><GrLocation/></i>{location}</p>
                      <label >{type}</label>
                  </div>
                  <div className="button flex">
                      <div>
                        <span>₱{price}</span>
                        <label>/day</label>
                      </div>
                      <button className='btn3'>Check Availability</button>
                  </div>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default RecentCard