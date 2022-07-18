// import React from 'react'
// import useFetch from '../../hooks/useFetch'
// import f1 from '../.././img/f1.png'
// import f2 from '../.././img/f2.png'
// import f3 from '../.././img/f3.png'
// import f4 from '../.././img/f4.png'
// import f5 from '../.././img/f5.png'

// const FeaturedCard = () => {

//     const {data,loading,error} = useFetch("/hotels/countByType")

//     const items = [
//        f1,f2,f3,f4,f5
//     ]
//   return (
//     <>

//      {loading ? "Loading" : <> <div className="content grid5 mtop">
        
            
//             {data && items.map((img)=>(

           
//                       <div className="box">
//                             <img src={img} alt="" />
//                             <h4>{data[i].type}</h4>
//                             <label>{data[i].count}</label>
//                         </div>  
//                          ))
//              }
            
        
//       </div></>}
    
//     </>
//   )
// }

// export default FeaturedCard