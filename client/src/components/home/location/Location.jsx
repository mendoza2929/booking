import React from 'react'
import Heading from '../../common/Heading'
import { location } from '../../data/Explore'
import "./location.css"

const Location = () => {
  return (
   <>

           <section className="location padding">
            <div className="container">
                <Heading title="Explore more travel vacation rentals"/>
            </div> 

            <div className="content grid3 mtop">
                {
                    location.map((items,index)=>{
                        return(
                            <div className="box" key={index}>
                                <img src={items.cover} alt="" />
                                <div className="overlay">
                                <h5>{items.name}</h5>
                                <p>
                                    <label>{items.villas}</label>
                                    <label>{items.offices}</label>
                                    <label>{items.appartment}</label>
                                </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
   
   </>
  )
}

export default Location