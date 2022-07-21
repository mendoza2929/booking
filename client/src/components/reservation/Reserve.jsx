import React from 'react'
import "./reserve.css"
import {IoMdExit} from 'react-icons/io'
import useFetch from '../hooks/useFetch'
const Reserve = ({setOpen,hotelId}) => {
    const {data,loading,error} =useFetch(`hotels/room/${hotelId}`)
  return (
        <div className="reserve">
            <div className="rContainer">
                <i className='rClose' onClick={()=>setOpen(false)}><IoMdExit/></i>
                <span>Select your rooms:</span>
                {data.map(item=>(
                    <div className="rItem">
                        <div className="rIteminfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Max People <b>{item.maxPeople}</b></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Reserve