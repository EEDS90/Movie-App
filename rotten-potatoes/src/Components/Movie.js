import React from 'react';

const IMG_API = "http://www.omdbapi.com/?i=tt3896198&apikey=4d77e518&"

// This is the movie component
const Movie = ({ title, poster, plot, ratings}) => (
  <div className="movie">
    
      <img src={IMG_API + poster} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <p>{ratings}</p>

    </div>
  </div>
);

export default Movie;

