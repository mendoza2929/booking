import React from 'react'
import featured from '../../data/Featured'
const FeaturedCard = () => {
  return (
    <>

      <div className="content grid5 mtop">
        {
          featured.map((items,index)=>{
            return(
            <div className="box" key={index}>
                <img src={items.cover} alt="" />
                <h4>{items.name}</h4>
                <label>{items.total}</label>
            </div>
            )
          })
        }
      </div>
    
    </>
  )
}

export default FeaturedCard