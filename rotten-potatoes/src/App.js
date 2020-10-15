import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import ShowPage from "./ShowPage";
import Homepage from "./Homepage";
import CreateReview from "./CreateReview";
import Reviews from "./Reviews";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);
  const [movies, setMovies] = useState([]);
  const posterURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getTitle = async () => {
      const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
      const response = await axios.get(movieURL);
      setMovies(response.data.results);
    };
    getTitle();
  }, []);
  console.log(movies);

  useEffect(() => {
    const getMovies = async () => {
      const airtableURL = `https://api.airtable.com/v0/appYbfUec0AUlTgXA/Rotten%20Potatoes`;

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
        <Header />
          <nav>
           <Link to="/"> Home </Link>
           <Link to="/new"> Review</Link>
          </nav>
      </div>
      
      <div className="body">
        <Route exact path="/">
          <Homepage reviews={reviews} />
        </Route>
        <Route path="/reviews/:id">
          <ShowPage reviews={reviews} />
        </Route>
       <Navbar />
        {movies.map((movie) => (
      <div key={movie.id}>
            <div className="movie-container">
            <img
              className="image"
              src={posterURL + movie.poster_path}
              alt={"image" + movie.title}
              ratings={"title" + movie.overview}  
            />
            {/* <br /> */}
            <p className="title">{movie.title}
                <br /></p>
              {/* <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
             </div>    */}
          </div>    
      </div>
        ))}

        <Route path="/new">
          <CreateReview
            fetchReviews={fetchReviews}
            setFetchReviews={setFetchReviews}
          />
        </Route>

        <Route path="/full-reviews">
          {reviews.map((review) => (
            <Reviews
              key={review.id}
              review={review}
              fetchReviews={fetchReviews}
              setFetchReviews={setFetchReviews}
            />
          ))}
        </Route>

       <Footer />
        
      </div>
    </div>
  );
}

export default App;
