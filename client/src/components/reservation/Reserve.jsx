import React from 'react'
import "./reserve.css"
import {IoMdExit} from 'react-icons/io'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Reserve = ({setOpen,hotelId}) => {

    const [selectedRoom,setSelectedRoom] =useState([])

    const {data,loading,error} =useFetch(`/hotels/room/${hotelId}`)

    const {value}= useContext(SearchContext)


    const getDateInRange = (startDate,endDate)=>{

        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime())


        const value = []

        while(date <= end ){
            value.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }

        return value
    }

    const allDates = getDateInRange(value[0],value[1])

    const isAvailable = (roomNumber) =>{
        const isFound = roomNumber.unavailableDates.some(date=>
            allDates.includes(new Date(date).getTime()))

            return !isFound
    }
   

    const handleSelect = (e)=>{
        const checked= e.target.checked
        const value=e.target.value
        setSelectedRoom(checked ? [...selectedRoom,value] : selectedRoom.filter(item=>item !==value))
    }   

    const navigate = useNavigate()

    const handleClick = async () =>{
        try{
            await Promise.all(selectedRoom.map(roomId=>{
                const res = axios.put(`/rooms/availability/${roomId}`,{value:allDates})
                return res.data

            }))  
            setOpen(false)
            navigate("/")
        }catch(err){

        }
    }

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
                            <div className="rPrice">₱ {item.price }</div>
                        </div>
                            <div className="rSelectRooms">
                            {item.roomNumber.map(roomNumber=>(
                                 <div className="room">
                                <label>{roomNumber.number}</label>
                                <input type="checkbox"   
                                value={roomNumber._id}
                                onChange={handleSelect}
                                 disabled={!isAvailable(roomNumber)}
                                 
                                 />
                           
                        </div>
                         ))}
                         </div>
                    </div>
                ))}
                <button onClick={handleClick}  className="rButton">Reserve Now!</button>
            </div>
        </div>
  )
}

export default Reserve