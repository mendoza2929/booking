import React from 'react'
import { Link } from 'react-router-dom'
import "./searchItem.css"

const SearchItem = ({item}) => {
  return (
    <>
    
    <div className="sItem">
        <img src={item.photos[0]}alt="" className='sImg' />
        <div className="searchDesc">
            <h1 className='stitle'>{item.name}</h1>
            <span className='sFeatured'>{item.desc}</span>
            <span className='sCancel'>you can cancel later, so lock in this great price today!</span>
        </div>  
        <div className="searchDetails">
            <div className="sRating">
                <span>Excellent</span>
                <button className="sSearchButton">8.9</button>
            </div>
            <div className="sDetailsTexts">
                <span className='sPrice'>₱{item.cheapestPrice}</span>
                <Link to={`/result/${item._id}`}>
                <button className='sSearchButton'>See availability</button>
                </Link>
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default SearchItem