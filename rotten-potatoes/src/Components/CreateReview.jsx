import React, { useState } from "react";
import axios from "axios";

function CreateReview(props) {
  const [title, setTitle] = useState("Mulan");
  const [comment, setComments] = useState("Family movie, fun and adventurous. But original movie was better!");
  const [ratings, setRatings] = useState("8.5");

  const handleSubmit = async (e) => {
    // prevent page reload.
    e.preventDefault();
    // we have to make a fields object to holds the title, comments and ratings
    const fields = {
      title,
      comments,
      ratings,
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
    // clear out our inputs so we can type something new in
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
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="ratings">Author:</label>
      <input
        name="ratings"
        type="text"
        placeholder="ratings"
        value={ratings}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default CreateReview;