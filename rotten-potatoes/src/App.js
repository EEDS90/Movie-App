import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom'
import ShowPage from './ShowPage'
import Homepage from './Homepage'
import CreateReview from "./CreateReview";
import Reviews from "./Reviews";
import './App.css';


function App() {
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const airtableURL = `https://api.airtable.com/v0/appYbfUec0AUlTgXA/Rotten%20Potatoes`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setReviews(response.data.records);
    };
    getMovies();
  }, [fetchReviews]);

  return (
    <div className="App">
      <div className="header">
      <header>
        <h1>Rotten Potatoes</h1>
          <Link to="/"> Home </Link>
          <Link to="/new"> Review</Link>
      </header>
      </div>
      <div className="body">
           <Route exact path="/">
           <Homepage reviews={reviews} />
           </Route>
           <Route path="/reviews/:id">
             <ShowPage reviews={reviews}/>
        </Route>
        <Route path="/new">
        <CreateReview
        fetchReviews={fetchReviews}
        setFetchReviews={setFetchReviews}
      />
        </Route>
       </div>
      {/* {reviews.map((review) => (
        <Reviews
          key={review.id}
          review={review}
          fetchReviews={fetchReviews}
          setFetchReviews={setFetchReviews}
/>
      ))} */}
      
    </div>
  );
}

export default App;