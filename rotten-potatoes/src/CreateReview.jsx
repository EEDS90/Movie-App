import React, { useState } from "react";
import axios from "axios";

function CreateReview(props) {
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [ratings, setRatings] = useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const fields = {
      title,
      comments,
      ratings: parseFloat(ratings),
    }; 


    const airtableURL = `https://api.airtable.com/v0/appYbfUec0AUlTgXA/Rotten%20Potatoes`
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );

    props.setFetchReviews(!props.fetchReviews);

    setTitle("");
    setComments("");
    setRatings("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="comments">Comments:</label>
      <input
        name="comments"
        type="text"
        placeholder="comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <label htmlFor="ratings">Ratings:</label>
      <input
        name="ratings"
        type="text"
        placeholder="ratings"
        value={ratings}
        onChange={(e) => setRatings(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default CreateReview;