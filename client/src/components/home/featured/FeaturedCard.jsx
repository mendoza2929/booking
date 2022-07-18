import React from 'react'
import f1 from '../.././img/f1.png'
import f2 from '../.././img/f2.png'
import f3 from '../.././img/f3.png'
import f4 from '../.././img/f4.png'
import f5 from '../.././img/f5.png'
import useFetch from '../../hooks/useFetch'
const FeaturedCard = () => {
  const {data,loading,error} = useFetch("/hotels/countByType")
  return (
    <>

    <div className="content grid5 mtop">
    {loading ? "loading" :<><div className="box" >
                <img src={f1} alt="" />
                <h4>{data[0].type}</h4>
                <label>{data[0].count}</label>
                </div>


                <div className="box" >
                <img src={f2} alt="" />
                <h4>{data[1].type}</h4>
                <label>{data[1].count}</label>
                </div>

                <div className="box" >
                <img src={f3} alt="" />
                <h4>{data[2].type}</h4>
                <label>{data[2].count}</label>
                </div>


                <div className="box" >
                <img src={f4}alt="" />
                <h4>{data[3].type}</h4>
                <label>{data[3].count}</label>
                </div>

                
                <div className="box" >
                <img src={f5} alt="" />
                <h4>{data[4].type}</h4>
                <label>{data[4].count}</label>
                </div>







          </>}
      </div>
    
    </>
  )
}

export default FeaturedCard