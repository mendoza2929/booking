import React from 'react'
import Heading from '../../common/Heading'
import l1 from '../.././img/explore1.jpg'
import l2 from '../.././img/explore2.jpg'
import l3 from '../.././img/explore3.jpg'
import useFetch from '../../hooks/useFetch'
import "./location.css"

const Location = () => {

   const {data,loading,error} = useFetch("/hotels/countByCity?cities=cebu,manila,davao")
  return (
   <>

           <section className="location padding">
            <div className="container">
                <Heading title="Explore more travel vacation rentals"/>
            </div> 

           {loading ? "Loading Please Wait..." : <><div className="content grid3 mtop">
            
                   
                            <div className="box">
                                <img src={l1} alt="" />
                                <div className="overlay">
                                <h5>Cebu</h5>
                                <p>

                                    <label>{data[0]} Properties</label>
                                    
                                    {/* <label>{items.villas}</label>
                                    <label>{items.offices}</label>
                                    <label>{items.appartment}</label> */}
                                </p>
                                </div>
                            </div> 
                            
                            <div className="box">
                                <img src={l2} alt="" />
                                <div className="overlay">
                                <h5>Manila</h5>
                                <p>

                                    <label>{data[1]} Properties</label>
                                    
                                    {/* <label>{items.villas}</label>
                                    <label>{items.offices}</label>
                                    <label>{items.appartment}</label> */}
                                </p>
                                </div>
                            </div> 
                            
                            <div className="box">
                                <img src={l3} alt="" />
                                <div className="overlay">
                                <h5>Davao</h5>
                                <p>

                                    <label>{data[2]} Properties</label>
                                    
                                    {/* <label>{items.villas}</label>
                                    <label>{items.offices}</label>
                                    <label>{items.appartment}</label> */}
                                </p>
                                </div>
                            </div> 
                        
                    
                
            </div></>}
        </section>
   
   </>
  )
}

export default Location