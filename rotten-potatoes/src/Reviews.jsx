import React, { useState } from "react";
import axios from "axios";


function Review(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setDeleted(true);
    setTimeout(async () => {

      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews/${props.review.id}`;

      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchReviews(!props.fetchReviews);
      setDeleted(false);
    }, 2000);
  };

  return (
    <div className="review">
      <h2>{props.review.fields.title}</h2>
      <h4>{props.review.fields.comments}</h4>
      <h5>{props.review.fields.ratings}</h5>
      <button onClick={handleDelete}>{deleted ? "Deleted" : "Movie"}</button> 
    </div>
  );
}

export default Review;