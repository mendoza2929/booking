import React from 'react'
import "./featured.css"
import Heading from '../../common/Heading';
import FeaturedCard from './FeaturedCard';
const Featured = () => {
  return (
  <>
    
    <div className="featured background">
        <div className="container">
            <Heading title='Featured Property Types' subtitle='Discover all kinds of properties'/>
            <FeaturedCard/>
        </div>
    </div>

  </>
  )
}

export default Featured