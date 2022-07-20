import React from 'react'
import "./searchItem.css"
import s1 from '../img/explore3.jpg'
const SearchItem = () => {
  return (
    <>
    
    <div className="sItem">
        <img src={s1}alt="" className='sImg' />
        <div className="searchDesc">
            <h1 className='stitle'>Cebu</h1>
            <span className='sSubtitle'>Studio Type</span>
            <span className='sFeatured'>Entire Studio 1 bathroom 21m 1 full bed</span>
            <span className='sCancel'>you can cancel later, so lock in this great price today!</span>
        </div>  
        <div className="searchDetails">
            <div className="sRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sDetailsTexts">
                <span className='sPrice'>₱300</span>
                <button className='sSearchButton'>See availability</button>
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default SearchItem