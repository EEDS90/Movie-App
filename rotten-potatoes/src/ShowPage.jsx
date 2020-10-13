import React from 'react';
import { useParams } from 'react-router-dom';

function ShowPage(props) {
  const params = useParams()
  console.log(params)

  const review = props.reviews.find((r) => r.id === params.id)
  
return (
    <div>

       <h2>{review.fields.title}</h2>
       <h3>{review.fields.ratings}</h3>
       <h4>{review.fields.comments}</h4>
     </div>
   )
 }

 export default ShowPage; 