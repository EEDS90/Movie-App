import React from 'react';
import { Link } from 'react-router-dom'

function Homepage(props) {
   return (
     <div>
     <h3 className="reviewstitle">Reviews</h3>
     <div className="reviewcomments">
     {props.reviews.map(reviews => 
       <Link to={`/reviews/${reviews.name}`}> <img src={reviews.image}/></Link>
)} 
     </div>
     </div>
  )
}

export default Homepage;