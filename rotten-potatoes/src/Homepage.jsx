import React from 'react';
import { Link } from 'react-router-dom'

function Homepage(props) {
   return (
     <div>
     <h3 className="reviewstitle">Reviews</h3>
     <div className="review-comments">
     {props.reviews.map(review => 
       <Link to={`/reviews/${review.id}`}>{review.fields.title}</Link>
)} 
     </div>
     </div>
  )
}

export default Homepage;