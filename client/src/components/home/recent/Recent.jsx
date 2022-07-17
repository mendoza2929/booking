import React from 'react'
import Heading from '../../common/Heading';
import RecentCard from './RecentCard';
import "./recent.css"
const Recent = () => {
  return (
   <>
    
    <section className="recent padding">
        <div className="container">
            <Heading title='List of recent properties'sub='Find top sites for sale or rental of an apartment, condo, office, home, and land.' />
            <RecentCard/>
        </div>
    </section>
   
   </>
  )
}

export default Recent