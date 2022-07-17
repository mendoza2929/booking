import React from 'react'

const Heading = ({title,subtitle,sub}) => {
  return (
    <>
    
    <div className="heading">
      <h1>{title}</h1>
      <p>{sub}</p>
       <h3>{subtitle}</h3>
    </div>
    
    </>
  )
}

export default Heading