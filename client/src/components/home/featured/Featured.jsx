import React from 'react'
import "./featured.css"
import f1 from '../.././img/f1.png'
import f2 from '../.././img/f2.png'
import f3 from '../.././img/f3.png'
import f4 from '../.././img/f4.png'
import f5 from '../.././img/f5.png'

import Heading from '../../common/Heading';
import useFetch from '../../hooks/useFetch'
// import FeaturedCard from './FeaturedCard';
const Featured = () => {
  const {data,loading,error} = useFetch("/hotels/countByType")

  const item = [
    f1,f2,f3,f4,f5
  ]
  return (
  <>
    
    <div className="featured background">
        <div className="container">
            <Heading title='Featured Property Types' sub='Discover all kinds of properties'/>


             {loading ? "loading":<><div className="content grid5 mtop">

                      {data && item.map((img,index)=>(
                       
                         <div className="box" key={index}>
                            <img src={img} alt="" />
                              <h4>{data[index]?.type}</h4>
                              <label>{data[index]?.count}</label>
                            </div> 
                        
                      ))}


              </div></>}
            
        </div>
    </div>

  </>
  )
}

export default Featured