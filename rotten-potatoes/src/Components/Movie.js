import React from 'react';

const IMG_API = "http://www.omdbapi.com/?i=tt3896198&apikey=4d77e518&"

// This is the movie componen file where I separate the data for a cleaner looking App.js.
const Movie = ({ title, poster, plot, ratings}) => (
  <div className="movie">
    <img src={IMG_API + poster} className="movieimage" />
  <div className="movie-info">
    <h2>{movie.title}</h2>
    <p>{movie.ratings}</p>

  </div>
  </div>
);

export default Movie;

