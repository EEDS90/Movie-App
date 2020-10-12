import React from 'react';


// This is the movie componen file where I separate the data for a cleaner looking App.js.
const Movie = (props) => (
  <div className="movie">
    <img src={props.movie.poster} className="movieimage" />
  <div className="movie-info">
    <h2>{props.movie.title}</h2>
    <p>{props.movie.ratings}</p>

  </div>
  </div>
);

export default Movie;

